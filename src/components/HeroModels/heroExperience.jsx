import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { useMediaQuery } from 'react-responsive';
import { Room } from './Room';
import HeroLights from './HeroLights';
import { Float } from '@react-three/drei';

const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: `(max-width:1024px)`});
    const isMobile = useMediaQuery({ query: `(max-width:768px)`});

  return (
     <Canvas camera={{position: [0,0,15], fov : 45}} >
       <HeroLights />
        <OrbitControls 
        enablePan={false}
        enableZoom={false}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI/5}
        maxPolarAngle={Math.PI/2}
        />
        <Float speed={3} rotationIntensity={0.5} floatIntensity={0.9} rotation={[0,0,0]}>
       <group scale={isMobile ? 0.7: 1} position={[0,-4,0]}
       rotation={[0,-Math.PI/4,0]}>
       <Room />
       </group>
       </Float>

     </Canvas>
  )
}

export default HeroExperience
