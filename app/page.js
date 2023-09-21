"use client"
import { Canvas } from '@react-three/fiber'
import { Model } from './Experience/Model'
import { CameraControls } from '@react-three/drei'
import { Suspense } from 'react'
import Chair from './Experience/Chair'
export default function Home() {
  return (
    <div id="canvas-container" className='w-full h-[100vh]'>
    <Canvas>
  <ambientLight />

{/*       
  <directionalLight color="white" position={[0.0945744, -0.3731886, 0.1400696]} />
  <directionalLight color="white" position={[-1.0490162, -0.692127, 1.1489953]} />
  <directionalLight color="white" position={[0, 5, 2]} /> */}

         <directionalLight color="white" position={[-3.8818104, 1.5093265, -2.5961468]} />
         <directionalLight color="white" position={[-1.0490162, -0.692127, 1.1489953]} />
         <directionalLight color="white" position={[0.0945744, -0.3731886, 0.1400696]} />
         <directionalLight color="white" position={[-3.9577773, 1.4312836, -3.4889019]} />
         <directionalLight color="white" position={[-3.7805781, 2.4695997, -1.1319079]} />




    <CameraControls makeDefault />
    <Suspense fallback={null}>
        <Model />
          <Chair />
        </Suspense>
    </Canvas>
  </div>
  )
}
