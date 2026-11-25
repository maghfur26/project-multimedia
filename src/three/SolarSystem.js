import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

export function createSolarSystem({ canvas, wrap, labelsEl, planets, onSelect }) {
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0x050816)

  const width = () => Math.max(1, wrap.clientWidth)
  const height = () => Math.max(1, wrap.clientHeight)

  const camera = new THREE.PerspectiveCamera(60, width() / height(), 0.1, 3000)
  camera.position.set(0, 40, 90)

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
  renderer.setSize(width(), height())
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  scene.add(new THREE.AmbientLight(0x8090d0, 0.9))
  const sunLight = new THREE.PointLight(0xfff2cc, 2.5, 600)
  sunLight.position.set(0, 0, 0)
  scene.add(sunLight)

  const glowCanvas = document.createElement('canvas')
  glowCanvas.width = glowCanvas.height = 256
  const gctx = glowCanvas.getContext('2d')
  const grd = gctx.createRadialGradient(128, 128, 0, 128, 128, 128)
  grd.addColorStop(0, 'rgba(255,230,150,1)')
  grd.addColorStop(0.22, 'rgba(255,190,60,0.65)')
  grd.addColorStop(0.55, 'rgba(255,140,20,0.18)')
  grd.addColorStop(1, 'rgba(255,120,0,0)')
  gctx.fillStyle = grd
  gctx.fillRect(0, 0, 256, 256)
  const glowTex = new THREE.CanvasTexture(glowCanvas)

  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.08
  controls.minDistance = 20
  controls.maxDistance = 260

  const raycaster = new THREE.Raycaster()
  const pointer = new THREE.Vector2()

  const starGeo = new THREE.BufferGeometry()
  const starPos = []
  for (let i = 0; i < 3200; i++) {
    starPos.push((Math.random() - 0.5) * 800, (Math.random() - 0.5) * 800, (Math.random() - 0.5) * 800)
  }
  starGeo.setAttribute('position', new THREE.Float32BufferAttribute(starPos, 3))
  const starPoints = new THREE.Points(
    starGeo,
    new THREE.PointsMaterial({ color: 0xffffff, size: 0.7, transparent: true, opacity: 0.85 }),
  )
  scene.add(starPoints)

  const planetMeshes = []
  const orbitLines = []
  const labelEls = []

  planets.forEach((p, i) => {
    const isSun = p.name === 'Matahari'
    const geo = new THREE.SphereGeometry(p.radius, 32, 32)
    const mat = isSun
      ? new THREE.MeshBasicMaterial({ color: new THREE.Color(p.color) })
      : new THREE.MeshStandardMaterial({
          color: new THREE.Color(p.color),
          roughness: 0.75,
          metalness: 0.05,
          emissive: new THREE.Color(p.color).multiplyScalar(0.12),
        })
    const mesh = new THREE.Mesh(geo, mat)
    mesh.userData.index = i

    if (isSun) {
      const glow = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: glowTex,
          transparent: true,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        }),
      )
      glow.scale.set(p.radius * 7, p.radius * 7, 1)
      mesh.add(glow)
    }

    if (p.name === 'Saturnus') {
      const ringGeo = new THREE.RingGeometry(p.radius + 0.6, p.radius + 2.2, 64)
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0xd4c08a,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.7,
      })
      const ring = new THREE.Mesh(ringGeo, ringMat)
      ring.rotation.x = Math.PI / 2.2
      mesh.add(ring)
    }

    if (p.name === 'Bumi') {
      const mGeo = new THREE.SphereGeometry(0.25, 16, 16)
      const mMat = new THREE.MeshStandardMaterial({ color: 0xcccccc })
      const moon = new THREE.Mesh(mGeo, mMat)
      moon.userData = { moon: true, angle: 0 }
      mesh.add(moon)
      mesh.userData.moon = moon
    }

    scene.add(mesh)
    planetMeshes.push({ mesh, angle: Math.random() * Math.PI * 2, planet: p })

    if (p.distance > 0) {
      const pts = []
      for (let a = 0; a <= Math.PI * 2; a += 0.05) {
        pts.push(new THREE.Vector3(Math.cos(a) * p.distance, 0, Math.sin(a) * p.distance))
      }
      const oGeo = new THREE.BufferGeometry().setFromPoints(pts)
      const oLine = new THREE.Line(
        oGeo,
        new THREE.LineBasicMaterial({ color: 0x7086ff, transparent: true, opacity: 0.55 }),
      )
      scene.add(oLine)
      orbitLines.push(oLine)
    }

    const lab = document.createElement('div')
    lab.className = 'ss-label'
    lab.textContent = p.name
    labelsEl.appendChild(lab)
    labelEls.push(lab)
  })

  let paused = false
  let speed = 1
  let showOrbits = true

  const clock = new THREE.Clock()
  let rafId = null
  let camAnim = null

  function animateCamera(toPos, lookAt) {
    camAnim = {
      start: camera.position.clone(),
      startTarget: controls.target.clone(),
      toPos,
      lookAt,
      t0: performance.now(),
      dur: 750,
    }
  }

  function updateCameraAnim() {
    if (!camAnim) return
    const t = Math.min(1, (performance.now() - camAnim.t0) / camAnim.dur)
    const e = 1 - Math.pow(1 - t, 3)
    camera.position.lerpVectors(camAnim.start, camAnim.toPos, e)
    controls.target.lerpVectors(camAnim.startTarget, camAnim.lookAt, e)
    if (t >= 1) camAnim = null
  }

  function selectPlanet(i) {
    const entry = planetMeshes[i]
    if (!entry) return
    const p = entry.planet
    const target = new THREE.Vector3()
    entry.mesh.getWorldPosition(target)
    const offset = new THREE.Vector3(0, p.radius * 3 + 6, p.radius * 6 + 12)
    animateCamera(target.clone().add(offset), target)
    if (onSelect) onSelect(p, i)
  }

  function resolveIndex(obj) {
    let node = obj
    while (node) {
      if (typeof node.userData?.index === 'number') return node.userData.index
      node = node.parent
    }
    return -1
  }

  let downX = 0
  let downY = 0
  let downTime = 0

  function onPointerDown(e) {
    downX = e.clientX
    downY = e.clientY
    downTime = performance.now()
  }

  function onPointerUp(e) {
    const moved = Math.hypot(e.clientX - downX, e.clientY - downY)
    const elapsed = performance.now() - downTime
    if (moved > 6 || elapsed > 600) return
    const rect = renderer.domElement.getBoundingClientRect()
    pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
    pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1
    raycaster.setFromCamera(pointer, camera)
    const hits = raycaster.intersectObjects(
      planetMeshes.map((o) => o.mesh),
      true,
    )
    if (hits.length) {
      const idx = resolveIndex(hits[0].object)
      if (idx >= 0) selectPlanet(idx)
    }
  }

  renderer.domElement.addEventListener('pointerdown', onPointerDown)
  renderer.domElement.addEventListener('pointerup', onPointerUp)

  const resizeObserver = new ResizeObserver(() => {
    const w = width()
    const h = height()
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h)
  })
  resizeObserver.observe(wrap)

  function animate() {
    rafId = requestAnimationFrame(animate)
    const dt = clock.getDelta()

    if (!paused) {
      planetMeshes.forEach((o) => {
        const p = o.planet
        o.angle += p.orbitSpeed * speed * dt * 10
        if (p.distance > 0) {
          o.mesh.position.x = Math.cos(o.angle) * p.distance
          o.mesh.position.z = Math.sin(o.angle) * p.distance
        }
        o.mesh.rotation.y += p.rotationSpeed * speed * dt * 10
        if (o.mesh.userData.moon) {
          const moon = o.mesh.userData.moon
          moon.userData.angle += 0.05 * speed * dt * 10
          moon.position.x = Math.cos(moon.userData.angle) * (p.radius + 1.6)
          moon.position.z = Math.sin(moon.userData.angle) * (p.radius + 1.6)
          moon.position.y = 0
        }
      })
    }

    updateCameraAnim()
    controls.update()

    const w = width()
    const h = height()
    planetMeshes.forEach((o, i) => {
      const v = new THREE.Vector3()
      o.mesh.getWorldPosition(v)
      v.project(camera)
      const lab = labelEls[i]
      if (!lab) return
      if (v.z < 1) {
        lab.style.left = `${(v.x * 0.5 + 0.5) * w}px`
        lab.style.top = `${(-v.y * 0.5 + 0.5) * h}px`
        lab.style.display = 'block'
      } else {
        lab.style.display = 'none'
      }
    })

    orbitLines.forEach((l) => (l.visible = showOrbits))
    renderer.render(scene, camera)
  }

  animate()

  function dispose() {
    if (rafId) cancelAnimationFrame(rafId)
    resizeObserver.disconnect()
    renderer.domElement.removeEventListener('pointerdown', onPointerDown)
    renderer.domElement.removeEventListener('pointerup', onPointerUp)
    controls.dispose()
    scene.traverse((obj) => {
      if (obj.geometry) obj.geometry.dispose()
      if (obj.material) {
        const mats = Array.isArray(obj.material) ? obj.material : [obj.material]
        mats.forEach((m) => m.dispose())
      }
    })
    glowTex.dispose()
    renderer.dispose()
    labelsEl.innerHTML = ''
  }

  return {
    selectPlanet,
    dispose,
    setPaused: (v) => (paused = v),
    setSpeed: (v) => (speed = v),
    setShowOrbits: (v) => (showOrbits = v),
  }
}
