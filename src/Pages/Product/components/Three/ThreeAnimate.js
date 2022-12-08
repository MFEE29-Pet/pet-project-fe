import { Canvas } from '@react-three/fiber';
import AnimateControl from './Components/AnimateControl.js';


function ThreeAnimate() {

  return (
    <Canvas
      id="three_canvas_container"
      camera={{
        position: [40, 160, 210],
        fov: 55,
        // far: mode === 'dog' ? 1000 : 200,
      }}
      dpr={[1, 2]}
      shadows
    >
      <AnimateControl />
    </Canvas>
  );
}

export default ThreeAnimate;
