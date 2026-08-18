(function () {
  function initThree() {
    const canvas = document.getElementById('webgl-canvas');
    if (!canvas || !window.THREE) return;

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

    const THREE = window.THREE;
    const hero = canvas.closest('.hero') || document.querySelector('.hero') || document.body;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    camera.position.z = 20;

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    // 3. Theme Colors
    function getThemeColors() {
      const isDark = document.documentElement.dataset.theme !== 'light';
      return {
        isDark: isDark,
        primary: isDark ? 0xc8ff3d : 0x059669,       // Neon Acid Lime / Vibrant Emerald
        secondary: isDark ? 0x00f0ff : 0x0284c7,     // Electric Cyan / Azure Blue
        accent: isDark ? 0x9333ea : 0x4f46e5,        // Cyber Purple / Indigo
        glow: isDark ? 0xc8ff3d : 0x10b981,
        shards: isDark ? 0x6cd9ea : 0x0369a1,
        particles: isDark ? 0xf1f4eb : 0x1e293b,
        ambient: isDark ? 0x222820 : 0xe2e8f0,
        lightIntensity: isDark ? 2.4 : 1.8,
        coreOpacity: isDark ? 0.38 : 0.28,
        wireOpacity: isDark ? 0.9 : 0.8
      };
    }

    let colors = getThemeColors();

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(colors.ambient, 1.4);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(colors.primary, colors.lightIntensity);
    dirLight1.position.set(10, 15, 10);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(colors.secondary, colors.lightIntensity * 0.9);
    dirLight2.position.set(-10, -10, -5);
    scene.add(dirLight2);

    // Cursor Point Light (follows mouse)
    const mouseLight = new THREE.PointLight(colors.primary, 3.5, 28);
    mouseLight.position.set(0, 0, 8);
    scene.add(mouseLight);

    // 5. Root Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 6. Central Interactive 3D Core
    const coreGroup = new THREE.Group();
    rootGroup.add(coreGroup);

    // Main Faceted Glass Icosahedron
    const icoGeo = new THREE.IcosahedronGeometry(4.3, 1);
    const icoMat = new THREE.MeshPhongMaterial({
      color: colors.primary,
      emissive: colors.accent,
      emissiveIntensity: 0.25,
      specular: 0xffffff,
      shininess: 90,
      transparent: true,
      opacity: colors.coreOpacity,
      flatShading: true,
      side: THREE.DoubleSide
    });
    const icoMesh = new THREE.Mesh(icoGeo, icoMat);
    coreGroup.add(icoMesh);

    // Outer Glowing Wireframe Cage
    const wireGeo = new THREE.WireframeGeometry(icoGeo);
    const wireMat = new THREE.LineBasicMaterial({
      color: colors.primary,
      transparent: true,
      opacity: colors.wireOpacity,
      linewidth: 2
    });
    const wireLine = new THREE.LineSegments(wireGeo, wireMat);
    coreGroup.add(wireLine);

    // Glowing Vertex Nodes (Spheres)
    const nodeGeo = new THREE.SphereGeometry(0.12, 12, 12);
    const nodeMat = new THREE.MeshBasicMaterial({
      color: colors.primary
    });
    const nodeGroup = new THREE.Group();
    coreGroup.add(nodeGroup);

    const posAttr = icoGeo.attributes.position;
    const vertexMap = new Set();
    for (let i = 0; i < posAttr.count; i++) {
      const vx = posAttr.getX(i).toFixed(3);
      const vy = posAttr.getY(i).toFixed(3);
      const vz = posAttr.getZ(i).toFixed(3);
      const key = vx + ',' + vy + ',' + vz;
      if (!vertexMap.has(key)) {
        vertexMap.add(key);
        const node = new THREE.Mesh(nodeGeo, nodeMat);
        node.position.set(parseFloat(vx), parseFloat(vy), parseFloat(vz));
        nodeGroup.add(node);
      }
    }

    // Inner Glowing Nested Octahedron
    const innerGeo = new THREE.OctahedronGeometry(2.4, 0);
    const innerMat = new THREE.MeshPhongMaterial({
      color: colors.secondary,
      emissive: colors.secondary,
      emissiveIntensity: 0.4,
      wireframe: true,
      transparent: true,
      opacity: 0.8
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerMesh);

    // Central Nucleus Gem
    const nucGeo = new THREE.DodecahedronGeometry(1.1, 0);
    const nucMat = new THREE.MeshStandardMaterial({
      color: colors.primary,
      emissive: colors.primary,
      emissiveIntensity: 0.65,
      roughness: 0.2,
      metalness: 0.8
    });
    const nucMesh = new THREE.Mesh(nucGeo, nucMat);
    coreGroup.add(nucMesh);

    // Concentric Gyro Tech Rings
    const ringGeo1 = new THREE.TorusGeometry(5.8, 0.045, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: colors.secondary,
      transparent: true,
      opacity: 0.55
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    coreGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(6.8, 0.038, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: colors.primary,
      transparent: true,
      opacity: 0.45
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = Math.PI / 6;
    coreGroup.add(ring2);

    // 7. Orbiting Tech Data Shards (Floating Polyhedra)
    const shardsGroup = new THREE.Group();
    coreGroup.add(shardsGroup);
    const shardGeos = [
      new THREE.TetrahedronGeometry(0.4, 0),
      new THREE.OctahedronGeometry(0.35, 0),
      new THREE.BoxGeometry(0.35, 0.35, 0.35)
    ];
    const shardMat = new THREE.MeshPhongMaterial({
      color: colors.shards,
      emissive: colors.secondary,
      emissiveIntensity: 0.3,
      transparent: true,
      opacity: 0.75,
      flatShading: true
    });

    const shards = [];
    const shardCount = 18;
    for (let i = 0; i < shardCount; i++) {
      const geo = shardGeos[i % shardGeos.length];
      const shard = new THREE.Mesh(geo, shardMat);
      const orbitRadius = 6.2 + Math.random() * 3.5;
      const speed = (0.005 + Math.random() * 0.01) * (Math.random() > 0.5 ? 1 : -1);
      const angle = Math.random() * Math.PI * 2;
      const height = (Math.random() - 0.5) * 5;
      const rotSpeed = {
        x: (Math.random() - 0.5) * 0.04,
        y: (Math.random() - 0.5) * 0.04,
        z: (Math.random() - 0.5) * 0.04
      };

      shards.push({ mesh: shard, orbitRadius, speed, angle, height, rotSpeed });
      shardsGroup.add(shard);
    }

    // 8. Dynamic 3D Particle Cloud (700 particles)
    const particleCount = window.innerWidth < 768 ? 320 : 650;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    const particleInitPos = [];
    const particleVelocities = [];

    for (let i = 0; i < particleCount; i++) {
      const radius = 5 + Math.random() * 26;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      particlePos[i * 3] = x;
      particlePos[i * 3 + 1] = y;
      particlePos[i * 3 + 2] = z;

      particleInitPos.push({ x: x, y: y, z: z });
      particleVelocities.push({
        x: (Math.random() - 0.5) * 0.006,
        y: (Math.random() - 0.5) * 0.006,
        z: (Math.random() - 0.5) * 0.006
      });
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));

    const particleMat = new THREE.PointsMaterial({
      color: colors.particles,
      size: 0.22,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const particleSystem = new THREE.Points(particleGeo, particleMat);
    rootGroup.add(particleSystem);

    // 9. Interactive Drag & Mouse Controls
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let dragDelta = { x: 0, y: 0 };
    let targetDragRot = { x: 0, y: 0 };

    let mouseNorm = { x: 0, y: 0 };
    let targetMouseNorm = { x: 0, y: 0 };
    let scrollProgress = 0;
    let pulseScale = 1;

    function handlePointerMove(e) {
      if (reducedMotion.matches) return;
      const rect = canvas.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) return;

      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      targetMouseNorm.x = Math.max(-2.5, Math.min(2.5, x * 2.2));
      targetMouseNorm.y = Math.max(-2.5, Math.min(2.5, y * 2.2));

      // Update cursor 3D point light position
      mouseLight.position.x = x * 14;
      mouseLight.position.y = y * 10;

      if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;
        targetDragRot.y += deltaX * 0.008;
        targetDragRot.x += deltaY * 0.008;
        previousMousePosition = { x: e.clientX, y: e.clientY };
      }
    }

    function handlePointerDown(e) {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
      pulseScale = 1.15; // Pulse core on click
    }

    function handlePointerUp() {
      isDragging = false;
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    window.addEventListener('pointerup', handlePointerUp, { passive: true });

    // 10. Resize & Positioning
    function handleResize() {
      const width = hero.clientWidth || window.innerWidth;
      const height = hero.clientHeight || window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      const isRtl = document.documentElement.dir === 'rtl';

      if (width < 768) {
        // Mobile screen: centered, placed behind hero copy with depth
        coreGroup.position.set(0, 0.5, -6);
        coreGroup.scale.set(0.68, 0.68, 0.68);
        camera.position.z = 24;
      } else if (width < 1100) {
        // Tablet / Medium screen
        const posX = isRtl ? -4.5 : 4.5;
        coreGroup.position.set(posX, 0.2, -1);
        coreGroup.scale.set(0.9, 0.9, 0.9);
        camera.position.z = 22;
      } else {
        // Desktop: prominent hero position
        const posX = isRtl ? -6.0 : 6.0;
        coreGroup.position.set(posX, 0.5, 0);
        coreGroup.scale.set(1.18, 1.18, 1.18);
        camera.position.z = 20;
      }
    }

    window.addEventListener('resize', handleResize, { passive: true });
    handleResize();

    // 11. Theme Updates
    window.updateThreeTheme = function () {
      colors = getThemeColors();
      ambientLight.color.setHex(colors.ambient);
      dirLight1.color.setHex(colors.primary);
      dirLight1.intensity = colors.lightIntensity;
      dirLight2.color.setHex(colors.secondary);
      dirLight2.intensity = colors.lightIntensity * 0.8;
      mouseLight.color.setHex(colors.primary);

      icoMat.color.setHex(colors.primary);
      icoMat.emissive.setHex(colors.accent);
      icoMat.opacity = colors.coreOpacity;

      wireMat.color.setHex(colors.primary);
      wireMat.opacity = colors.wireOpacity;
      nodeMat.color.setHex(colors.primary);

      innerMat.color.setHex(colors.secondary);
      innerMat.emissive.setHex(colors.secondary);
      nucMat.color.setHex(colors.primary);
      nucMat.emissive.setHex(colors.primary);

      ringMat1.color.setHex(colors.secondary);
      ringMat2.color.setHex(colors.primary);
      shardMat.color.setHex(colors.shards);
      shardMat.emissive.setHex(colors.secondary);
      particleMat.color.setHex(colors.particles);

      handleResize();
    };

    const mutationObserver = new MutationObserver(() => {
      window.updateThreeTheme();
    });
    mutationObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme', 'dir', 'lang']
    });

    // 12. Robust Animation Lifecycle & Scroll Controller
    let clock = new THREE.Clock();
    let autoRotX = 0;
    let autoRotY = 0;
    let isRunning = false;
    let animFrameId = null;

    function startAnimation() {
      if (isRunning) return;
      if (document.hidden) return;
      isRunning = true;
      clock.getDelta(); // reset delta so no sudden jumps occur
      animFrameId = requestAnimationFrame(animate);
    }

    function stopAnimation() {
      if (!isRunning) return;
      isRunning = false;
      if (animFrameId) {
        cancelAnimationFrame(animFrameId);
        animFrameId = null;
      }
    }

    function handleScroll() {
      const scrollMax = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress = scrollMax > 0 ? window.scrollY / scrollMax : 0;

      // When scrolled in hero or nearby view, guarantee loop is active
      const heroRect = hero.getBoundingClientRect();
      const isVisible = heroRect.bottom > -100 && heroRect.top < window.innerHeight + 100;
      if (isVisible && !isRunning && !document.hidden) {
        startAnimation();
      } else if (!isVisible && isRunning) {
        stopAnimation();
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        stopAnimation();
      } else {
        handleScroll();
      }
    });

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting || window.scrollY < window.innerHeight) {
            startAnimation();
          } else {
            stopAnimation();
          }
        });
      }, { rootMargin: '200px' });
      io.observe(hero);
    }

    // 13. Animation Frame
    function animate() {
      if (!isRunning) return;
      animFrameId = requestAnimationFrame(animate);

      const delta = Math.min(clock.getDelta(), 0.1);
      const elapsed = clock.getElapsedTime();

      // Smooth mouse interpolation
      mouseNorm.x += (targetMouseNorm.x - mouseNorm.x) * 0.05;
      mouseNorm.y += (targetMouseNorm.y - mouseNorm.y) * 0.05;

      // Smooth drag rotation interpolation with friction
      dragDelta.x += (targetDragRot.x - dragDelta.x) * 0.08;
      dragDelta.y += (targetDragRot.y - dragDelta.y) * 0.08;

      // Pulse decay back to 1
      pulseScale += (1 - pulseScale) * 0.06;

      const baseSpeed = reducedMotion.matches ? 0.1 : 0.45;
      autoRotX += delta * baseSpeed * 0.7;
      autoRotY += delta * baseSpeed * 0.9;

      // Core rotation: combination of auto-spin, user drag, and mouse tilt
      coreGroup.rotation.x = autoRotX + dragDelta.x + mouseNorm.y * 0.35;
      coreGroup.rotation.y = autoRotY + dragDelta.y + mouseNorm.x * 0.35;
      coreGroup.rotation.z = Math.sin(elapsed * 0.4) * 0.12;

      // Inner structures counter-rotation
      innerMesh.rotation.x = -elapsed * baseSpeed * 1.3;
      innerMesh.rotation.y = elapsed * baseSpeed * 1.1;
      nucMesh.rotation.y = -elapsed * baseSpeed * 1.8;
      nucMesh.rotation.z = elapsed * baseSpeed * 1.4;

      ring1.rotation.z = elapsed * baseSpeed * 0.6;
      ring2.rotation.z = -elapsed * baseSpeed * 0.45;

      // Breathing / pulse scale
      const breath = (1 + Math.sin(elapsed * 1.6) * 0.02) * pulseScale;
      icoMesh.scale.set(breath, breath, breath);
      wireLine.scale.set(breath, breath, breath);
      nodeGroup.scale.set(breath, breath, breath);

      // Animate Orbiting Shards
      shards.forEach((s) => {
        s.angle += s.speed;
        s.mesh.position.x = Math.cos(s.angle) * s.orbitRadius;
        s.mesh.position.z = Math.sin(s.angle) * s.orbitRadius;
        s.mesh.position.y = s.height + Math.sin(elapsed * 1.5 + s.angle) * 0.6;

        s.mesh.rotation.x += s.rotSpeed.x;
        s.mesh.rotation.y += s.rotSpeed.y;
        s.mesh.rotation.z += s.rotSpeed.z;
      });

      // Universe scroll transformation
      rootGroup.rotation.y = scrollProgress * Math.PI * 0.7 + mouseNorm.x * 0.08;
      rootGroup.rotation.x = scrollProgress * 0.35 - mouseNorm.y * 0.08;

      // Particle physics & gentle wave
      const positions = particleGeo.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        const idx = i * 3;
        const v = particleVelocities[i];
        const init = particleInitPos[i];

        positions[idx] += v.x;
        positions[idx + 1] += v.y;
        positions[idx + 2] += v.z;

        if (Math.abs(positions[idx] - init.x) > 3.0) v.x *= -1;
        if (Math.abs(positions[idx + 1] - init.y) > 3.0) v.y *= -1;
        if (Math.abs(positions[idx + 2] - init.z) > 3.0) v.z *= -1;
      }
      particleGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    }

    startAnimation();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThree);
  } else {
    initThree();
  }
})();
