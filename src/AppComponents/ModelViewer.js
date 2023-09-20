import React, { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import  { Suspense } from 'react';
import {  OrbitControls } from '@react-three/drei'
import { useGLTF } from '@react-three/drei'
import { proxy, useSnapshot } from 'valtio'
import { HexColorPicker } from 'react-colorful';
// import LoadingImage from '../Assets/loadingimage.jpg'
const state = proxy({
  current: null, 
  items: {
      HydraDecals : "#ffffff",
      HydraSteaks : "#ffffff",
      HydraHull : "#ffffff",
      HydraHullDark : "#ffffff",
      HydraAntiCollisionLight1 : "#ffffff",
      HydraAntiCollisionLight2 : "#ffffff",
      HydraRockets : "#ffffff",
      HydraInterior : "#ffffff",
      HydraInteriorRed : "#ffffff",
      HydraControlPanel : "#ffffff",
      HydraWheels : "#FF0000",
      HydraCanopyGlass : "#ffffff",
      HydraMechanics : "#ffffff",
      HydraJetBlades : "#ffffff",
  }
})


function Model(props) {
  const group = useRef()
  const snap = useSnapshot(state)
  const [hovered, setHovered] = useState(null)
const { nodes, materials } = useGLTF('/jetmodel2.glb')
return (
  <group ref={group} {...props} dispose={null}
  onPointerOver={(e) => {
      e.stopPropagation()
      setHovered(e.object.material.name)
  }}
  onPointerOut={(e) => {
     e.intersections.length === 0 && setHovered(null)
  }}

  onPointerDown={(e) => {
      e.stopPropagation()
      state.current = e.object.material.name
  }}

  onPointerMissed={(e)=> {
      state.current = null
  }}
  >
    <mesh material-color={snap.items.HydraDecals} geometry={nodes.HydraDecals.geometry} material={materials.HydraDecals} />
    <mesh material-color={snap.items.HydraSteaks} geometry={nodes.HydraSteaks.geometry} material={materials.HydraSteaks} />
    <mesh material-color={snap.items.HydraAntiCollisionLight1} geometry={nodes.HydraAntiCollisionLights001_2.geometry} material={materials.HydraAntiCollisionLight1} />
    <mesh material-color={snap.items.HydraAntiCollisionLight2} geometry={nodes.HydraAntiCollisionLights001_3.geometry} material={materials.HydraAntiCollisionLight2} />
    <mesh material-color={snap.items.HydraRockets} geometry={nodes.Hydra001_2.geometry} material={materials.HydraRockets} />
    <mesh material-color={snap.items.HydraInterior} geometry={nodes.Hydra001_3.geometry} material={materials.HydraInterior} />
    <mesh material-color={snap.items.HydraInteriorRed} geometry={nodes.Hydra001_4.geometry} material={materials.HydraInteriorRed} />
    <mesh material-color={snap.items.HydraControlPanel} geometry={nodes.Hydra001_5.geometry} material={materials.HydraControlPanel} />
    <mesh material-color={snap.items.HydraWheels} geometry={nodes.Hydra001_6.geometry} material={materials.HydraWheels} scale={[8,5,1]}  />
    <mesh material-color={snap.items.HydraCanopyGlass} geometry={nodes.Hydra001_7.geometry} material={materials.HydraCanopyGlass} />
    <mesh material-color={snap.items.HydraMechanics} geometry={nodes.Hydra001_8.geometry} material={materials.HydraMechanics} />
    <mesh material-color={snap.items.HydraJetBlades} geometry={nodes.Hydra001_9.geometry} material={materials.HydraJetBlades} />
  </group>
)
}

function Picker() {
  const snap = useSnapshot(state)
  return (
    <div className={`${snap.current ? "block" : "none"}`}>
      <HexColorPicker className={`${snap.current ? "block" : "none"}`} color={snap.items[snap.current]} onChange={(color) => (state.items[snap.current] = color)} />
      <div className='font-bold text-4xl'>{snap.current}</div>
    </div>
  )
}


function ModelViewer() {  

  // const image =   <img src={LoadingImage} alt="Loading" width="100%" height="100%" />
  return (
   
    <div>
     <Picker/>

      <div className="container">
    
    <Canvas  >
    <OrbitControls
     makeDefault 
    //  minAzimuthAngle={-Math.PI / 4}
    //  maxAzimuthAngle={Math.PI / 4}
    //  minPolarAngle={Math.PI / 6}
    //  maxPolarAngle={Math.PI - Math.PI / 6}
     rotateSpeed={0.1}
     />
    <ambientLight intensity={0.1} />
    <directionalLight color="white" position={[2, 4, 5]} />
    <directionalLight color="white" position={[-1, -1, -5]} />

    <Suspense fallback={"Please wait!"}>
      <Model  />
    </Suspense>
</Canvas>
    </div>
    </div>
  )
}

export default ModelViewer