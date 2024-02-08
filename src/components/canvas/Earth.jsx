import React, { Suspense, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useAnimations } from "@react-three/drei"; 
import smol from "../../3d/smol.glb";
import CanvasLoader from "../Loader";

const Earth = () => {
  const ref = useRef(); 
  const { scene, animations } = useGLTF(smol); 
   
  const { actions } = useAnimations(animations, ref);

  console.log("actions", actions)

  useEffect( () => {
    // actions['HallucinationHuggy|A_HallucinationHuggy_Encounter'].play(); //poppy
    // actions['Take 01'].play(); //platform 
    // actions['Take 001'].play(); //tokyo  
    // actions['Scene'].play(); //stronghold  
    // actions['Take 001'].play(); //thinker  
    actions['Animation'].play(); //smol  
  }, [actions])

  // const earth = useGLTF(smol);

  return (
<mesh ref={ref} >
      <hemisphereLight intensity={0} groundColor='black' />
      
      <pointLight intensity={0} />
      <primitive
        object={scene}
        scale={ 1.5}
        position={ [0, -1.7, 0]}
        rotation={[0, -1, 0]}
      />
    </mesh>
    // <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;