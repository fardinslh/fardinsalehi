import * as THREE from './assets/vendor/three.module.min.js';

(function initThreeScene() {
  const canvas = document.getElementById('webgl-canvas');
  if (!canvas) return;

  // Check WebGL support
  let gl;
  try {
    gl = canvas.getContext('webgl2') || canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  } catch (e) {
    gl = null;
  }
  if (!gl) {
    canvas.style.display = 'none';
    return;
  }

  const hero = canvas.closest('.hero') || document.body;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  // Scene & Camera
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(52, 1, 0.1, 1000);
  camera.position.z = 22;

  // Renderer
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance'
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Colors based on theme
  function getThemeColors() {
    const isDark = document.documentElement.dataset.theme !== 'light';
    return {
      primary: isDark ? 0xc8ff3d : 0x0f766e,     // Acid lime vs Deep Teal
      secondary: isDark ? 0x6cd9ea : 0x2563eb,   // Cyber cyan vs Electric blue
      accent: isDark ? 0xa3e635 : 0x059669,      // Bright neon green vs Forest
      points: isDark ? 0xf1f4eb : 0x1e293b,      // Particle color
      lineOpacity: isDark ? 0.38 : 0.32,
      particleOpacity: isDark ? 0.75 : 0.6,
      fog: isDark ? 0x090b09 : 0xf3f0e8
    };
  }

  let themeColors = getThemeColors();
  scene.fog = new THREE.FogExp2(themeColors.fog, 0.024);

  // Group to hold all 3D objects
  const rootGroup = new THREE.Group();
  scene.add(rootGroup);

  // 1. Central Hero Geometric Core (Nested Icosahedron + Octahedron + Cyber Rings)
  const coreGroup = new THREE.Group();
  rootGroup.add(coreGroup);

  // Outer Icosahedron Wireframe
  const icoGeometry = new THREE.IcosahedronGeometry(4.4, 1);
  const icoWireframe = new THREE.WireframeGeometry(icoGeometry);
  const icoMaterial = new THREE.LineBasicMaterial({
    color: themeColors.primary,
    transparent: true,
    opacity: themeColors.lineOpacity,
    linewidth: 1
  });
  const icoLine = new THREE.LineSegments(icoWireframe, icoMaterial);
  coreGroup.add(icoLine);

  // Vertices Glowing Nodes
  const icoPointsMat = new THREE.PointsMaterial({
    color: themeColors.primary,
    size: 0.28,
    transparent: true,
    opacity: 0.92
  });
  const icoPoints = new THREE.Points(icoGeometry, icoPointsMat);
  coreGroup.add(icoPoints);

  // Inner Nested Octahedron
  const innerGeometry = new THREE.OctahedronGeometry(2.5, 0);
  const innerWireframe = new THREE.WireframeGeometry(innerGeometry);
  const innerMaterial = new THREE.LineBasicMaterial({
    color: themeColors.secondary,
    transparent: true,
    opacity: themeColors.lineOpacity * 1.3
  });
  const innerLine = new THREE.LineSegments(innerWireframe, innerMaterial);
  coreGroup.add(innerLine);

  // Inner Glowing Nucleus
  const nucleusGeometry = new THREE.DodecahedronGeometry(1.2, 0);
  const nucleusMaterial = new THREE.MeshBasicMaterial({
    color: themeColors.primary,
    wireframe: true,
    transparent: true,
    opacity: 0.45
  });
  const nucleusMesh = new THREE.Mesh(nucleusGeometry, nucleusMaterial);
  coreGroup.add(nucleusMesh);

  // Orbital Cyber Rings
  const ringGeo1 = new THREE.RingGeometry(5.8, 5.86, 64);
  const ringMat1 = new THREE.MeshBasicMaterial({
    color: themeColors.secondary,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.25
  });
  const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
  ring1.rotation.x = Math.PI / 3;
  coreGroup.add(ring1);

  const ringGeo2 = new THREE.RingGeometry(6.9, 6.95, 64);
  const ringMat2 = new THREE.MeshBasicMaterial({
    color: themeColors.primary,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.2
  });
  const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
  ring2.rotation.y = Math.PI / 4;
  ring2.rotation.x = Math.PI / 6;
  coreGroup.add(ring2);

  // 2. Surrounding Neural Constellation Particle Field
  const particleCount = window.innerWidth < 768 ? 220 : 480;
  const particleGeometry = new THREE.BufferGeometry();
  const particlePositions = new Float32Array(particleCount * 3);
  const particleSpeeds = [];

  for (let i = 0; i < particleCount; i++) {
    const radius = 4 + Math.random() * 20;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos((Math.random() * 2) - 1);

    const x = radius * Math.sin(phi) * Math.cos(theta) + (Math.random() - 0.5) * 4;
    const y = radius * Math.sin(phi) * Math.sin(theta) + (Math.random() - 0.5) * 4;
    const z = radius * Math.cos(phi) + (Math.random() - 0.5) * 6;

    particlePositions[i * 3] = x;
    particlePositions[i * 3 + 1] = y;
    particlePositions[i * 3 + 2] = z;

    particleSpeeds.push({
      x: (Math.random() - 0.5) * 0.003,
      y: (Math.random() - 0.5) * 0.003,
      z: (Math.random() - 0.5) * 0.003,
      originalX: x,
      originalY: y,
      originalZ: z
    });
  }

  particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

  const particleMaterial = new THREE.PointsMaterial({
    color: themeColors.points,
    size: 0.16,
    transparent: true,
    opacity: themeColors.particleOpacity
  });

  const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
  rootGroup.add(particleSystem);

  // Mouse & Scroll Tracking
  let mouseX = 0;
  let mouseY = 0;
  let targetMouseX = 0;
  let targetMouseY = 0;
  let scrollProgress = 0;
  let targetScrollY = 0;
  let isRendering = true;

  function onPointerMove(event) {
    if (reducedMotion.matches) return;
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = -(event.clientY / window.innerHeight) * 2 + 1;
    targetMouseX = x * 1.5;
    targetMouseY = y * 1.5;
  }

  window.addEventListener('pointermove', onPointerMove, { passive: true });

  function onScroll() {
    const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
    targetScrollY = totalScroll > 0 ? window.scrollY / totalScroll : 0;
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  function onResize() {
    const rect = hero.getBoundingClientRect();
    const width = rect.width || window.innerWidth;
    const height = rect.height || window.innerHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const isRtl = document.documentElement.dir === 'rtl';

    if (width < 860) {
      // Mobile placement: top-centered subtle backdrop
      coreGroup.position.set(0, 1.8, -4);
      coreGroup.scale.set(0.6, 0.6, 0.6);
      camera.position.z = 24;
    } else if (width < 1200) {
      // Medium desktop: positioned on side
      const posX = isRtl ? -4.5 : 4.5;
      coreGroup.position.set(posX, 0.5, 0);
      coreGroup.scale.set(0.85, 0.85, 0.85);
      camera.position.z = 22;
    } else {
      // Large desktop: hero focal position
      const posX = isRtl ? -6.2 : 6.2;
      coreGroup.position.set(posX, 0.8, 0);
      coreGroup.scale.set(1.05, 1.05, 1.05);
      camera.position.z = 22;
    }
  }

  window.addEventListener('resize', onResize, { passive: true });
  onResize();

  // Listen for theme and language changes
  window.updateThreeTheme = function() {
    themeColors = getThemeColors();
    scene.fog.color.setHex(themeColors.fog);
    icoMaterial.color.setHex(themeColors.primary);
    icoMaterial.opacity = themeColors.lineOpacity;
    icoPointsMat.color.setHex(themeColors.primary);
    innerMaterial.color.setHex(themeColors.secondary);
    innerMaterial.opacity = themeColors.lineOpacity * 1.3;
    nucleusMaterial.color.setHex(themeColors.primary);
    ringMat1.color.setHex(themeColors.secondary);
    ringMat2.color.setHex(themeColors.primary);
    particleMaterial.color.setHex(themeColors.points);
    particleMaterial.opacity = themeColors.particleOpacity;
    onResize();
  };

  const observer = new MutationObserver(() => {
    window.updateThreeTheme();
  });
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme', 'dir', 'lang']
  });

  // Optimize: Pause rendering when page is hidden or off-screen
  document.addEventListener('visibilitychange', () => {
    isRendering = !document.hidden;
    if (isRendering) {
      requestAnimationFrame(animate);
    }
  });

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        isRendering = entry.isIntersecting || window.scrollY < window.innerHeight;
      });
    }, { rootMargin: '200px' });
    io.observe(hero);
  }

  // Animation Loop
  let clock = new THREE.Clock();

  function animate() {
    if (!isRendering) return;

    requestAnimationFrame(animate);

    const elapsedTime = clock.getElapsedTime();

    // Smooth mouse lerp
    mouseX += (targetMouseX - mouseX) * 0.045;
    mouseY += (targetMouseY - mouseY) * 0.045;

    // Smooth scroll interpolation
    scrollProgress += (targetScrollY - scrollProgress) * 0.05;

    // Rotate core structures
    const rotSpeed = reducedMotion.matches ? 0.08 : 0.38;
    coreGroup.rotation.x = elapsedTime * (rotSpeed * 0.6) + mouseY * 0.45;
    coreGroup.rotation.y = elapsedTime * (rotSpeed * 0.8) + mouseX * 0.45;
    coreGroup.rotation.z = Math.sin(elapsedTime * 0.25) * 0.12;

    innerLine.rotation.x = -elapsedTime * rotSpeed * 1.25;
    innerLine.rotation.y = elapsedTime * rotSpeed * 0.95;

    nucleusMesh.rotation.y = -elapsedTime * rotSpeed * 1.6;
    nucleusMesh.rotation.z = elapsedTime * rotSpeed * 1.1;

    ring1.rotation.z = elapsedTime * rotSpeed * 0.45;
    ring2.rotation.z = -elapsedTime * rotSpeed * 0.35;

    // Subtle breathing pulse
    const breath = 1 + Math.sin(elapsedTime * 1.5) * 0.022;
    icoLine.scale.set(breath, breath, breath);
    icoPoints.scale.set(breath, breath, breath);

    // Scroll-driven universe rotation
    rootGroup.rotation.y = scrollProgress * Math.PI * 0.6 + mouseX * 0.12;
    rootGroup.rotation.x = scrollProgress * 0.3 - mouseY * 0.12;

    // Particle field movement
    const positions = particleGeometry.attributes.position.array;
    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      const speed = particleSpeeds[i];
      positions[idx] += speed.x;
      positions[idx + 1] += speed.y;
      positions[idx + 2] += speed.z;

      if (Math.abs(positions[idx] - speed.originalX) > 3.5) speed.x *= -1;
      if (Math.abs(positions[idx + 1] - speed.originalY) > 3.5) speed.y *= -1;
      if (Math.abs(positions[idx + 2] - speed.originalZ) > 3.5) speed.z *= -1;
    }
    particleGeometry.attributes.position.needsUpdate = true;

    renderer.render(scene, camera);
  }

  requestAnimationFrame(animate);
})();
