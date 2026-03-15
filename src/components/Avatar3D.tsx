import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, useGLTF, Environment } from '@react-three/drei';
import { Suspense, useState } from 'react';
import vanshuProfile from '@/assets/vanshu-profile-new.jpg';

const MODEL_URL = 'https://threejs.org/examples/models/gltf/Soldier.glb';

const CharacterModel = () => {
  const { scene } = useGLTF(MODEL_URL);
  
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <primitive 
        object={scene} 
        scale={1.8} 
        position={[0, -2.5, 0]} 
        rotation={[0, Math.PI, 0]}
      />
    </Float>
  );
};

useGLTF.preload(MODEL_URL);

const Avatar3D = ({ className = "" }: { className?: string }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className={className}>
        <div className="aspect-[3/4] bg-muted rounded-xl overflow-hidden shadow-inner flex items-center justify-center">
          <img
            src={vanshuProfile}
            alt="Vanshu Agarwal"
            className="w-full h-full object-contain"
            loading="eager"
          />
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        style={{ background: 'transparent' }}
        onCreated={() => {}}
        onError={() => setHasError(true)}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} />
          <pointLight position={[-5, 3, -5]} intensity={0.4} color="#5B9FED" />
          <CharacterModel />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={1}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.8}
          />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Avatar3D;
