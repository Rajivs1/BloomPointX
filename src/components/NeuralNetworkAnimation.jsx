import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';

// Lightning particle effect
const LightningParticle = ({ position, color }) => {
  const meshRef = useRef();
  const [initialPosition] = useState(position);
  const [scale] = useState(Math.random() * 0.5 + 0.2);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Lightning-like movement
      meshRef.current.position.x = initialPosition[0];
      meshRef.current.position.y = initialPosition[1] + Math.sin(state.clock.getElapsedTime() * (2 + Math.random())) * 0.2;
      meshRef.current.position.z = initialPosition[2];
      
      // Flickering effect
      const flicker = 0.7 + Math.sin(state.clock.getElapsedTime() * 10 * Math.random()) * 0.3;
      meshRef.current.material.opacity = flicker;
      meshRef.current.material.emissiveIntensity = flicker * 2;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={[scale, scale * 3, scale]} className="lightning-particle">
      <boxGeometry args={[0.05, 0.2, 0.05]} />
      <meshStandardMaterial 
        color={color} 
        emissive={color}
        emissiveIntensity={1.5}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
};

// Floating text for BloomPointX
const FloatingText = () => {
  const textRef = useRef();
  
  useFrame((state) => {
    if (textRef.current) {
      textRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
      textRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
    }
  });

  return (
    <group ref={textRef} position={[0, -2.5, 0]} className="pulse-glow-strong">
      <Center>
        <Text3D
          font="/fonts/Inter_Bold.json"
          size={0.5}
          height={0.1}
          curveSegments={12}
        >
          BloomPointX
          <meshStandardMaterial 
            color="#4fc3f7"
            emissive="#4fc3f7"
            emissiveIntensity={0.8}
            metalness={0.5}
            roughness={0.2}
          />
        </Text3D>
      </Center>
    </group>
  );
};

// Particle component that represents a node in the neural network
const Particle = ({ position, color, size, isHovered }) => {
  const meshRef = useRef();
  const [initialPosition] = useState(position);
  
  // Animation on hover
  useFrame((state) => {
    if (meshRef.current) {
      if (isHovered) {
        // Move particles slightly when hovered
        meshRef.current.position.x = initialPosition[0] + Math.sin(state.clock.getElapsedTime() * 2) * 0.15;
        meshRef.current.position.y = initialPosition[1] + Math.cos(state.clock.getElapsedTime() * 2) * 0.15;
        meshRef.current.position.z = initialPosition[2] + Math.sin(state.clock.getElapsedTime()) * 0.15;
        
        // Glow effect
        meshRef.current.material.emissiveIntensity = 1.5 + Math.sin(state.clock.getElapsedTime() * 3) * 0.5;
      } else {
        // Subtle movement when not hovered
        meshRef.current.position.x = initialPosition[0] + Math.sin(state.clock.getElapsedTime()) * 0.05;
        meshRef.current.position.y = initialPosition[1] + Math.cos(state.clock.getElapsedTime()) * 0.05;
        meshRef.current.position.z = initialPosition[2];
        
        // Normal emissive intensity
        meshRef.current.material.emissiveIntensity = 0.8;
      }
    }
  });

  return (
    <mesh 
      ref={meshRef} 
      position={position}
    >
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial 
        color={color} 
        emissive={color}
        emissiveIntensity={0.8}
        transparent
        opacity={0.9}
      />
    </mesh>
  );
};

// Connection line between particles
const Connection = ({ start, end, color, isHovered }) => {
  const ref = useRef();
  
  useEffect(() => {
    if (ref.current) {
      const points = [];
      points.push(new THREE.Vector3(...start));
      points.push(new THREE.Vector3(...end));
      
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      ref.current.geometry = geometry;
    }
  }, [start, end]);
  
  useFrame((state) => {
    if (ref.current && isHovered) {
      ref.current.material.opacity = 0.5 + Math.sin(state.clock.getElapsedTime() * 2) * 0.3;
    } else if (ref.current) {
      ref.current.material.opacity = 0.4;
    }
  });

  return (
    <line ref={ref}>
      <bufferGeometry />
      <lineBasicMaterial color={color} transparent opacity={0.4} />
    </line>
  );
};

// Neural Network component that contains particles and connections
const NeuralNetwork = ({ count = 40 }) => {
  const [particles, setParticles] = useState([]);
  const [connections, setConnections] = useState([]);
  const [lightningParticles, setLightningParticles] = useState([]);
  const [hovered, setHovered] = useState(false);
  
  useEffect(() => {
    // Generate random particles
    const tempParticles = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 6;
      const y = (Math.random() - 0.5) * 6;
      const z = (Math.random() - 0.5) * 4;
      
      // Assign colors based on position (for visual effect)
      let color;
      if (i % 4 === 0) {
        color = '#ff5b79'; // pink
      } else if (i % 4 === 1) {
        color = '#4fc3f7'; // blue
      } else if (i % 4 === 2) {
        color = '#8bc34a'; // green
      } else {
        color = '#ffca28'; // yellow
      }
      
      const size = Math.random() * 0.15 + 0.08;
      
      tempParticles.push({
        id: i,
        position: [x, y, z],
        color,
        size
      });
    }
    setParticles(tempParticles);
    
    // Generate connections between particles
    const tempConnections = [];
    for (let i = 0; i < tempParticles.length; i++) {
      // Connect each particle to 2-4 closest particles
      const connectionsCount = Math.floor(Math.random() * 3) + 2;
      
      for (let j = 0; j < connectionsCount; j++) {
        const targetIndex = (i + j + 1) % tempParticles.length;
        if (i !== targetIndex) {
          tempConnections.push({
            id: `${i}-${targetIndex}`,
            start: tempParticles[i].position,
            end: tempParticles[targetIndex].position,
            color: tempParticles[i].color
          });
        }
      }
    }
    setConnections(tempConnections);
    
    // Generate lightning particles
    const tempLightning = [];
    for (let i = 0; i < 30; i++) {
      const x = (Math.random() - 0.5) * 8;
      const y = (Math.random() - 0.5) * 8;
      const z = (Math.random() - 0.5) * 2 - 2; // Behind the network
      
      // Lightning colors
      let color;
      if (i % 3 === 0) {
        color = '#4fc3f7'; // blue
      } else if (i % 3 === 1) {
        color = '#7e57c2'; // purple
      } else {
        color = '#26c6da'; // cyan
      }
      
      tempLightning.push({
        id: `lightning-${i}`,
        position: [x, y, z],
        color
      });
    }
    setLightningParticles(tempLightning);
    
  }, [count]);
  
  return (
    <group
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Lightning particles in background */}
      {lightningParticles.map((lightning) => (
        <LightningParticle
          key={lightning.id}
          position={lightning.position}
          color={lightning.color}
        />
      ))}
      
      {/* Neural network particles */}
      {particles.map((particle) => (
        <Particle
          key={particle.id}
          position={particle.position}
          color={particle.color}
          size={particle.size}
          isHovered={hovered}
        />
      ))}
      
      {/* Connections between particles */}
      {connections.map((connection) => (
        <Connection
          key={connection.id}
          start={connection.start}
          end={connection.end}
          color={connection.color}
          isHovered={hovered}
        />
      ))}
      
      {/* BloomPointX 3D Text */}
      <FloatingText />
    </group>
  );
};

// Main component with Canvas
const NeuralNetworkAnimation = () => {
  return (
    <div className="w-full h-[700px] relative neural-network-section">
      {/* Background rotating circles */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-blue-500 rounded-full rotate-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-purple-500 rounded-full rotate-slow" style={{animationDirection: 'reverse', animationDuration: '100s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-green-500 rounded-full rotate-slow" style={{animationDuration: '80s'}}></div>
      </div>
      
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <spotLight position={[0, 5, 5]} angle={0.3} penumbra={1} intensity={1} castShadow />
        <NeuralNetwork />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
      
      {/* Overlay text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
        <div className="neural-text">
          <h2 className="text-3xl md:text-5xl font-bold mb-2 text-white bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-float pulse-glow-strong">
            Neural Fusion Network
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <span className="text-green-400 text-xl">Advanced</span>
            <span className="text-blue-400 text-xl">Digital</span>
            <span className="text-purple-400 text-xl">Transform</span>
            <span className="text-pink-400 text-xl">Reality</span>
            <span className="text-yellow-400 text-xl">Evolution</span>
            <span className="text-cyan-400 text-xl">Through</span>
          </div>
          <p className="text-xl text-white mb-10 max-w-2xl px-4">
            Transform your tech journey with our AI-powered learning experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl px-4">
          <div className="glass-effect p-6 rounded-lg text-center neural-card">
            <div className="text-4xl mb-3 text-blue-400">∞</div>
            <h3 className="text-lg font-semibold text-white">POSSIBILITIES</h3>
          </div>
          <div className="glass-effect p-6 rounded-lg text-center neural-card">
            <div className="text-4xl mb-3 text-pink-400">★</div>
            <h3 className="text-lg font-semibold text-white">NEURAL SPEED</h3>
          </div>
          <div className="glass-effect p-6 rounded-lg text-center neural-card">
            <div className="text-4xl mb-3 text-purple-400">⚡</div>
            <h3 className="text-lg font-semibold text-white">AI POWERED</h3>
          </div>
        </div>
      </div>
      
      {/* Instruction text */}
      <div className="absolute bottom-6 left-0 right-0 text-center text-white text-sm opacity-70 bg-black bg-opacity-30 py-2 z-10">
        Hover or touch to interact with the neural network
      </div>
    </div>
  );
};

export default NeuralNetworkAnimation; 