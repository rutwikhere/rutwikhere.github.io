import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Stars, TorusKnot, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const HeroScene = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(({ mouse, clock }) => {
    if (groupRef.current) {
      // Gentle floating and rotation based on mouse
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, (mouse.y * Math.PI) / 10, 0.05);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, (mouse.x * Math.PI) / 10, 0.05);
      // Continuous slow rotation
      groupRef.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <>
      <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} color="#5EEAD4" />
      <pointLight position={[-10, -10, -5]} intensity={2} color="#8B5CF6" />
      
      <group ref={groupRef}>
        <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
          <Sphere args={[1.5, 32, 32]} position={[2, 0, -2]}>
            <MeshDistortMaterial color="#5EEAD4" attach="material" distort={0.3} speed={1.5} roughness={0.4} metalness={0.6} />
          </Sphere>
        </Float>
        
        <Float speed={2} rotationIntensity={2} floatIntensity={1.5}>
          <TorusKnot args={[1, 0.3, 64, 16]} position={[-2, 1, -1]}>
            <meshStandardMaterial color="#8B5CF6" wireframe opacity={0.3} transparent />
          </TorusKnot>
        </Float>

        <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
          <Sphere args={[0.5, 16, 16]} position={[0, -2, 1]}>
             <meshPhysicalMaterial 
               color="#ffffff"
               transmission={1}
               opacity={1}
               metalness={0}
               roughness={0}
               ior={1.5}
               thickness={0.5}
             />
          </Sphere>
        </Float>
      </group>
    </>
  );
};

export default HeroScene;
