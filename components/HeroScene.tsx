'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function HeroScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const stage = canvas.closest<HTMLElement>('.hero-stage');
    const section = canvas.closest<HTMLElement>('.hero-section');

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'low-power' });
    } catch {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    camera.position.set(0, 0, 9.5);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setClearColor(0x000000, 0);

    const world = new THREE.Group();
    scene.add(world);

    const cloudPointCount = window.innerWidth < 700 ? 2600 : 5200;
    const cloudPositions = new Float32Array(cloudPointCount * 3);
    const cloudColors = new Float32Array(cloudPointCount * 3);
    const cloudLobes = [
      { x: -0.92, y: 0.08, z: 0, rx: 0.72, ry: 0.46, rz: 0.62 },
      { x: -0.2, y: 0.46, z: 0, rx: 0.84, ry: 0.68, rz: 0.7 },
      { x: 0.62, y: 0.2, z: 0, rx: 0.68, ry: 0.48, rz: 0.58 },
      { x: 0, y: -0.14, z: 0, rx: 1.2, ry: 0.34, rz: 0.52 },
    ];
    const cloudPalette = [
      new THREE.Color(0x91d8d0),
      new THREE.Color(0x9ca8ff),
      new THREE.Color(0xff9272),
      new THREE.Color(0xe7f3ff),
    ];
    let cloudPointIndex = 0;
    let attempts = 0;
    while (cloudPointIndex < cloudPointCount && attempts < cloudPointCount * 24) {
      attempts += 1;
      const x = Math.random() * 3.8 - 1.9;
      const y = Math.random() * 1.9 - 0.8;
      const z = Math.random() * 1.5 - 0.75;
      const insideCloud = cloudLobes.some((lobe) =>
        ((x - lobe.x) / lobe.rx) ** 2 + ((y - lobe.y) / lobe.ry) ** 2 + ((z - lobe.z) / lobe.rz) ** 2 < 1
      );
      if (!insideCloud) continue;

      const offset = cloudPointIndex * 3;
      cloudPositions[offset] = x;
      cloudPositions[offset + 1] = y;
      cloudPositions[offset + 2] = z;
      const color = cloudPalette[Math.floor(Math.random() * cloudPalette.length)];
      cloudColors[offset] = color.r;
      cloudColors[offset + 1] = color.g;
      cloudColors[offset + 2] = color.b;
      cloudPointIndex += 1;
    }
    const cloudGeometry = new THREE.BufferGeometry();
    cloudGeometry.setAttribute('position', new THREE.BufferAttribute(cloudPositions, 3));
    cloudGeometry.setAttribute('color', new THREE.BufferAttribute(cloudColors, 3));
    const cloud = new THREE.Points(
      cloudGeometry,
      new THREE.PointsMaterial({
        size: window.innerWidth < 700 ? 0.038 : 0.027,
        vertexColors: true,
        transparent: true,
        opacity: 0.62,
        depthWrite: false,
        sizeAttenuation: true,
        blending: THREE.AdditiveBlending,
      })
    );
    cloud.position.y = 0.62;
    world.add(cloud);

    const starCanvas = document.createElement('canvas');
    starCanvas.width = 64;
    starCanvas.height = 64;
    const starContext = starCanvas.getContext('2d');
    if (starContext) {
      const halo = starContext.createRadialGradient(32, 32, 0, 32, 32, 32);
      halo.addColorStop(0, 'rgba(255, 255, 255, 1)');
      halo.addColorStop(0.07, 'rgba(255, 255, 255, 0.95)');
      halo.addColorStop(0.28, 'rgba(255, 255, 255, 0.2)');
      halo.addColorStop(1, 'rgba(255, 255, 255, 0)');
      starContext.fillStyle = halo;
      starContext.fillRect(0, 0, 64, 64);
      starContext.globalCompositeOperation = 'lighter';
      starContext.strokeStyle = 'rgba(255, 255, 255, 0.72)';
      starContext.lineWidth = 1.4;
      starContext.beginPath();
      starContext.moveTo(32, 5);
      starContext.lineTo(32, 59);
      starContext.moveTo(5, 32);
      starContext.lineTo(59, 32);
      starContext.stroke();
    }
    const starTexture = new THREE.CanvasTexture(starCanvas);
    starTexture.colorSpace = THREE.SRGBColorSpace;
    const starSpecs = [
      [-2.35, -0.95, 0, 0xd7f56a, 0.2], [-1.35, 0.15, 1.5, 0x91d8d0, 0.24], [0, 1.55, -1.25, 0xff9272, 0.18],
      [1.5, 0.25, 1.15, 0xd7f56a, 0.3], [2.25, -0.92, -0.2, 0x91d8d0, 0.2], [0.7, -0.55, -2, 0xff9272, 0.16],
      [-0.8, -1.58, 1.45, 0xe7f3ff, 0.22], [1.85, 1.18, -0.9, 0x9ca8ff, 0.18],
    ] as const;
    const starSprites: { sprite: THREE.Sprite; phase: number; size: number }[] = [];
    const mobileStarScale = window.innerWidth < 700 ? 0.72 : 1;
    starSpecs.forEach(([x, y, z, color, size], index) => {
      const material = new THREE.SpriteMaterial({
        map: starTexture,
        color,
        transparent: true,
        opacity: 0.86,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      const sprite = new THREE.Sprite(material);
      sprite.position.set(x * mobileStarScale, y, z);
      sprite.scale.setScalar(size * (window.innerWidth < 700 ? 1.25 : 1));
      starSprites.push({ sprite, phase: index * 0.78, size: sprite.scale.x });
      world.add(sprite);
    });

    const packets: { mesh: THREE.Mesh; curve: THREE.Curve<THREE.Vector3>; speed: number; phase: number }[] = [];
    const packetGeometry = new THREE.SphereGeometry(0.022, 12, 12);

    const routeDefinitions = [
      { color: 0x91d8d0, points: [[-3.4, 0.65, -0.95], [-2.1, 0.85, -0.45], [-0.7, 0.42, 0.15], [0.85, 0.3, 0.52], [2.25, 0.63, 0.16], [3.45, 0.88, -0.4]] },
      { color: 0xd7f56a, points: [[-3.4, -0.55, 0.9], [-2.2, -0.75, 0.55], [-0.85, -0.48, 0.18], [0.6, -0.16, -0.3], [2, 0.15, -0.6], [3.4, 0.48, -0.75]] },
      { color: 0xff9272, points: [[-3.25, 1.35, 0.65], [-1.9, 1.42, 0.1], [-0.4, 1.05, -0.65], [1.1, 0.7, -0.35], [2.4, 0.35, 0.45], [3.35, 0.15, 0.75]] },
    ];
    routeDefinitions.forEach(({ color, points }, index) => {
      const curve = new THREE.CatmullRomCurve3(
        points.map(([x, y, z]) => new THREE.Vector3(x, y, z)),
        false,
        'centripetal'
      );
      const glow = new THREE.Mesh(
        new THREE.TubeGeometry(curve, 120, 0.03, 6, false),
        new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.075, depthWrite: false, blending: THREE.AdditiveBlending })
      );
      const trail = new THREE.Mesh(
        new THREE.TubeGeometry(curve, 120, 0.008, 5, false),
        new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.72, depthWrite: false })
      );
      world.add(glow, trail);
      const packet = new THREE.Mesh(
        packetGeometry,
        new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.96 })
      );
      packets.push({ mesh: packet, curve, speed: 0.075 + index * 0.018, phase: index * 0.31 });
      world.add(packet);
    });

    const starCount = window.innerWidth < 700 ? 1100 : 2200;
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);
    const backgroundPalette = [new THREE.Color(0xe7f3ff), new THREE.Color(0x91d8d0), new THREE.Color(0xffd8c1)];
    const starAspect = canvas.clientWidth / Math.max(canvas.clientHeight, 1);
    for (let index = 0; index < starPositions.length; index += 3) {
      const depth = 14 + Math.random() * 16;
      const halfHeight = depth * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * 0.94;
      starPositions[index] = (Math.random() * 2 - 1) * halfHeight * starAspect;
      starPositions[index + 1] = (Math.random() * 2 - 1) * halfHeight;
      starPositions[index + 2] = 9.5 - depth;
      const color = backgroundPalette[Math.floor(Math.random() * backgroundPalette.length)];
      const brightness = 0.45 + Math.random() * 0.55;
      starColors[index] = color.r * brightness;
      starColors[index + 1] = color.g * brightness;
      starColors[index + 2] = color.b * brightness;
    }
    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));
    const stars = new THREE.Points(
      starGeometry,
      new THREE.PointsMaterial({ color: 0xffffff, size: window.innerWidth < 700 ? 0.045 : 0.032, vertexColors: true, transparent: true, opacity: 0.92, sizeAttenuation: true, depthWrite: false, blending: THREE.AdditiveBlending })
    );
    scene.add(stars);

    let frame = 0;
    let targetScroll = 0;
    let pointerX = 0;
    let pointerY = 0;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      if (!width || !height) return;
      camera.aspect = width / height;
      camera.position.x = width < 700 ? 0 : 0.75;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
      renderer.render(scene, camera);
    };

    const updateScroll = () => {
      const scrollRange = Math.max((section?.offsetHeight ?? window.innerHeight) - (stage?.clientHeight ?? window.innerHeight), 1);
      targetScroll = THREE.MathUtils.clamp(-(section?.getBoundingClientRect().top ?? 0) / scrollRange, 0, 1);
      section?.style.setProperty('--hero-progress', targetScroll.toString());
      if (reducedMotion) renderer.render(scene, camera);
    };
    const updatePointer = (event: PointerEvent) => {
      pointerX = (event.clientX / window.innerWidth - 0.5) * 0.3;
      pointerY = (event.clientY / window.innerHeight - 0.5) * 0.2;
    };

    const clock = new THREE.Clock();
    const animate = () => {
      frame = window.requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      world.rotation.y += (targetScroll * Math.PI * 0.72 + 0.18 - world.rotation.y) * 0.018;
      world.rotation.x += (pointerY + targetScroll * 0.28 - world.rotation.x) * 0.025;
      world.rotation.z += (pointerX * 0.4 + targetScroll * 0.12 - world.rotation.z) * 0.025;
      world.scale.setScalar(1 + targetScroll * 0.58);
      camera.position.z += (9.5 - targetScroll * 4.7 - camera.position.z) * 0.025;
      camera.position.x += ((window.innerWidth < 700 ? 0 : 0.75) + pointerX * 0.6 - camera.position.x) * 0.025;
      cloud.rotation.y += 0.001;
      cloud.rotation.z += Math.sin(elapsed * 0.18) * 0.0002;
      stars.rotation.y += 0.00008;
      starSprites.forEach(({ sprite, phase, size }) => {
        sprite.scale.setScalar(size * (0.84 + Math.sin(elapsed * 1.8 + phase) * 0.16));
        (sprite.material as THREE.SpriteMaterial).opacity = 0.58 + Math.sin(elapsed * 1.4 + phase) * 0.28;
      });
      packets.forEach(({ mesh, curve, speed, phase }) => {
        const progress = (elapsed * speed + phase) % 1;
        mesh.position.copy(curve.getPointAt(progress));
        mesh.scale.setScalar(0.7 + Math.sin(progress * Math.PI) * 0.7);
      });
      renderer.render(scene, camera);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    window.addEventListener('scroll', updateScroll, { passive: true });
    window.addEventListener('pointermove', updatePointer, { passive: true });
    resize();
    updateScroll();
    if (!reducedMotion) animate();

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', updateScroll);
      window.removeEventListener('pointermove', updatePointer);
      resizeObserver.disconnect();
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh || object instanceof THREE.Points || object instanceof THREE.Line) {
          object.geometry.dispose();
        }
        if (object instanceof THREE.Mesh || object instanceof THREE.Points || object instanceof THREE.Line || object instanceof THREE.Sprite) {
          const materials = Array.isArray(object.material) ? object.material : [object.material];
          materials.forEach((material) => material.dispose());
        }
      });
      starTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return <div className="hero-scene" aria-hidden="true"><canvas ref={canvasRef} /></div>;
}
