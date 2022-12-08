import { useState, useEffect } from 'react';
import { Canvas } from 'react-three-fiber';
import GameItem from './Components/GameItem';
function Game() {
  const [scores, setScores] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  useEffect(() => {
    const count = setInterval(() => {
      setScores((scores) => scores + 1);
    }, 1000);
    return () => clearInterval(count);
  }, [gameOver]);
  return (
    <>
      <p style={{ position: 'absolute', left: '30%' }}>{`分數:${scores}`}</p>
      <Canvas
        style={{ width: '50%' }}
        id="three_canvas_container"
        camera={{
          position: [0, 0, 10],
          fov: 55,
        }}
        dpr={[1, 2]}
        shadows
      >
        <GameItem
          setScores={setScores}
          gameOver={gameOver}
          setGameOver={setGameOver}
        />
      </Canvas>
    </>
  );
}

export default Game;
