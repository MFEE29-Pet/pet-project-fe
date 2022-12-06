import React, { useRef, useEffect } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls, Sky } from '@react-three/drei';
import { Physics, usePlane, useBox } from '@react-three/cannon';

function Box() {
  const [ref, api] = useBox(() => ({ mess: 1, position: [0, 2, 0] }));
  return (
    <mesh
      onClick={() => {
        api.velocity.set(0, 2, 0);
      }}
      ref={ref}
      position={[0, 2, 0]}
    >
      <boxBufferGeometry attach="geometry" 
      args={[2, 2, 2]} 
      />
      <meshLambertMaterial attach="material" color="#f8b62b" />
    </mesh>
  );
}
function Plane() {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }));
  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
      <boxBufferGeometry attach="geometry" args={[100, 100]} />
      <meshLambertMaterial attach="material" color="lightgreen" />
    </mesh>
  );
}

// function Camera(props) {
//   const ref = useRef();
//   const { setDefaultCamera } = useThree();
//   useEffect(() => setDefaultCamera(ref.current), []);
//   useFrame(() => ref.current.updateMatrixWorld());
//   return <perspectiveCamera ref={ref} {...props} />;
// }



function ThreeAnimate() {
  return (
    <Canvas camera={{ position: [-25, 20, 20], fov: 50 }} dpr={[1, 2]}>
      {/* <Camera position={[0, -100, 10]} /> */}
      <OrbitControls 
      // target={[0.6, 0.4, 0]} 
      // makeDefault 
      />
      <Sky
        distance={4500}
        sunPosition={[0, 1, 0]}
        inclination={0}
        azimuth={0.25}
      />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.2} />
      <Physics>
        <Box />
        <Plane />
      </Physics>
    </Canvas>
  );
}

export default ThreeAnimate;
