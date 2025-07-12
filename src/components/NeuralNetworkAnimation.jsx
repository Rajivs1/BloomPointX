import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text3D, Center, Float, Text } from '@react-three/drei';
import * as THREE from 'three';

// Falling particle effect (larger particles on the left side)
const FallingParticle = ({ position, color, size }) => {
  const meshRef = useRef();
  const [speed] = useState(Math.random() * 0.05 + 0.02);
  const [rotation] = useState({
    x: Math.random() * 0.01,
    y: Math.random() * 0.01,
    z: Math.random() * 0.01
  });
  
  useFrame((state) => {
    if (meshRef.current) {
      // Move down
      meshRef.current.position.y -= speed;
      
      // Rotate slowly
      meshRef.current.rotation.x += rotation.x;
      meshRef.current.rotation.y += rotation.y;
      meshRef.current.rotation.z += rotation.z;
      
      // Reset position when it goes below the view
      if (meshRef.current.position.y < -5) {
        meshRef.current.position.y = 5;
        meshRef.current.position.x = position[0] + (Math.random() - 0.5) * 2;
      }
      
      // Pulse glow effect
      meshRef.current.material.emissiveIntensity = 1 + Math.sin(state.clock.getElapsedTime() * 2) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <icosahedronGeometry args={[size, 1]} />
      <meshStandardMaterial 
        color={color} 
        emissive={color}
        emissiveIntensity={1.5}
        transparent
        opacity={0.8}
        metalness={0.3}
        roughness={0.4}
      />
    </mesh>
  );
};

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
      meshRef.current.material.emissiveIntensity = flicker * 3;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={[scale, scale * 3, scale]} className="lightning-particle">
      <boxGeometry args={[0.05, 0.2, 0.05]} />
      <meshStandardMaterial 
        color={color} 
        emissive={color}
        emissiveIntensity={2}
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
            emissiveIntensity={1.2}
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
        meshRef.current.material.emissiveIntensity = 2 + Math.sin(state.clock.getElapsedTime() * 3) * 0.5;
      } else {
        // Subtle movement when not hovered
        meshRef.current.position.x = initialPosition[0] + Math.sin(state.clock.getElapsedTime()) * 0.05;
        meshRef.current.position.y = initialPosition[1] + Math.cos(state.clock.getElapsedTime()) * 0.05;
        meshRef.current.position.z = initialPosition[2];
        
        // Normal emissive intensity
        meshRef.current.material.emissiveIntensity = 1;
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
        emissiveIntensity={1}
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
      ref.current.material.opacity = 0.7 + Math.sin(state.clock.getElapsedTime() * 2) * 0.3;
      ref.current.material.linewidth = 2;
    } else if (ref.current) {
      ref.current.material.opacity = 0.5;
    }
  });

  return (
    <line ref={ref}>
      <bufferGeometry />
      <lineBasicMaterial color={color} transparent opacity={0.5} linewidth={1} />
    </line>
  );
};

// Neural Network component that contains particles and connections
const NeuralNetwork = ({ count = 60 }) => {
  const [particles, setParticles] = useState([]);
  const [connections, setConnections] = useState([]);
  const [lightningParticles, setLightningParticles] = useState([]);
  const [fallingParticles, setFallingParticles] = useState([]);
  const [hovered, setHovered] = useState(false);
  const [keywords, setKeywords] = useState([]);
  
  useEffect(() => {
    // Generate keywords
    const techKeywords = [
      { text: "AI", position: [-3, 2, 0], color: "#ff5b79", size: 0.3 },
      { text: "Machine Learning", position: [3, 1.5, 0], color: "#4fc3f7", size: 0.25 },
      { text: "Neural Networks", position: [2.5, -1, 0], color: "#8bc34a", size: 0.25 },
      { text: "Data Science", position: [-2, -1.5, 0], color: "#ffca28", size: 0.25 },
      { text: "Deep Learning", position: [0, 2.5, 0], color: "#7e57c2", size: 0.25 },
      { text: "Python", position: [-3.5, 0, 0], color: "#26c6da", size: 0.25 },
      { text: "TensorFlow", position: [3.5, -2, 0], color: "#ff7043", size: 0.25 },
      { text: "Innovation", position: [-2.5, 3, 0], color: "#66bb6a", size: 0.25 }
    ];
    setKeywords(techKeywords);
    
    // Generate falling particles on the left side
    const tempFallingParticles = [];
    for (let i = 0; i < 15; i++) {
      const x = -4 + (Math.random() - 0.5) * 3; // Left side of the screen
      const y = 5 - Math.random() * 10; // Random position from top to bottom
      const z = Math.random() * 2 - 1; // Random depth
      
      // Colors for falling particles
      let color;
      if (i % 4 === 0) {
        color = '#4fc3f7'; // blue
      } else if (i % 4 === 1) {
        color = '#7e57c2'; // purple
      } else if (i % 4 === 2) {
        color = '#ff5b79'; // pink
      } else {
        color = '#66bb6a'; // green
      }
      
      const size = Math.random() * 0.3 + 0.2; // Larger particles
      
      tempFallingParticles.push({
        id: `falling-${i}`,
        position: [x, y, z],
        color,
        size
      });
    }
    setFallingParticles(tempFallingParticles);
    
    // Generate random particles
    const tempParticles = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 8; // Wider spread
      const y = (Math.random() - 0.5) * 6;
      const z = (Math.random() - 0.5) * 4;
      
      // Assign colors based on position (for visual effect)
      let color;
      if (i % 5 === 0) {
        color = '#ff5b79'; // pink
      } else if (i % 5 === 1) {
        color = '#4fc3f7'; // blue
      } else if (i % 5 === 2) {
        color = '#8bc34a'; // green
      } else if (i % 5 === 3) {
        color = '#ffca28'; // yellow
      } else {
        color = '#7e57c2'; // purple
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
    for (let i = 0; i < 40; i++) {
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 8;
      const z = (Math.random() - 0.5) * 2 - 2; // Behind the network
      
      // Lightning colors
      let color;
      if (i % 4 === 0) {
        color = '#4fc3f7'; // blue
      } else if (i % 4 === 1) {
        color = '#7e57c2'; // purple
      } else if (i % 4 === 2) {
        color = '#26c6da'; // cyan
      } else {
        color = '#ff5b79'; // pink
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
      
      {/* Falling particles on left side */}
      {fallingParticles.map((particle) => (
        <FallingParticle
          key={particle.id}
          position={particle.position}
          color={particle.color}
          size={particle.size}
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
const NeuralNetworkAnimation = () => {
  return (
    <div className="w-full h-[800px] relative neural-network-section">
      {/* Background rotating circles */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-blue-500 rounded-full rotate-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-purple-500 rounded-full rotate-slow" style={{animationDirection: 'reverse', animationDuration: '100s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-green-500 rounded-full rotate-slow" style={{animationDuration: '80s'}}></div>
      </div>
      
      <Canvas shadows camera={{ position: [0, 0, 10], fov: 50 }}>
        <color attach="background" args={['#000015']} />
        <ambientLight intensity={1.2} />
        <pointLight position={[10, 10, 10]} intensity={2} />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#4fc3f7" />
        <spotLight position={[0, 5, 10]} angle={0.3} penumbra={1} intensity={2} castShadow />
        <NeuralNetwork />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
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
        Hover or touch to interact with the neural network
      </div>
    </div>
  );
};

export default NeuralNetworkAnimation; 