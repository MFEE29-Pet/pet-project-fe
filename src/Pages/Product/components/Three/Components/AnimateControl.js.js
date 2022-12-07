import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useThree, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';
import { Physics, usePlane } from '@react-three/cannon';
import { angleToRadians } from '../utils/angle';
import gsap from 'gsap';

export default function AnimateControl() {
  // XXX 測試盒子
  // function Box() {
  //   const [ref, api] = useBox(() => ({ mess: 1, position: [50, 2, 0] }));
  //   return (
  //     <mesh
  //       onClick={() => {
  //         api.velocity.set(0, 2, 0);
  //       }}
  //       ref={ref}
  //       position={[0, 2, 0]}
  //     >
  //       <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
  //       <meshLambertMaterial attach="material" color="#f8b62b" />
  //     </mesh>
  //   );
  // }

  // XXX 地板
  function Plane() {
    const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }));
    const img = '/images/grass.jpeg';
    const texture = useLoader(THREE.TextureLoader, img);
    return (
      <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[2300, 2300]} />
        <meshPhongMaterial
          color="#f8b62b"
          // map={texture}
        />
      </mesh>
    );
  }

  // 球
  function BallYellow() {
    // const [ref, api] = useBox(() => ({ mess: 1, position: [50, 2, 0] }));
    return (
      <mesh scale={10} position={[-50, 10, 70]} onClick={() => {}} castShadow>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#f8b62b" />
      </mesh>
    );
  }
  function BallBlue() {
    // const [ref, api] = useBox(() => ({ mess: 1, position: [50, 2, 0] }));
    return (
      <mesh scale={10} position={[50, 10, 70]} onClick={() => {}} castShadow>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#00a29a" />
      </mesh>
    );
  }
  function BallRed() {
    // const [ref, api] = useBox(() => ({ mess: 1, position: [50, 2, 0] }));
    return (
      <mesh scale={10} position={[0, 10, 70]} onClick={() => {}} castShadow>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#fd594e" />
      </mesh>
    );
  }

  // Cat
  function Model() {
    const group = useRef();
    const { scene, animations } = useGLTF(
      '/images/animated-bengal-cat/source/bengal_cat_non_commercial.glb'
    );

    const { actions } = useAnimations(animations, group);
    useEffect(() => {
      // console.log(actions["All Animations"]);
      const animate = actions['All Animations'];
      animate.play();
    });
    return (
      <primitive
        ref={group}
        object={scene}
        dispose={null}
        position={[60, 5, 10]}
        rotation={[-0.25, 0, 0]}
        scale={65}
      />
    );
  }

  // Dog
  function Model2() {
    const group = useRef();
    const { scene, animations } = useGLTF('/images/animated_dog_shiba_inu.glb');
    const { actions } = useAnimations(animations, group);
    useEffect(() => {
      // console.log(actions);
      // const animate = actions['0|play_dead_0'];
      const animate = actions['0|shake_0'];
      animate.play();
    });
    return (
      <primitive
        ref={group}
        object={scene}
        dispose={null}
        scale={0.8}
        position={[-50, 0, 0]}
      />
    );
  }

  // grass
  function Grass(props) {
    // const group = useRef();
    const { nodes, materials } = useGLTF('/images/grass_arch.glb');
    // const x = useGLTF('/images/simple_grass_plane.glb');
    // console.log({ nodes, materials });
    return (
      <group {...props} dispose={null} scale={[1, 1, 1]}>
        <mesh
          geometry={nodes.polySurface7_lambert6_0.geometry}
          material={materials.lambert6}
        />
      </group>
    );
  }

  // Butterfly
  function Butterfly() {
    const group = useRef();
    const { scene, animations } = useGLTF('/images/butterfly.glb');
    const { actions } = useAnimations(animations, group);
    useEffect(() => {
      // console.log(actions);
      const animate = actions['ArmatureAction.001'];
      // const animate = actions['0|shake_0'];
      animate.play();
    });
    useEffect(() => {
      if (group.current) {
        // x motion
        gsap.to(group.current.position, {
          x: -90,
          duration: 15,
          ease: 'rough({ template: none.out, strength: 1, points: 20, taper: none, randomize: true, clamp: false})"',
        });

        // y motion
        gsap.to(group.current.position, {
          y: 40,
          duration: 3,
          ease: 'rough({ template: none.out, strength: 1, points: 20, taper: none, randomize: true, clamp: false})"',
        });
      }
    }, [group.current]);
    return (
      <primitive
        scale={20}
        ref={group}
        object={scene}
        dispose={null}
        position={[30, 80, 85]}
      />
    );
  }

  // flower
  function Flower() {
    const flowerRef = useRef();
    const { scene } = useGLTF('/images/flower.glb');

    return (
      <primitive
        ref={flowerRef}
        object={scene}
        dispose={null}
        position={[-100, 20, 50]}
      />
    );
  }

  //Dog house
  function DogHouse() {
    const houseRef = useRef();
    const { scene } = useGLTF('/images/dog_house.glb');

    return (
      <primitive
        ref={houseRef}
        object={scene}
        dispose={null}
        position={[-30, 40, -90]}
        rotation={[0, angleToRadians(-90), 0]}
        scale={3}
      />
    );
  }
  //Cat house
  function CatHouse() {
    const houseRef = useRef();
    const { scene } = useGLTF('/images/cat_house.glb');

    return (
      <primitive
        ref={houseRef}
        object={scene}
        dispose={null}
        position={[50, 40, -60]}
        rotation={[0, angleToRadians(-10), 0]}
        scale={550}
      />
    );
  }
  //Anya
  function Anya() {
    const anyaRef = useRef();
    const { scene } = useGLTF('/images/anya_forger_spy_x_family.glb');

    return (
      <primitive
        ref={anyaRef}
        object={scene}
        dispose={null}
        position={[15, 15, -30]}
        // rotation={[0, angleToRadians(-90), 0]}
        scale={40}
      />
    );
  }
  //Heart
  function Heart() {
    const heartRef = useRef();
    const { scene, animations } = useGLTF('/images/pumping_heart_model.glb');
    const { actions } = useAnimations(animations, heartRef);
    // console.log(actions);
    useEffect(() => {
      // console.log(actions["All Animations"]);
      const animate = actions['Take 001'];
      animate.play();
    });
    return (
      <primitive
        ref={heartRef}
        object={scene}
        dispose={null}
        position={[-100, 70, -70]}
        // rotation={[0, angleToRadians(-90), 0]}
        scale={0.3}
      />
    );
  }

  // XXX 使用OrbitControls後 camera作用問題 (x,y & polar angle,azimuthal angle )
  const orbitControlsRef = useRef(null);
  useFrame((state) => {
    if (orbitControlsRef.current) {
      // 滑鼠位置 (x,y)
      const { x, y } = state.mouse;
      // 隨滑鼠移動 於x軸設定範圍內轉動(20)
      orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(20));
      // 隨滑鼠移動 於y軸設定範圍內移動
      // orbitControlsRef.current.setPolarAngle(
      //   (y + 0.5) * angleToRadians(90 - 30)
      // );
      // console.log(orbitControlsRef.current);
      // 更新畫面
      orbitControlsRef.current.update();
    }
  });

  return (
    <>
      {/* control camera (polar angle & azimuthal angle ) */}
      <OrbitControls
        ref={orbitControlsRef}
        // 不做滾動縮放
        enableZoom={false}
        // 設定polar最大值最小值 (極矩角)
        minPolarAngle={angleToRadians(45)}
        maxPolarAngle={angleToRadians(60)}
        // maxZoom={}
        // minZoom={}
        // target={[0.6, 0.4, 0]}
        // makeDefault
      />

      {/* AmbientLight */}
      <ambientLight intensity={0.25} />

      {/* other lights */}
      {/* SpotLight */}
      <spotLight
        args={['#fff', 1.5, 2000, angleToRadians(60), 0.4]}
        position={[-1.3, 130, 200]}
        castShadow
        // angle={0.5}
      />
      {/* DirectionalLight */}
      <directionalLight args={['#fff', 0.8]} position={[1, 40, 10]} />

      <Physics>
        <Model2 />
        <Model />
        <BallYellow />
        <BallRed />
        <BallBlue />
        {/* <Box /> */}

        {/* <Model2 /> */}
        {/* floor */}
        <Butterfly position={[120, 0, 10]} />
        <Flower />
        <Grass position={[120, 0, 10]} />
        <Grass position={[-100, 0, 30]} />
        <Grass position={[-30, 0, -20]} />
        <Grass position={[-120, 0, -50]} />
        <Grass position={[70, 0, 90]} />
        <Plane />
        <DogHouse />
        <CatHouse />
        <Anya />
        <Heart />
      </Physics>
    </>
  );
}
