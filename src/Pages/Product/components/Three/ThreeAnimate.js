import React, { useRef, useEffect, useContext } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import {
  OrbitControls,
  Sky,
  useGLTF,
  useAnimations,
  Cloud,
} from '@react-three/drei';
import { Physics, usePlane, useBox } from '@react-three/cannon';
import SwitchButtonContext from '../../../../contexts/SwitchButtonContext';
import AnimateControl from './Components/AnimateControl.js';



// // XXX 使用OrbitControls後 camera作用問題 (x,y & polar angle,azimuthal angle )
// // function Camera(props) {
// //   const ref = useRef();
// //   const { setDefaultCamera } = useThree();
// //   useEffect(() => setDefaultCamera(ref.current), []);
// //   useFrame(() => ref.current.updateMatrixWorld());
// //   return <perspectiveCamera ref={ref} {...props} />;
// // }

function ThreeAnimate() {
  // const orbitControlsRef = useRef(null);
  // useFrame((state) => {
  //   if (orbitControlsRef.current) {
  //     // 滑鼠位置 (x,y)
  //     const { x, y } = state.mouse;
  //     orbitControlsRef.current.setAzimuthalAngle(x * 20);
  //     orbitControlsRef.current.update();
  //   }
  // });

  return (
    <Canvas
      id="three_canvas_container"
      camera={{
        position: [40, 160, 200],
        fov: 55,
        // far: mode === 'dog' ? 1000 : 200,
      }}
      dpr={[1, 2]}
      shadows
    >
      <AnimateControl />
      {/* control camera (polar angle & azimuthal angle ) */}
      {/* <OrbitControls
        ref={orbitControlsRef}
        // 不做滾動縮放
        enableZoom={false}
        // maxZoom={}
        // minZoom={}
        // target={[0.6, 0.4, 0]}
        // makeDefault
      />
      <Sky
        distance={450000}
        sunPosition={[0, 1, 0]}
        inclination={0}
        azimuth={0.25}
      /> */}
      {/* <Cloud
        opacity={0.5}
        speed={0.4} // Rotation speed
        width={10} // Width of the full cloud
        depth={1.5} // Z-dir depth
        segments={20} // Number of particles
        position={[0,100,30]}
      /> */}
      {/* <ambientLight intensity={0.8} />
      <spotLight position={[150, 130, 190]} angle={0.5} />
      <Physics>
        <Model2 />
        <Model />
        <Ball /> */}
      {/* <Box /> */}

      {/* <Model2 /> */}
      {/* <Plane /> */}
      {/* </Physics> */}
    </Canvas>
  );
}

export default ThreeAnimate;
