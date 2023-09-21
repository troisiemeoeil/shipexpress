'use client'
import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three"
import { useFrame, useThree } from "@react-three/fiber";
export default function Chair(props) {
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
  const { nodes, materials } = useGLTF("/chair.glb");
let model = scene.children[6]
// model.userData.draggable = true
// model.userData.name = "Chair"

const moveMouse = new THREE.Vector2();
const draggable = new THREE.Vector3();


function intersection(moveMouse) {
  raycaster.setFromCamera(camera);
  return raycaster.intersectObjects(scene.children);
}
window.addEventListener('click', (event)=> {
  if (draggable != null) {
    console.log(`dropping ${JSON.stringify(draggable)}`);
    return;
  }
  mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
     const found = intersection(clickMouse);
    raycaster.setFromCamera( mouse, camera );
   
      if (found.length > 0 && found[0].object.parent.parent.draggable) {
          let draggable = found[0].object.parent.parent
          console.log(draggable);
          
      }

})

  // window.addEventListener('mousemove', (event)=> {
  //   if (draggable != null) {
  //     console.log(`dropping ${JSON.stringify(draggable)}`);
  //     return;
  //   }
  //   mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
  //   mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
  //      const found = intersection(clickMouse);
  //     raycaster.setFromCamera( mouse, camera );
     
  //       if (found.length > 0 && found[0].object.parent.parent.draggable) {
  //           let draggable = found[0].object.parent.parent
  //           console.log(draggable.name);
  //       }
  
  // })







  return (
    <group {...props} dispose={null} name="Krissi" draggable>
      <group scale={0.02}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obod_sidenie__0.geometry}
          material={materials["Scene_-_Root"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Nogi__0.geometry}
          material={materials["Scene_-_Root"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Spinka__0.geometry}
          material={materials["Scene_-_Root"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Perekladina__0.geometry}
          material={materials["Scene_-_Root"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Fixator__0.geometry}
          material={materials["Scene_-_Root"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obruch__0.geometry}
          material={materials["Scene_-_Root"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Perekladini__0.geometry}
          material={materials["Scene_-_Root"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Setka__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[0, -0.2, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bolti__0.geometry}
          material={materials["Scene_-_Root"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/chair.glb");
