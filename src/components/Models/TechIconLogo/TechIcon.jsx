import { Environment, Float, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useEffect } from 'react'
import * as THREE from 'three'

const TechIcon = ({model}) => {
    const scene = useGLTF(model.modelPath);
    // useEffect(()=>{
    //     if(model.name === 'Interactive Developer'){
    //          scene.scene.traverse((Child)=>{
    //             if(Child.isMesh && Child.name === "object_5"){
    //                 Child.material = new THREE.MeshStandardMaterial({color:'white'})
    //             }
    //          })
    //     }

    // },[scene])
    
    return (
        <Canvas>
            <ambientLight intensity={0.3} />
            <directionalLight  position={[5,5,5]} intensity={1}/>
            <Environment preset='city' />
            <OrbitControls enableZoom={false} />
             
            <Float speed={5.5} rotationIntensity={1} floatIntensity={0.9}>
                <group rotation={model.rotation} scale={model.scale}>
                <primitive object={scene.scene}   />
                </group>
            </Float>
        </Canvas>
    )
}

export default TechIcon
