import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Atom / DNA-like Three.js scene that lives behind the hero.
 * Particles drift, a glowing wireframe icosahedron rotates,
 * and orbit electrons sweep around — all driven by scroll & pointer.
 */
export function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.z = 9;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Glowing nucleus (icosahedron wireframe)
    const coreGeo = new THREE.IcosahedronGeometry(1.6, 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0xff3d8b,
      wireframe: true,
      transparent: true,
      opacity: 0.55,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    scene.add(core);

    const innerCoreGeo = new THREE.IcosahedronGeometry(0.95, 0);
    const innerCoreMat = new THREE.MeshBasicMaterial({
      color: 0xb829ff,
      wireframe: true,
      transparent: true,
      opacity: 0.7,
    });
    const innerCore = new THREE.Mesh(innerCoreGeo, innerCoreMat);
    scene.add(innerCore);

    // Electron orbits (3 rings)
    const orbits: THREE.Mesh[] = [];
    const electrons: { mesh: THREE.Mesh; orbit: THREE.Object3D; speed: number }[] = [];
    const orbitColors = [0xff3d8b, 0x06b6d4, 0xffd166];
    [2.6, 3.4, 4.2].forEach((r, i) => {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(r, 0.008, 8, 128),
        new THREE.MeshBasicMaterial({ color: orbitColors[i], transparent: true, opacity: 0.35 })
      );
      ring.rotation.x = Math.PI / 2 + (i * Math.PI) / 3.5;
      ring.rotation.y = (i * Math.PI) / 2.5;
      scene.add(ring);
      orbits.push(ring);

      const orbit = new THREE.Object3D();
      orbit.rotation.copy(ring.rotation);
      scene.add(orbit);

      const electron = new THREE.Mesh(
        new THREE.SphereGeometry(0.09, 16, 16),
        new THREE.MeshBasicMaterial({ color: orbitColors[i] })
      );
      electron.position.x = r;
      orbit.add(electron);
      electrons.push({ mesh: electron, orbit, speed: 0.6 + i * 0.25 });
    });

    // Particle field
    const particleCount = 700;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const palette = [
      new THREE.Color(0xff3d8b),
      new THREE.Color(0xb829ff),
      new THREE.Color(0x06b6d4),
      new THREE.Color(0xffffff),
    ];
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20 - 5;
      const c = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Pointer parallax
    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
    const onMove = (e: PointerEvent) => {
      pointer.tx = (e.clientX / window.innerWidth - 0.5) * 0.6;
      pointer.ty = (e.clientY / window.innerHeight - 0.5) * 0.6;
    };
    window.addEventListener("pointermove", onMove);

    // Scroll interaction
    let scrollY = 0;
    const onScroll = () => { scrollY = window.scrollY; };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Resize
    const onResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", onResize);

    let raf = 0;
    const clock = new THREE.Clock();
    const animate = () => {
      const t = clock.getElapsedTime();

      pointer.x += (pointer.tx - pointer.x) * 0.05;
      pointer.y += (pointer.ty - pointer.y) * 0.05;

      core.rotation.x = t * 0.3 + pointer.y;
      core.rotation.y = t * 0.4 + pointer.x;
      innerCore.rotation.x = -t * 0.5;
      innerCore.rotation.y = -t * 0.3;

      orbits.forEach((ring, i) => {
        ring.rotation.z += 0.001 * (i + 1);
      });
      electrons.forEach((e) => {
        e.orbit.rotation.z += 0.012 * e.speed;
      });

      particles.rotation.y = t * 0.02 + pointer.x * 0.3;
      particles.rotation.x = pointer.y * 0.2;

      // scroll-driven zoom
      camera.position.z = 9 + Math.min(scrollY / 200, 4);

      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      innerCoreGeo.dispose();
      innerCoreMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      orbits.forEach((o) => { o.geometry.dispose(); (o.material as THREE.Material).dispose(); });
      electrons.forEach((e) => { e.mesh.geometry.dispose(); (e.mesh.material as THREE.Material).dispose(); });
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 -z-10" aria-hidden="true" />;
}
