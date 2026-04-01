import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';
import { Physics, RigidBody, BallCollider, CuboidCollider, RapierRigidBody } from '@react-three/rapier';
import { Suspense, useRef, useMemo, useState, useEffect } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const smoothEase: [number, number, number, number] = [0.25, 0.4, 0.25, 1];

interface SkillSphere {
  label: string;
  color: string;
  position: [number, number, number];
}

const skills: SkillSphere[] = [
  { label: 'Premiere', color: '#9999FF' },
  { label: 'After FX', color: '#CF96FD' },
  { label: 'Resolve', color: '#E88D3F' },
  { label: 'FL Studio', color: '#FF7843' },
  { label: 'Photoshop', color: '#31A8FF' },
  { label: 'Blender', color: '#E87D0D' },
  { label: 'Minecraft', color: '#5D8731' },
  { label: 'Gaming', color: '#FF4655' },
  { label: 'Music', color: '#1DB954' },
  { label: 'Editing', color: '#5B9FED' },
  { label: 'Color', color: '#FFD700' },
  { label: 'Sound', color: '#FF6B9D' },
  { label: 'Motion', color: '#00D4FF' },
  { label: 'VFX', color: '#FF4500' },
  { label: 'Storytelling', color: '#A855F7' },
].map((s, i) => ({
  ...s,
  position: [
    (Math.random() - 0.5) * 6,
    4 + Math.random() * 8,
    (Math.random() - 0.5) * 2,
  ] as [number, number, number],
}));

const SkillBall = ({ label, color, position }: SkillSphere) => {
  const rigidBodyRef = useRef<RapierRigidBody>(null);
  const radius = 0.5 + Math.random() * 0.2;

  return (
    <RigidBody
      ref={rigidBodyRef}
      position={position}
      colliders={false}
      restitution={0.5}
      friction={0.3}
      linearDamping={0.5}
      angularDamping={0.5}
    >
      <BallCollider args={[radius]} />
      <mesh castShadow>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshStandardMaterial
          color={color}
          roughness={0.3}
          metalness={0.6}
          transparent
          opacity={0.85}
        />
      </mesh>
      <Text
        position={[0, 0, radius + 0.01]}
        fontSize={radius * 0.4}
        color="white"
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter-bold.woff"
        outlineWidth={0.02}
        outlineColor="black"
      >
        {label}
      </Text>
    </RigidBody>
  );
};

const MousePointer = () => {
  const rigidBodyRef = useRef<RapierRigidBody>(null);
  const { viewport } = useThree();

  useFrame(({ pointer }) => {
    if (!rigidBodyRef.current) return;
    const x = (pointer.x * viewport.width) / 2;
    const y = (pointer.y * viewport.height) / 2;
    rigidBodyRef.current.setTranslation({ x, y, z: 0 }, true);
  });

  return (
    <RigidBody
      ref={rigidBodyRef}
      type="kinematicPosition"
      colliders={false}
    >
      <BallCollider args={[0.8]} />
    </RigidBody>
  );
};

const PhysicsScene = () => {
  return (
    <Physics gravity={[0, -3, 0]}>
      {/* Floor */}
      <RigidBody type="fixed" position={[0, -4, 0]}>
        <CuboidCollider args={[10, 0.1, 5]} />
      </RigidBody>

      {/* Walls */}
      <RigidBody type="fixed" position={[-5, 0, 0]}>
        <CuboidCollider args={[0.1, 10, 5]} />
      </RigidBody>
      <RigidBody type="fixed" position={[5, 0, 0]}>
        <CuboidCollider args={[0.1, 10, 5]} />
      </RigidBody>

      <MousePointer />

      {skills.map((skill, i) => (
        <SkillBall key={i} {...skill} />
      ))}
    </Physics>
  );
};

const PhysicsTechStack = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 md:py-24 relative overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: smoothEase }}
        >
          <p className="text-sm md:text-base uppercase tracking-[0.2em] text-muted-foreground font-medium mb-2">
            Tech Stack
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary-foreground bg-clip-text text-transparent">
              My Skills
            </span>
          </h2>
        </motion.div>

        {/* 3D Canvas - desktop only */}
        <div className="hidden md:block relative w-full h-[500px] rounded-2xl overflow-hidden border border-primary/10">
          {isVisible && (
            <Canvas
              camera={{ position: [0, 0, 8], fov: 50 }}
              style={{ background: 'transparent' }}
              dpr={[1, 1.5]}
            >
              <Suspense fallback={null}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={0.8} />
                <pointLight position={[-3, 3, 2]} intensity={0.5} color="#5B9FED" />
                <PhysicsScene />
              </Suspense>
            </Canvas>
          )}
        </div>

        {/* Mobile fallback - skill grid */}
        <div className="md:hidden grid grid-cols-3 gap-3">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="flex items-center justify-center p-3 rounded-xl border border-primary/15 bg-card/50 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5, ease: smoothEase }}
            >
              <div
                className="w-2 h-2 rounded-full mr-2 flex-shrink-0"
                style={{ backgroundColor: skill.color }}
              />
              <span className="text-xs font-medium text-foreground">{skill.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhysicsTechStack;
