import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Environment, Torus, Icosahedron } from '@react-three/drei';
import { Suspense, useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const Scene = ({ isDark }: { isDark: boolean }) => {
  const mainRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const knotRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (mainRef.current) {
      mainRef.current.rotation.y = t * 0.15;
      mainRef.current.rotation.x = Math.sin(t * 0.2) * 0.2;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x = t * 0.3;
      ringRef.current.rotation.z = t * 0.2;
    }
    if (knotRef.current) {
      knotRef.current.rotation.x = t * 0.4;
      knotRef.current.rotation.y = t * 0.25;
    }
    if (groupRef.current) {
      // gentle scroll-like sway
      groupRef.current.rotation.y = Math.sin(t * 0.1) * 0.3;
    }
  });

  const baseColor = isDark ? '#5B9FED' : '#8B5CF6';
  const accentColor = isDark ? '#a855f7' : '#F472B6';

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <pointLight position={[-5, -5, -5]} intensity={0.6} color={accentColor} />
      <Environment preset="city" />

      {/* Main distorted icosahedron */}
      <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
        <Icosahedron ref={mainRef} args={[1.6, 4]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color={baseColor}
            distort={0.45}
            speed={1.6}
            roughness={0.15}
            metalness={0.85}
          />
        </Icosahedron>
      </Float>

      {/* Wireframe ring */}
      <Float speed={1} rotationIntensity={0.4} floatIntensity={0.6}>
        <Torus ref={ringRef} args={[2.6, 0.025, 16, 100]} position={[0, 0, 0]}>
          <meshStandardMaterial color={accentColor} wireframe transparent opacity={0.5} />
        </Torus>
      </Float>

      {/* Small orbiting torus knot */}
      <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
        <mesh ref={knotRef} position={[2.4, 1.2, -0.5]} scale={0.45}>
          <torusKnotGeometry args={[1, 0.3, 100, 16]} />
          <meshStandardMaterial color={accentColor} roughness={0.2} metalness={0.9} />
        </mesh>
      </Float>
    </group>
  );
};

export const Floating3D = ({ className = '' }: { className?: string }) => {
  const [isDark, setIsDark] = useState(
    typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
  );

  useEffect(() => {
    const obs = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => obs.disconnect();
  }, []);

  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 50 }}
        dpr={[1, 1.5]}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Scene isDark={isDark} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Floating3D;
