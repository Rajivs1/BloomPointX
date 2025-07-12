import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text3D, Center, Float, Text } from '@react-three/drei';
import * as THREE from 'three';

// Falling particle effect
const FallingParticle = ({ position, color, size, speed }) => {
  const meshRef = useRef();
  const [initialPosition] = useState([
    position[0], 
    position[1] + 20, // Start above the visible area
    position[2]
  ]);
  const [rotationSpeed] = useState({
    x: Math.random() * 0.03,
    y: Math.random() * 0.03,
    z: Math.random() * 0.03
  });
  
  useFrame((state) => {
    if (meshRef.current) {
      // Fall downward
      meshRef.current.position.y -= speed;
      
      // Add slight horizontal drift
      meshRef.current.position.x += Math.sin(state.clock.getElapsedTime() * 0.5 + initialPosition[0]) * 0.01;
      
      // Rotate
      meshRef.current.rotation.x += rotationSpeed.x;
      meshRef.current.rotation.y += rotationSpeed.y;
      meshRef.current.rotation.z += rotationSpeed.z;
      
      // Reset position when it falls out of view
      if (meshRef.current.position.y < -15) {
        meshRef.current.position.y = initialPosition[1];
        meshRef.current.position.x = initialPosition[0] + (Math.random() - 0.5) * 3;
      }
      
      // Pulse glow effect
      meshRef.current.material.emissiveIntensity = 2.5 + Math.sin(state.clock.getElapsedTime() * 2) * 0.8;
    }
  });

  return (
    <mesh ref={meshRef} position={initialPosition}>
      <icosahedronGeometry args={[size, 1]} />
      <meshStandardMaterial 
        color={color} 
        emissive={color}
        emissiveIntensity={3}
        transparent
        opacity={1}
        metalness={0.5}
        roughness={0.2}
      />
    </mesh>
  );
};

// Light beam effect
const LightBeam = ({ position, color, direction }) => {
  const meshRef = useRef();
  const [initialPosition] = useState(position);
  const [scale] = useState(Math.random() * 0.8 + 0.5);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Move along direction
      meshRef.current.position.x = initialPosition[0] + Math.sin(state.clock.getElapsedTime() * direction[0]) * 3;
      meshRef.current.position.y = initialPosition[1] + Math.cos(state.clock.getElapsedTime() * direction[1]) * 3;
      meshRef.current.position.z = initialPosition[2];
      
      // Rotate to face movement direction
      meshRef.current.lookAt(
        meshRef.current.position.x + direction[0],
        meshRef.current.position.y + direction[1],
        meshRef.current.position.z + direction[2]
      );
      
      // Flickering effect
      const flicker = 0.7 + Math.sin(state.clock.getElapsedTime() * 15) * 0.3;
      meshRef.current.material.opacity = flicker;
      meshRef.current.material.emissiveIntensity = flicker * 4;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={[scale, scale * 3, scale * 0.2]}>
      <boxGeometry args={[0.1, 1.2, 0.1]} />
      <meshStandardMaterial 
        color={color} 
        emissive={color}
        emissiveIntensity={3}
        transparent
        opacity={0.9}
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
          size={0.6}
          height={0.15}
          curveSegments={16}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelSegments={5}
        >
          BloomPointX
          <meshStandardMaterial 
            color="#4fc3f7"
            emissive="#4fc3f7"
            emissiveIntensity={1.5}
            metalness={0.7}
            roughness={0.2}
          />
        </Text3D>
      </Center>
    </group>
  );
};

// Floating tech keywords
const FloatingKeyword = ({ text, position, color, size = 0.2 }) => {
  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <Text
        position={position}
        fontSize={size}
        color={color}
        font="/fonts/Inter_Bold.json"
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </Float>
  );
};

// Radial light effect
const RadialLight = ({ position, color, intensity }) => {
  const lightRef = useRef();
  
  useFrame((state) => {
    if (lightRef.current) {
      // Pulsating light
      lightRef.current.intensity = intensity * (0.7 + Math.sin(state.clock.getElapsedTime() * 2) * 0.3);
      
      // Slowly moving position
      lightRef.current.position.x = position[0] + Math.sin(state.clock.getElapsedTime() * 0.5) * 2;
      lightRef.current.position.y = position[1] + Math.cos(state.clock.getElapsedTime() * 0.5) * 2;
    }
  });

  return <pointLight ref={lightRef} position={position} color={color} intensity={intensity} distance={20} decay={2} />;
};

// Main particle system component
const ParticleSystem = ({ count = 150 }) => {
  const [particles, setParticles] = useState([]);
  const [lightBeams, setLightBeams] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const [lights, setLights] = useState([]);
  const [hovered, setHovered] = useState(false);
  
  useEffect(() => {
    // Generate keywords
    const techKeywords = [
      { text: "AI", position: [-3, 2, 0], color: "#ff5b79", size: 0.3 },
      { text: "Machine Learning", position: [3, 1.5, 0], color: "#4fc3f7", size: 0.25 },
      { text: "Data Science", position: [-2, -1.5, 0], color: "#ffca28", size: 0.25 },
      { text: "Deep Learning", position: [0, 2.5, 0], color: "#7e57c2", size: 0.25 },
      { text: "Python", position: [-3.5, 0, 0], color: "#26c6da", size: 0.25 },
      { text: "TensorFlow", position: [3.5, -2, 0], color: "#ff7043", size: 0.25 },
      { text: "Innovation", position: [-2.5, 3, 0], color: "#66bb6a", size: 0.25 }
    ];
    setKeywords(techKeywords);
    
    // Generate falling particles
    const tempParticles = [];
    const colors = ['#ff5b79', '#4fc3f7', '#8bc34a', '#ffca28', '#7e57c2', '#26c6da', '#ff7043'];
    
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = Math.random() * 30 - 15; // Distributed vertically
      const z = (Math.random() - 0.5) * 10;
      
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.random() * 0.4 + 0.2; // Larger particles
      const speed = Math.random() * 0.06 + 0.03; // Variable speed
      
      tempParticles.push({
        id: `particle-${i}`,
        position: [x, y, z],
        color,
        size,
        speed
      });
    }
    setParticles(tempParticles);
    
    // Generate light beams
    const tempLightBeams = [];
    for (let i = 0; i < 40; i++) {
      const x = (Math.random() - 0.5) * 16;
      const y = (Math.random() - 0.5) * 12;
      const z = (Math.random() - 0.5) * 3 - 2;
      
      const direction = [
        Math.random() * 0.8 + 0.4,
        Math.random() * 0.8 + 0.4,
        0
      ];
      
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      tempLightBeams.push({
        id: `beam-${i}`,
        position: [x, y, z],
        color,
        direction
      });
    }
    setLightBeams(tempLightBeams);
    
    // Generate radial lights
    const tempLights = [];
    const lightColors = ['#ff5b79', '#4fc3f7', '#8bc34a', '#ffca28', '#7e57c2'];
    
    for (let i = 0; i < 10; i++) {
      const x = (Math.random() - 0.5) * 16;
      const y = (Math.random() - 0.5) * 12;
      const z = (Math.random() - 0.5) * 10 - 5;
      
      const color = lightColors[Math.floor(Math.random() * lightColors.length)];
      const intensity = Math.random() * 3 + 2; // Increased light intensity
      
      tempLights.push({
        id: `light-${i}`,
        position: [x, y, z],
        color,
        intensity
      });
    }
    setLights(tempLights);
    
  }, [count]);
  
  return (
    <group
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Falling particles */}
      {particles.map((particle) => (
        <FallingParticle
          key={particle.id}
          position={particle.position}
          color={particle.color}
          size={particle.size}
          speed={hovered ? particle.speed * 1.5 : particle.speed}
        />
      ))}
      
      {/* Light beams */}
      {lightBeams.map((beam) => (
        <LightBeam
          key={beam.id}
          position={beam.position}
          color={beam.color}
          direction={beam.direction}
        />
      ))}
      
      {/* Radial lights */}
      {lights.map((light) => (
        <RadialLight
          key={light.id}
          position={light.position}
          color={light.color}
          intensity={hovered ? light.intensity * 1.5 : light.intensity}
        />
      ))}
      
      {/* Floating keywords */}
      {keywords.map((keyword, index) => (
        <FloatingKeyword
          key={index}
          text={keyword.text}
          position={keyword.position}
          color={keyword.color}
          size={keyword.size}
        />
      ))}
      
      {/* BloomPointX 3D Text */}
      <FloatingText />
    </group>
  );
};

// Main component with Canvas
const ParticleAnimation = () => {
  return (
    <div className="w-full h-[800px] relative particle-animation-section">
      {/* Background rotating circles */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-blue-500 rounded-full rotate-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-purple-500 rounded-full rotate-slow" style={{animationDirection: 'reverse', animationDuration: '100s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-green-500 rounded-full rotate-slow" style={{animationDuration: '80s'}}></div>
      </div>
      
      <Canvas shadows camera={{ position: [0, 0, 15], fov: 70 }}>
        <color attach="background" args={['#000015']} />
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={3} />
        <pointLight position={[-10, -10, -10]} intensity={2.5} color="#4fc3f7" />
        <spotLight position={[0, 5, 15]} angle={0.6} penumbra={1} intensity={4} castShadow />
        <ParticleSystem />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.2} />
      </Canvas>
      
      {/* Overlay text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none z-10">
        <div className="neural-text max-w-4xl w-full px-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-float pulse-glow-strong">
            Tech Excellence Hub
          </h2>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <span className="text-green-400 text-xl md:text-2xl font-bold glass-tag">Advanced</span>
            <span className="text-blue-400 text-xl md:text-2xl font-bold glass-tag">Digital</span>
            <span className="text-purple-400 text-xl md:text-2xl font-bold glass-tag">Transform</span>
            <span className="text-pink-400 text-xl md:text-2xl font-bold glass-tag">Reality</span>
            <span className="text-yellow-400 text-xl md:text-2xl font-bold glass-tag">Evolution</span>
          </div>
          <p className="text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto px-4 font-light leading-relaxed">
            BloomPointX - Where Technology Meets Your Career Growth
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl px-6 w-full">
          <div className="glass-card p-8 rounded-xl text-center neural-card">
            <div className="text-5xl mb-4 text-blue-400">∞</div>
            <h3 className="text-xl font-bold text-white mb-2">POSSIBILITIES</h3>
            <p className="text-blue-200 text-sm">Unlimited learning pathways</p>
          </div>
          <div className="glass-card p-8 rounded-xl text-center neural-card">
            <div className="text-5xl mb-4 text-pink-400">★</div>
            <h3 className="text-xl font-bold text-white mb-2">NEURAL SPEED</h3>
            <p className="text-pink-200 text-sm">Accelerated skill acquisition</p>
          </div>
          <div className="glass-card p-8 rounded-xl text-center neural-card">
            <div className="text-5xl mb-4 text-purple-400">⚡</div>
            <h3 className="text-xl font-bold text-white mb-2">AI POWERED</h3>
            <p className="text-purple-200 text-sm">Intelligent learning systems</p>
          </div>
        </div>
      </div>
      
      {/* Instruction text */}
      <div className="absolute bottom-6 left-0 right-0 text-center text-white text-sm glass-effect py-3 z-10 max-w-md mx-auto rounded-full">
        Hover or touch to interact with the particles
      </div>
    </div>
  );
};

export default ParticleAnimation; 