'use client';

import { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Float, Environment, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { gsap } from 'gsap';

// Fish Model Component
function Fish({ position }: { position: [number, number, number] }) {
  const fishRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (fishRef.current) {
      // Swim animation
      fishRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 2;
      fishRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.5;
    }
  });

  return (
    <mesh ref={fishRef} position={position}>
      <coneGeometry args={[0.5, 1.5, 8]} />
      <meshStandardMaterial color="#ff6b6b" />
    </mesh>
  );
}

// Bubble Component
function Bubble({ position }: { position: [number, number, number] }) {
  const bubbleRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (bubbleRef.current) {
      bubbleRef.current.position.y += 0.01;
      if (bubbleRef.current.position.y > 5) {
        bubbleRef.current.position.y = -5;
      }
    }
  });

  return (
    <mesh ref={bubbleRef} position={position}>
      <sphereGeometry args={[0.1, 16, 16]} />
      <meshStandardMaterial color="#a0e0ff" transparent opacity={0.7} />
    </mesh>
  );
}

// Water Caustics Effect
function Caustics() {
  const { viewport } = useThree();
  const causticsRef = useRef<THREE.Mesh>(null);
  const texture = useTexture('/caustics.jpg'); // Add a caustic light texture

  useFrame((state) => {
    if (causticsRef.current) {
      causticsRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <mesh ref={causticsRef} position={[0, 0, -1]}>
      <planeGeometry args={[viewport.width, viewport.height]} />
      <meshStandardMaterial
        map={texture}
        transparent
        opacity={0.3}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

export default function UnderwaterScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      {/* Underwater Fog */}
      <color attach="background" args={["#1a4b8c"]} />
      <fog attach="fog" args={["#1a4b8c", 2, 10]} />

      {/* Light (simulates sunlight through water) */}
      <directionalLight position={[1, 1, 1]} intensity={0.8} color="#a0e0ff" />
      <ambientLight intensity={0.3} color="#0055ff" />

      {/* Fish */}
      <Fish position={[-2, 0, 0]} />
      <Fish position={[1, -1, -2]} />

      {/* Bubbles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <Bubble
          key={i}
          position={[
            Math.random() * 6 - 3,
            Math.random() * -10,
            Math.random() * 2 - 1,
          ]}
        />
      ))}

      {/* Caustic Light Effect */}
      <Caustics />

      {/* Water Surface (optional) */}
      <mesh position={[0, 0, -3]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial
          color="#00a2ff"
          transparent
          opacity={0.2}
          side={THREE.DoubleSide}
        />
      </mesh>
    </Canvas>
  );
}