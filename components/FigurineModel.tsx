import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, Group } from 'three';

export const FigurineModel: React.FC = () => {
  const groupRef = useRef<Group>(null);
  
  // Rotate the model slowly
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3;
    }
  });

  const materialProps = {
    color: "#EAB308", // Gold color
    roughness: 0.3,
    metalness: 0.6,
  };

  return (
    <group ref={groupRef} position={[0, -1.5, 0]}>
      {/* Head */}
      <mesh position={[0, 2.8, 0]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial {...materialProps} />
      </mesh>

      {/* Neck */}
      <mesh position={[0, 2.3, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 0.4, 16]} />
        <meshStandardMaterial {...materialProps} />
      </mesh>

      {/* Torso */}
      <mesh position={[0, 1.2, 0]}>
        <boxGeometry args={[0.8, 1.8, 0.5]} />
        <meshStandardMaterial {...materialProps} />
      </mesh>

      {/* Right Arm (Upper) */}
      <mesh position={[0.6, 1.8, 0]} rotation={[0, 0, -0.2]}>
        <cylinderGeometry args={[0.12, 0.12, 0.8]} />
        <meshStandardMaterial {...materialProps} />
      </mesh>
       {/* Right Arm (Lower) */}
      <mesh position={[0.75, 1.1, 0.2]} rotation={[-0.5, 0, -0.2]}>
         <cylinderGeometry args={[0.1, 0.1, 0.8]} />
         <meshStandardMaterial {...materialProps} />
      </mesh>

      {/* Left Arm (Upper) */}
      <mesh position={[-0.6, 1.8, 0]} rotation={[0, 0, 0.2]}>
        <cylinderGeometry args={[0.12, 0.12, 0.8]} />
        <meshStandardMaterial {...materialProps} />
      </mesh>
       {/* Left Arm (Lower) - Waving */}
       <mesh position={[-0.9, 2.4, 0.2]} rotation={[0, 0, 0.5]}>
         <cylinderGeometry args={[0.1, 0.1, 0.8]} />
         <meshStandardMaterial {...materialProps} />
      </mesh>

      {/* Right Leg */}
      <mesh position={[0.25, -0.5, 0]}>
        <cylinderGeometry args={[0.15, 0.12, 1.8]} />
        <meshStandardMaterial {...materialProps} />
      </mesh>

      {/* Left Leg */}
      <mesh position={[-0.25, -0.5, 0]}>
        <cylinderGeometry args={[0.15, 0.12, 1.8]} />
        <meshStandardMaterial {...materialProps} />
      </mesh>

      {/* Base */}
      <mesh position={[0, -1.5, 0]} receiveShadow>
        <cylinderGeometry args={[1.5, 1.7, 0.2, 32]} />
        <meshStandardMaterial color="#333" roughness={0.5} metalness={0.2} />
      </mesh>
      
      {/* Decorative Ring */}
      <mesh position={[0, -1.4, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.6, 0.05, 16, 100]} />
        <meshStandardMaterial emissive="#EAB308" emissiveIntensity={2} toneMapped={false} />
      </mesh>
    </group>
  );
};