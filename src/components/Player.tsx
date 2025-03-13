import * as THREE from "three";
import { Bounds } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { useThree } from "@react-three/fiber";
import usePlayerAnimation from "../hooks/usePlayerAnimation";
import { DirectionalLight } from "./DirectionalLight";
import { setRef } from "../stores/player";

export function Player() {
   const player = useRef<THREE.Group>(null);
   const lightRef = useRef<THREE.DirectionalLight>(null);
   const camera = useThree((state) => state.camera);

   usePlayerAnimation(player);

   useEffect(() => {
      if (!player.current) return;
      if (!lightRef.current) return;

      //Attach the camera to the player
      player.current.add(camera);
      lightRef.current.target = player.current;

      //Set the player reference in the state
      setRef(player.current);
   });


   return (
      <Bounds fit clip margin={6}>
         <group ref={player}>
            <group>
               <mesh position={[0, 0, 10]} castShadow receiveShadow>
                  <boxGeometry args={[15, 15, 20]} />
                  <meshLambertMaterial color={0xffffff} flatShading />
               </mesh>

               <mesh position={[0, 10, 11]} rotation={[-Math.PI / 2, 0, 0]} castShadow>
                  <tetrahedronGeometry args={[3]} />
                  <meshStandardMaterial color="yellow" flatShading/>
               </mesh>


               <mesh position={[3, 7.5, 15]} castShadow receiveShadow>
                  <boxGeometry args={[2,1,1]} />
                  <meshLambertMaterial color={0x333333} flatShading />
               </mesh>

               <mesh position={[-3, 7.5, 15]} castShadow receiveShadow>
                  <boxGeometry args={[2,1,1]} />
                  <meshLambertMaterial color={0x333333} flatShading />
               </mesh>


               <mesh position={[7.5, 0, 10]} castShadow >
                  <boxGeometry args={[4,10,8]} />
                  <meshLambertMaterial color={0xffffff} flatShading />
               </mesh>
               <mesh position={[-7.5, 0, 10]} castShadow >
                  <boxGeometry args={[4,10,8]} />
                  <meshLambertMaterial color={0xffffff} flatShading />
               </mesh>



               <mesh position={[0, -10, 11]} castShadow receiveShadow>
                  <sphereGeometry args={[5, 5, 5]} />
                  <meshLambertMaterial color={0xffffff} flatShading />
               </mesh>

               <mesh position={[0, 0, 21]} castShadow receiveShadow>
                  <boxGeometry args={[2, 4, 2]} />
                  <meshLambertMaterial color={0xf0619a} flatShading />
               </mesh>

               <mesh position={[0, 0, 21]} castShadow receiveShadow>
                  <boxGeometry args={[2,2, 8]} />
                  <meshLambertMaterial color={0xf0619a} flatShading />
               </mesh>
            </group>
            <DirectionalLight ref={lightRef} />
         </group>
      </Bounds>
   );
}