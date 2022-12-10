import { Physics, useBox, useSphere, usePlane } from '@react-three/cannon';
import { useGLTF } from '@react-three/drei';

import { useContext } from 'react';
import { useRef } from 'react';
import { useFrame, useThree } from 'react-three-fiber';
import SwitchButtonContext from '../../../../../contexts/SwitchButtonContext';

function Spin({ children }) {
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.z += 0.01;
  });
  return <group ref={ref}>{children}</group>;
}
function Ball({ args = [0.5, 32, 32], setScores, gameOver, setGameOver }) {
  const { viewport } = useThree();
  const [ref, api] = useSphere(() => ({ args, mass: 1 }));
  // Invisible plane, if hit it respawns the ball
  usePlane(() => ({
    position: [0, -viewport.height, 0],
    rotation: [-Math.PI / 2, 0, 0],
    onCollide: () => {
      // setGameOver(true);
      setScores(0);
      // console.log('1');
      api.position.set(0, 0, 0);
      api.velocity.set(0, 10, 0);
    },
  }));
  return (
    <mesh ref={ref}>
      <sphereGeometry args={args} />
      <meshStandardMaterial />
    </mesh>
  );
}

function Paddle({ args = [2, 0.5, 1] }) {
  const [ref, api] = useBox(() => ({ args }));
  const { nodes, materials } = useGLTF('/images/dog_harvest_moon.glb');
  // console.log({ nodes, materials });
  useFrame((state) => {
    api.position.set(
      (state.mouse.x * state.viewport.width) / 2.5,
      -state.viewport.height / 2.5,
      0
    );
    api.rotation.set(0, 0, (state.mouse.x * Math.PI) / 5);
  });
  return (
    <mesh
      ref={ref}
      material={materials.Dog_havest_moon_map}
      geometry={nodes.Object_9.geometry}
      // args={args}
      scale={0.6}
    >
      {/* <boxGeometry args={args} /> */}

      {/* <meshStandardMaterial
      // color="#fd594e"
      /> */}
    </mesh>
  );
}
function Paddle2({ args = [2, 0.5, 1] }) {
  const [ref, api] = useBox(() => ({ args }));
  const { nodes, materials } = useGLTF('/images/toon_cat_free.glb');
  // console.log({ nodes, materials });
  useFrame((state) => {
    api.position.set(
      (state.mouse.x * state.viewport.width) / 2.5,
      -state.viewport.height / 2.5,
      0
    );
    api.rotation.set(0, 0, (state.mouse.x * Math.PI) / 5);
  });
  return (
    <mesh
      ref={ref}
      material={materials.Mat_Gradient}
      geometry={nodes.Object_43.geometry}
      // args={args}
      scale={0.5}
    >
      {/* <boxGeometry args={args} /> */}

      {/* <meshStandardMaterial
      // color="#fd594e"
      /> */}
    </mesh>
  );
}

function Enemy({ args = [2, 0.5, 1], color, ...props }) {
  const [ref] = useBox(() => ({ args, ...props }));
  return (
    <mesh ref={ref}>
      <boxGeometry args={args} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
// function Cube(props) {
//   const [ref] = useBox(() => ({ mass: 1, ...props }));
//   return (
//     <mesh ref={ref}>
//       <boxGeometry />
//       <meshBasicMaterial color="hotpink" />
//     </mesh>
//   );
// }

function GameItem({ setScores, gameOver, setGameOver }) {
  const { mode } = useContext(SwitchButtonContext);

  return (
    <>
      {/* {console.log(scores)} */}
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 15]} />
      <Physics
        gravity={[0, -30, 0]}
        defaultContactMaterial={{ restitution: 1.1 }}
      >
        {/* <Cube /> */}
        <Ball
          setScores={setScores}
          gameOver={gameOver}
          setGameOver={setGameOver}
        />
        {mode === 'dog' ? <Paddle /> : <Paddle2 />}
        {/* <Paddle /> */}
        {/* <Paddle2 /> */}
        <Enemy color="#f8b62b" position={[-3, 3, 0]} />
        {/* <Spin> */}
        <Enemy color="#00a29a" position={[2, 1, 0]} />
        {/* </Spin> */}
        <Enemy color="#fd594e" rotation={[0, 0, 3.5]} position={[-9, 1, 0]} />
        <Enemy color="#fd594e" rotation={[0, 0, -3.5]} position={[10, 1, 0]} />
        {/* <Cube position={[-1.5, 1, 1]} />
        <Cube position={[1.5, 1, 1]} /> */}
      </Physics>
      {/* <OrbitControls /> */}
    </>
  );
}

export default GameItem;
