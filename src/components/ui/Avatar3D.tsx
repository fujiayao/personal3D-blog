import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Html, useProgress } from '@react-three/drei';
import { Suspense, useMemo } from 'react';
import * as THREE from 'three';

function Model() {
  const { scene } = useGLTF('/avatar3d.glb');

  const { adjustedScene } = useMemo(() => {
    const cloned = scene.clone(true);
    const box = new THREE.Box3().setFromObject(cloned);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = 1.2 / maxDim;

    cloned.position.sub(center.multiplyScalar(scale));
    cloned.scale.setScalar(scale);

    cloned.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = false;
        child.receiveShadow = false;
      }
    });

    return { adjustedScene: cloned };
  }, [scene]);

  return <primitive object={adjustedScene} />;
}

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div style={{ color: '#4ade80', fontSize: '14px', fontFamily: 'monospace' }}>
        加载中... {progress.toFixed(0)}%
      </div>
    </Html>
  );
}

useGLTF.preload('/avatar3d.glb');

export default function Avatar3D() {
  return (
    <Canvas
      frameloop="always"
      dpr={1}
      camera={{ position: [0, 0.2, 4], fov: 35 }}
      gl={{ alpha: true, antialias: true }}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'transparent' }}
      resize={{ scroll: false, resize: () => false }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 3, 2]} intensity={1.0} />
      <directionalLight position={[-2, 1, -1]} intensity={0.3} />
      <Suspense fallback={<Loader />}>
        <Model />
      </Suspense>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={true}
        autoRotate={false}
        rotateSpeed={0.5}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.5}
      />
    </Canvas>
  );
}
