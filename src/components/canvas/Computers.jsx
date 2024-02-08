import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, act } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useAnimations } from "@react-three/drei";
import poppy from "../../3d/poppy.glb";
import tokyo from "../../3d/tokyo.glb"; 
import CanvasLoader from "../Loader";
import * as THREE from 'three';

const Computers = ({ isMobile }) => {
  const ref = useRef();
  // const computer = useGLTF("./desktop_pc/scene.gltf");
  const { scene, animations } = useGLTF(tokyo);
  const globalBrightnessMultiplier = 1.0; // You can adjust this value
 
  const { actions } = useAnimations(animations, ref);

  const indoor = new THREE.PointLight(0xfa8202, 3*globalBrightnessMultiplier, 100);
  indoor.position.set(-150, -150, 122);

  const lamp = new THREE.PointLight(0xfa8202, 1*globalBrightnessMultiplier, 100);
  lamp.position.set(-20, -110, 180);

  const banner1887 = new THREE.PointLight(0xfa8202, 3*globalBrightnessMultiplier, 100);
  banner1887.position.set(-150, 40, 180);

  const stand = new THREE.PointLight(0xfa8202, 1*globalBrightnessMultiplier, 100);
  stand.position.set(55, -130, 200);

  const neon = new THREE.PointLight(0xfc0000, 8*globalBrightnessMultiplier, 100);
  neon.position.set(-30, -30, 0);

  const neon2 = new THREE.PointLight(0xfa8202, 5*globalBrightnessMultiplier, 100);
  neon2.position.set(130, -30, 0);

  const neon3 = new THREE.PointLight(0xfa8202, 2*globalBrightnessMultiplier, 100);
  neon3.position.set(170, -140, -120);

  const salon = new THREE.PointLight(0xfa8202, 2*globalBrightnessMultiplier, 100);
  salon.position.set(110, -100, 130);

  const tent = new THREE.PointLight(0xfa8202, 2*globalBrightnessMultiplier, 100);
  tent.position.set(-160, -140, -120);

  const dog = new THREE.PointLight(0xfa8202, 12*globalBrightnessMultiplier, 100);
  dog.position.set(-170, 50, -140);

  const pachinko = new THREE.PointLight(0xfa8202, 6*globalBrightnessMultiplier, 100);
  pachinko.position.set(-230, -80, 0);

  const pa = new THREE.PointLight(0xfa8202, 6*globalBrightnessMultiplier, 100);
  pa.position.set(-228, -150, 50);

  const melon = new THREE.PointLight(0xfa8202, 4*globalBrightnessMultiplier, 100);
  melon.position.set(-30, 150, -190);
  
  const addObjectsToScene = (scene) => {
    // Assuming stand, indoor, banner1887, lamp, neon, neon2, neon3, salon, tent, dog, pa, melon are defined elsewhere
    scene.add(stand);
    scene.add(indoor);
    scene.add(banner1887);
    scene.add(lamp);
    scene.add(neon);
    scene.add(neon2);
    scene.add(neon3);
    scene.add(salon);
    scene.add(tent);
    scene.add(dog);
    scene.add(pa);
    scene.add(melon);
  };  
  addObjectsToScene(scene);


  useEffect(() => {
    // actions['HallucinationHuggy|A_HallucinationHuggy_Encounter'].play(); //poppy
    // actions['Take 01'].play(); //platform 
    actions['Take 001'].play(); //tokyo  
    // actions['Scene'].play(); //stronghold  
    // actions['Take 001'].play(); //thinker  
    // actions['Animation'].play(); //smol  
  }, [actions])
  
  // tokyo
  return (
    <mesh ref={ref}>
      {/* <hemisphereLight intensity={0}  groundColor='black' /> */}
      
      <primitive
        object={scene}
        scale={isMobile ? 0.01 : 0.0135}
        position={isMobile ? [0, -1, -2] : [0, -0.6, -2.5]}
        rotation={[0, 0.7, 0]}
      />
    </mesh>
  );

};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []); 

  return ( 
    <Canvas
      // frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}

    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2 }
        // rotateSpeed={100} 
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas> 
  );
};

export default ComputersCanvas;


  // poppy 
  // return (
  //   <mesh ref ={ref}>
  //     <hemisphereLight intensity={3} groundColor='black' />
  //     <spotLight
  //       position={[-20, 50, 10]}
  //       angle={0.12}
  //       penumbra={1}
  //       intensity={1}
  //       castShadow
  //       shadow-mapSize={1024}
  //     />
  //     <pointLight intensity={2} />
  //     <primitive
  //       object={scene}
  //       scale={isMobile ? 0.15 : 45.25}
  //       position={isMobile ? [0, -3, -2.2] : [0, -8, -0.5]}
  //       rotation={[0, 1.33, 0]}
  //     />
  //   </mesh>
  // );

  // Desktop PC
  // return (
  //   <mesh>
  //     <hemisphereLight intensity={3} groundColor='black' />
  //     <spotLight
  //       position={[-20, 50, 10]}
  //       angle={0.12}
  //       penumbra={1}
  //       intensity={1}
  //       castShadow
  //       shadow-mapSize={1024}
  //     />
  //     <pointLight intensity={2} />
  //     <primitive
  //       object={computer.scene}
  //       scale={isMobile ? 0.7 : 0.75}
  //       position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
  //       rotation={[-0.01, -0.2, -0.1]}
  //     />
  //   </mesh>
  // );
// platform 
  // return (
  //   <mesh ref ={ref}>
  //     <hemisphereLight intensity={3} groundColor='black' />
  //     <spotLight
  //       position={[-20, 50, 10]}
  //       angle={0.12}
  //       penumbra={1}
  //       intensity={1}
  //       castShadow
  //       shadow-mapSize={1024}
  //     />
  //     <pointLight intensity={2} />
  //     <primitive
  //       object={scene}
  //       scale={isMobile ? 0.15 : 0.25}
  //       position={isMobile ? [0, -3, -2.2] : [0, -1.2, -0.7]}
  //       rotation={[0.55, 1, -0.5]}
  //     />
  //   </mesh>
  // );

  // smole
  // return (
  //   <mesh ref ={ref}>
  //     <hemisphereLight intensity={1} groundColor='black' />
  //     <spotLight
  //       position={[-20, 50, 10]}
  //       angle={0.12}
  //       penumbra={1}
  //       intensity={12}
  //       castShadow
  //       shadow-mapSize={1024}
  //     />
  //     <pointLight intensity={5} />
  //     <primitive
  //       object={scene}
  //       scale={isMobile ? 0.15 : 2.5}
  //       position={isMobile ? [0, -3, -2.2] : [0, -3.5, -2.5]}
  //       rotation={[0, 0.8, 0]}
  //     />
  //   </mesh>
  // );

  // shibahu
  // return (
  //   <mesh ref ={ref}>
  //     <hemisphereLight intensity={1} groundColor='black' />
  //     <spotLight
  //       position={[-20, 50, 10]}
  //       angle={0.12}
  //       penumbra={1}
  //       intensity={12}
  //       castShadow
  //       shadow-mapSize={1024}
  //     />
  //     <pointLight intensity={5} />
  //     <primitive
  //       object={scene}
  //       scale={isMobile ? 0.15 : 10.65}
  //       position={isMobile ? [0, -3, -2.2] : [4, -13, -1.5]}
  //       rotation={[0, 0.5, 0]}
  //     />
  //   </mesh>
  // );
