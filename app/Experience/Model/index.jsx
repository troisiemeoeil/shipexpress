"use client"
import React, { useEffect, useRef } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three"
import { useThree } from "@react-three/fiber";

export function Model(props) {
  const {
    gl, // WebGL renderer
    scene, // Default scene
    camera, // Default camera
    raycaster, // Default raycaster
    size, // Bounds of the view (which stretches 100% and auto-adjusts)
    viewport, // Bounds of the viewport in 3d units + factor (size/viewport)
    aspect, // Aspect ratio (size.width / size.height)
    mouse, // Current, centered, normalized 2D mouse coordinates
    clock, // THREE.Clock (useful for useFrame deltas)
    invalidate, // Invalidates a single frame (for <Canvas invalidateFrameloop />)
    intersect, // Calls onMouseMove handlers for objects underneath the cursor
    setDefaultCamera, // Sets the default camera
  } = useThree();
  const { nodes, materials } = useGLTF("/low_poly_isometric_room.glb");
  const obj4 = useRef()
  useEffect(()=> {
    let model = scene.children[6]
    model.userData.draggable = true
    model.userData.name = "Chair"
  window.addEventListener('click', (event)=> {
  
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
      
      raycaster.setFromCamera( mouse, camera );
      const found =  raycaster.intersectObjects(scene.children);
      // found[0].object.parent.userData.draggable = true
      // found[0].object.parent.userData.name = "korsi"
        if (found.length > 0 && found[0].object.parent.parent.draggable) {
            let draggable = found[0].object.parent.parent
            console.log(draggable.name);
        }
  
  })
  }, [])
  return (
    <group {...props} dispose={null} ref={obj4} name="Room" draggable>
      <group position={[0.0945744, -0.3731886, 0.1400696]} scale={4.8192067}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.pared}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.suelo}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.afuera}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.puerta}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.negro}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/low_poly_isometric_room.glb");