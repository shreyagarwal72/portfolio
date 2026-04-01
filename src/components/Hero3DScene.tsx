import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei';
import { Suspense, useRef, useMemo } from 'react';
import * as THREE from 'three';

const MouseLight = () => {
  const lightRef = useRef<THREE.PointLight>(null);
  const { viewport } = useThree();

  useFrame(({ pointer }) => {
    if (lightRef.current) {
      lightRef.current.position.x = (pointer.x * viewport.width) / 2;
      lightRef.current.position.y = (pointer.y * viewport.height) / 2;
    }
  });

  return (
    <pointLight
      ref={lightRef}
      intensity={2}
      distance={15}
      color="hsl(217, 80%, 65%)"
    />
  );
};

const FloatingShape = ({
  position,
  geometry,
  color,
  speed,
  rotationSpeed,
  scale,
}: {
  position: [number, number, number];
  geometry: 'icosahedron' | 'torus' | 'octahedron' | 'dodecahedron';
  color: string;
  speed: number;
  rotationSpeed: number;
  scale: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  useFrame(({ pointer, clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();

    // Gentle mouse following
    const targetX = position[0] + (pointer.x * viewport.width) / 8;
    const targetY = position[1] + (pointer.y * viewport.height) / 8;

    meshRef.current.position.x += (targetX - meshRef.current.position.x) * 0.02;
    meshRef.current.position.y += (targetY - meshRef.current.position.y) * 0.02;

    // Organic rotation
    meshRef.current.rotation.x = Math.sin(t * rotationSpeed * 0.5) * 0.3;
    meshRef.current.rotation.y += rotationSpeed * 0.005;
    meshRef.current.rotation.z = Math.cos(t * rotationSpeed * 0.3) * 0.2;
  });

  const geometryNode = useMemo(() => {
    switch (geometry) {
      case 'icosahedron':
        return <icosahedronGeometry args={[1, 1]} />;
      case 'torus':
        return <torusGeometry args={[1, 0.4, 16, 32]} />;
      case 'octahedron':
        return <octahedronGeometry args={[1, 0]} />;
      case 'dodecahedron':
        return <dodecahedronGeometry args={[1, 0]} />;
    }
  }, [geometry]);

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        {geometryNode}
        <MeshDistortMaterial
          color={color}
          distort={0.3}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.7}
        />
      </mesh>
    </Float>
  );
};

const WireframeRing = ({ position, scale }: { position: [number, number, number]; scale: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.15;
    meshRef.current.rotation.z = t * 0.1;
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <torusGeometry args={[1.5, 0.02, 16, 64]} />
      <meshBasicMaterial color="hsl(217, 80%, 65%)" transparent opacity={0.3} />
    </mesh>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      <MouseLight />

      <FloatingShape position={[-3, 1.5, -2]} geometry="icosahedron" color="#5B9FED" speed={1.5} rotationSpeed={0.8} scale={0.8} />
      <FloatingShape position={[3, -1, -1]} geometry="torus" color="#8B5CF6" speed={2} rotationSpeed={1.2} scale={0.6} />
      <FloatingShape position={[-1.5, -2, -3]} geometry="octahedron" color="#06B6D4" speed={1.8} rotationSpeed={0.6} scale={0.5} />
      <FloatingShape position={[2, 2.5, -2]} geometry="dodecahedron" color="#EC4899" speed={1.2} rotationSpeed={1} scale={0.4} />
      <FloatingShape position={[0, 0, -4]} geometry="icosahedron" color="#5B9FED" speed={1} rotationSpeed={0.4} scale={1.2} />

      <WireframeRing position={[0, 0, -3]} scale={1.5} />
      <WireframeRing position={[-2, 1, -4]} scale={0.8} />
    </>
  );
};

export const Hero3DScene = ({ className = '' }: { className?: string }) => {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        style={{ background: 'transparent' }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Hero3DScene;
