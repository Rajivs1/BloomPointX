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
    x: Math.random() * 0.05,
    y: Math.random() * 0.05,
    z: Math.random() * 0.05
  });
  
  useFrame((state) => {
    if (meshRef.current) {
      // Fall downward - increased speed
      meshRef.current.position.y -= speed * 1.5;
      
      // Add slight horizontal drift - increased movement
      meshRef.current.position.x += Math.sin(state.clock.getElapsedTime() * 0.5 + initialPosition[0]) * 0.02;
      
      // Rotate
      meshRef.current.rotation.x += rotationSpeed.x;
      meshRef.current.rotation.y += rotationSpeed.y;
      meshRef.current.rotation.z += rotationSpeed.z;
      
      // Reset position when it falls out of view
      if (meshRef.current.position.y < -15) {
        meshRef.current.position.y = initialPosition[1];
        meshRef.current.position.x = initialPosition[0] + (Math.random() - 0.5) * 5; // More horizontal variation
      }
      
      // Enhanced pulse glow effect - even brighter for mobile visibility
      meshRef.current.material.emissiveIntensity = 6 + Math.sin(state.clock.getElapsedTime() * 2) * 2;
    }
  });

  return (
    <mesh ref={meshRef} position={initialPosition}>
      <icosahedronGeometry args={[size, 1]} />
      <meshStandardMaterial 
        color={color} 
        emissive={color}
        emissiveIntensity={7}  // Increased emission for better visibility
        transparent
        opacity={1}
        metalness={0.7}
        roughness={0.2}
      />
    </mesh>
  );
};

// Light beam effect
const LightBeam = ({ position, color, direction }) => {
  const meshRef = useRef();
  const [initialPosition] = useState(position);
  const [scale] = useState(Math.random() * 1.2 + 0.8); // Larger scale
  
  useFrame((state) => {
    if (meshRef.current) {
      // Move along direction - increased movement
      meshRef.current.position.x = initialPosition[0] + Math.sin(state.clock.getElapsedTime() * direction[0]) * 4;
      meshRef.current.position.y = initialPosition[1] + Math.cos(state.clock.getElapsedTime() * direction[1]) * 4;
      meshRef.current.position.z = initialPosition[2];
      
      // Rotate to face movement direction
      meshRef.current.lookAt(
        meshRef.current.position.x + direction[0],
        meshRef.current.position.y + direction[1],
        meshRef.current.position.z + direction[2]
      );
      
      // Enhanced flickering effect
      const flicker = 0.8 + Math.sin(state.clock.getElapsedTime() * 15) * 0.4;
      meshRef.current.material.opacity = flicker;
      meshRef.current.material.emissiveIntensity = flicker * 6; // Increased brightness
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={[scale, scale * 3, scale * 0.2]}>
      <boxGeometry args={[0.15, 1.5, 0.15]} /> {/* Larger geometry */}
      <meshStandardMaterial 
        color={color} 
        emissive={color}
        emissiveIntensity={5}
        transparent
        opacity={0.95}
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
      // Pulsating light - enhanced
      lightRef.current.intensity = intensity * (0.8 + Math.sin(state.clock.getElapsedTime() * 2) * 0.5);
      
      // Slowly moving position - increased movement
      lightRef.current.position.x = position[0] + Math.sin(state.clock.getElapsedTime() * 0.5) * 3;
      lightRef.current.position.y = position[1] + Math.cos(state.clock.getElapsedTime() * 0.5) * 3;
    }
  });

  return <pointLight ref={lightRef} position={position} color={color} intensity={intensity} distance={25} decay={2} />;
};

// Main particle system component
const ParticleSystem = ({ count = 250 }) => { // Increased particle count
  const [particles, setParticles] = useState([]);
  const [lightBeams, setLightBeams] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const [lights, setLights] = useState([]);
  const [hovered, setHovered] = useState(false);
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
  
  useEffect(() => {
    // Generate keywords
    const techKeywords = [
      { text: "AI", position: [-3, 2, 0], color: "#ff5b79", size: 0.4 }, // Increased size
      { text: "Machine Learning", position: [3, 1.5, 0], color: "#4fc3f7", size: 0.35 },
      { text: "Data Science", position: [-2, -1.5, 0], color: "#ffca28", size: 0.35 },
      { text: "Deep Learning", position: [0, 2.5, 0], color: "#7e57c2", size: 0.35 },
      { text: "Python", position: [-3.5, 0, 0], color: "#26c6da", size: 0.35 },
      { text: "TensorFlow", position: [3.5, -2, 0], color: "#ff7043", size: 0.35 },
      { text: "Innovation", position: [-2.5, 3, 0], color: "#66bb6a", size: 0.35 }
    ];
    setKeywords(techKeywords);
    
    // Generate falling particles
    const tempParticles = [];
    const colors = ['#ff5b79', '#4fc3f7', '#8bc34a', '#ffca28', '#7e57c2', '#26c6da', '#ff7043'];
    
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 25; // Wider spread
      const y = Math.random() * 40 - 10; // More distributed vertically, weighted towards top
      const z = (Math.random() - 0.5) * 15; // Deeper z-space
      
      const color = colors[Math.floor(Math.random() * colors.length)];
      // Even larger particles for mobile
      const size = isMobile ? 
        Math.random() * 0.7 + 0.5 : // Mobile: 0.5 to 1.2
        Math.random() * 0.5 + 0.3;  // Desktop: 0.3 to 0.8
      
      // Faster speeds for more movement
      const speed = isMobile ?
        Math.random() * 0.1 + 0.08 : // Mobile: faster
        Math.random() * 0.08 + 0.05; // Desktop
      
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
    for (let i = 0; i < 50; i++) { // More light beams
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 15;
      const z = (Math.random() - 0.5) * 5 - 2;
      
      const direction = [
        Math.random() * 1.0 + 0.5, // Faster movement
        Math.random() * 1.0 + 0.5,
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
    
    for (let i = 0; i < 15; i++) { // More lights
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 15;
      const z = (Math.random() - 0.5) * 12 - 5;
      
      const color = lightColors[Math.floor(Math.random() * lightColors.length)];
      const intensity = isMobile ? 
        Math.random() * 5 + 5 :    // Mobile: brighter
        Math.random() * 4 + 3;     // Desktop
      
      tempLights.push({
        id: `light-${i}`,
        position: [x, y, z],
        color,
        intensity
      });
    }
    setLights(tempLights);
    
  }, [count, isMobile]);
  
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
          speed={hovered ? particle.speed * 2 : particle.speed} // More dramatic speed change on hover
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
          intensity={hovered ? light.intensity * 1.8 : light.intensity} // More dramatic intensity change
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
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial size

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate responsive values based on screen size
  const particleCount = windowSize.width < 480 ? 80 : windowSize.width < 768 ? 150 : 250;
  const cameraPosition = windowSize.width < 480 ? [0, 0, 25] : windowSize.width < 768 ? [0, 0, 20] : [0, 0, 15];
  const fov = windowSize.width < 480 ? 90 : windowSize.width < 768 ? 80 : 75;
  const isMobile = windowSize.width < 1024; // Consider both mobile and tablet as "mobile"

  return (
    <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[800px] relative particle-animation-section">
      {/* Background rotating circles */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-blue-500 rounded-full rotate-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-purple-500 rounded-full rotate-slow" style={{animationDirection: 'reverse', animationDuration: '100s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-green-500 rounded-full rotate-slow" style={{animationDuration: '80s'}}></div>
      </div>
      
      <Canvas shadows camera={{ position: cameraPosition, fov: fov }}>
        <color attach="background" args={['#000015']} />
        <ambientLight intensity={3.5} />
        <pointLight position={[10, 10, 10]} intensity={6} />
        <pointLight position={[-10, -10, -10]} intensity={5} color="#4fc3f7" />
        <spotLight position={[0, 5, 15]} angle={0.9} penumbra={1} intensity={7} castShadow />
        <ParticleSystem count={particleCount} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
      </Canvas>
      
      {/* Overlay text - desktop (fixed position) */}
      {!isMobile && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none z-10 px-2 sm:px-4">
          <div className="neural-text max-w-4xl w-full px-2 sm:px-4 md:px-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 text-white bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-float pulse-glow-strong">
              Tech Excellence Hub
            </h2>
            <div className="flex flex-wrap justify-center gap-1 sm:gap-2 md:gap-3 lg:gap-6 mb-3 sm:mb-4 md:mb-6 lg:mb-8">
              <span className="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-bold glass-tag py-1 px-2 sm:py-1 sm:px-3 md:py-2 md:px-4">Advanced</span>
              <span className="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-bold glass-tag py-1 px-2 sm:py-1 sm:px-3 md:py-2 md:px-4">Digital</span>
              <span className="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-bold glass-tag py-1 px-2 sm:py-1 sm:px-3 md:py-2 md:px-4">Transform</span>
              <span className="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-bold glass-tag py-1 px-2 sm:py-1 sm:px-3 md:py-2 md:px-4">Reality</span>
              <span className="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-bold glass-tag py-1 px-2 sm:py-1 sm:px-3 md:py-2 md:px-4">Evolution</span>
            </div>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white mb-4 sm:mb-6 md:mb-8 lg:mb-12 max-w-3xl mx-auto px-2 sm:px-4 font-light leading-relaxed">
              BloomPointX - Where Technology Meets Your Career Growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-8 max-w-5xl w-full px-2">
            <div className="glass-card p-2 sm:p-3 md:p-5 lg:p-8 rounded-xl text-center neural-card">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-1 sm:mb-2 md:mb-4 text-blue-400">∞</div>
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-0.5 sm:mb-1 md:mb-2">POSSIBILITIES</h3>
              <p className="text-xs sm:text-sm text-blue-200">Unlimited learning pathways</p>
            </div>
            <div className="glass-card p-2 sm:p-3 md:p-5 lg:p-8 rounded-xl text-center neural-card">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-1 sm:mb-2 md:mb-4 text-pink-400">★</div>
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-0.5 sm:mb-1 md:mb-2">NEURAL SPEED</h3>
              <p className="text-xs sm:text-sm text-pink-200">Accelerated skill acquisition</p>
            </div>
            <div className="glass-card p-2 sm:p-3 md:p-5 lg:p-8 rounded-xl text-center neural-card">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-1 sm:mb-2 md:mb-4 text-purple-400">⚡</div>
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-0.5 sm:mb-1 md:mb-2">AI POWERED</h3>
              <p className="text-xs sm:text-sm text-purple-200">Intelligent learning systems</p>
            </div>
          </div>
        </div>
      )}

      {/* Overlay text - mobile and tablet (scrollable) */}
      {isMobile && (
        <div className="absolute inset-0 overflow-y-auto scrollbar-hide z-10 px-2 sm:px-4">
          <div className="min-h-[120%] pt-4 flex flex-col items-center justify-start text-center pointer-events-none">
            <div className="neural-text max-w-4xl w-full px-2 sm:px-4 md:px-6 mt-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 text-white bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-float pulse-glow-strong">
                Tech Excellence Hub
              </h2>
              <div className="flex flex-wrap justify-center gap-1 sm:gap-2 md:gap-3 mb-3 sm:mb-4 md:mb-6">
                <span className="text-xs sm:text-sm md:text-lg font-bold glass-tag py-1 px-2 sm:py-1 sm:px-3 md:py-2 md:px-4">Advanced</span>
                <span className="text-xs sm:text-sm md:text-lg font-bold glass-tag py-1 px-2 sm:py-1 sm:px-3 md:py-2 md:px-4">Digital</span>
                <span className="text-xs sm:text-sm md:text-lg font-bold glass-tag py-1 px-2 sm:py-1 sm:px-3 md:py-2 md:px-4">Transform</span>
                <span className="text-xs sm:text-sm md:text-lg font-bold glass-tag py-1 px-2 sm:py-1 sm:px-3 md:py-2 md:px-4">Reality</span>
                <span className="text-xs sm:text-sm md:text-lg font-bold glass-tag py-1 px-2 sm:py-1 sm:px-3 md:py-2 md:px-4">Evolution</span>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-white mb-4 sm:mb-6 md:mb-8 max-w-3xl mx-auto px-2 sm:px-4 font-light leading-relaxed">
                BloomPointX - Where Technology Meets Your Career Growth
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4 max-w-5xl w-full px-2 mb-8">
              <div className="glass-card p-2 sm:p-3 md:p-5 rounded-xl text-center neural-card">
                <div className="text-2xl sm:text-3xl md:text-4xl mb-1 sm:mb-2 md:mb-4 text-blue-400">∞</div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-0.5 sm:mb-1 md:mb-2">POSSIBILITIES</h3>
                <p className="text-xs sm:text-sm text-blue-200">Unlimited learning pathways</p>
              </div>
              <div className="glass-card p-2 sm:p-3 md:p-5 rounded-xl text-center neural-card">
                <div className="text-2xl sm:text-3xl md:text-4xl mb-1 sm:mb-2 md:mb-4 text-pink-400">★</div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-0.5 sm:mb-1 md:mb-2">NEURAL SPEED</h3>
                <p className="text-xs sm:text-sm text-pink-200">Accelerated skill acquisition</p>
              </div>
              <div className="glass-card p-2 sm:p-3 md:p-5 rounded-xl text-center neural-card sm:col-span-2">
                <div className="text-2xl sm:text-3xl md:text-4xl mb-1 sm:mb-2 md:mb-4 text-purple-400">⚡</div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-0.5 sm:mb-1 md:mb-2">AI POWERED</h3>
                <p className="text-xs sm:text-sm text-purple-200">Intelligent learning systems</p>
              </div>
            </div>
            
            {/* Instruction text - embedded in the scrollable area */}
            {/* <div className="text-center text-white text-xs sm:text-sm glass-effect py-1 sm:py-2 md:py-3 z-10 max-w-[200px] xs:max-w-xs sm:max-w-md mx-auto rounded-full mb-4">
              Scroll to explore & touch to interact
            </div> */}
          </div>
        </div>
      )}
      
      {/* Instruction text for desktop only */}
      {!isMobile && (
        <div className="absolute bottom-1 sm:bottom-2 md:bottom-4 lg:bottom-6 left-0 right-0 text-center text-white text-xs sm:text-sm glass-effect py-1 sm:py-2 md:py-3 z-10 max-w-[200px] xs:max-w-xs sm:max-w-md mx-auto rounded-full">
          {/* Hover or touch to interact with the particles */}
        </div>
      )}
    </div>
  );
};

export default ParticleAnimation; 