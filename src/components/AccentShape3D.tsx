import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import { Suspense, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

type ShapeKind = 'knot' | 'box' | 'octa';

interface Props {
  className?: string;
  shape?: ShapeKind;
  color?: string;
}

const Geo = ({ shape }: { shape: ShapeKind }) => {
  switch (shape) {
    case 'box':
      return <boxGeometry args={[1.6, 1.6, 1.6, 8, 8, 8]} />;
    case 'octa':
      return <octahedronGeometry args={[1.4, 2]} />;
    case 'knot':
    default:
      return <torusKnotGeometry args={[1, 0.32, 128, 24]} />;
  }
};

const Shape = ({ shape, color }: { shape: ShapeKind; color: string }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.x = t * 0.25;
    ref.current.rotation.y = t * 0.35;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={ref} scale={1.1}>
        <Geo shape={shape} />
        <MeshDistortMaterial
          color={color}
          distort={shape === 'box' ? 0.25 : 0.35}
          speed={1.4}
          roughness={0.2}
          metalness={0.85}
        />
      </mesh>
    </Float>
  );
};

const AccentShape3D = ({ className = '', shape = 'knot', color }: Props) => {
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

  const finalColor = color ?? (isDark ? '#5B9FED' : '#8B5CF6');

  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 50 }}
        dpr={[1, 1.5]}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={0.9} />
          <pointLight position={[-4, -4, -2]} intensity={0.5} color={finalColor} />
          <Shape shape={shape} color={finalColor} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default AccentShape3D;
