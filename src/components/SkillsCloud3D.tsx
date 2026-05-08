import { Canvas, useFrame } from '@react-three/fiber';
import { Billboard, Text, OrbitControls } from '@react-three/drei';
import { Suspense, useMemo, useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const DEFAULT_SKILLS = [
  'Filmora', 'CapCut', 'Shotcut', 'Pixabay', 'ChatGPT',
  'Editing', 'Motion', 'Color', 'Audio', 'VFX',
  'Gaming', 'Music', 'Photo', 'Travel', 'Design',
  'React', 'Three.js', 'Tailwind', 'Hindi', 'English',
];

// Fibonacci sphere distribution
const fibSphere = (n: number, radius: number) => {
  const points: [number, number, number][] = [];
  const phi = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = phi * i;
    points.push([
      Math.cos(theta) * r * radius,
      y * radius,
      Math.sin(theta) * r * radius,
    ]);
  }
  return points;
};

const Cloud = ({ skills, color }: { skills: string[]; color: string }) => {
  const group = useRef<THREE.Group>(null);
  const positions = useMemo(() => fibSphere(skills.length, 2.4), [skills.length]);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.15;
      group.current.rotation.x += delta * 0.04;
    }
  });

  return (
    <group ref={group}>
      {skills.map((skill, i) => (
        <Billboard key={skill} position={positions[i]}>
          <Text
            fontSize={0.22}
            color={color}
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.005}
            outlineColor="#000000"
            outlineOpacity={0.4}
          >
            {skill}
          </Text>
        </Billboard>
      ))}
    </group>
  );
};

interface Props {
  className?: string;
  skills?: string[];
}

const SkillsCloud3D = ({ className = '', skills = DEFAULT_SKILLS }: Props) => {
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

  const color = isDark ? '#a8c8ff' : '#5B9FED';

  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 1.5]}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <Cloud skills={skills} color={color} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.6}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default SkillsCloud3D;
