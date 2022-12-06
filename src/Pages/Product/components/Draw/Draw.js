// import React from 'react';
// import Sketch from 'react-p5';

// function Draw() {
//   let a = 300;
//   let b = 300;
//   let speed = 3;
//   let setup = (p5, canvasParentRef) => {
//     //Canvas of size 1000x800
//     let xyz = p5.createCanvas(1000, 800,).parent(canvasParentRef);
//     //Calculation to center the canvas
//     let x = (p5.windowWidth - p5.width) / 2;
//     let y = (p5.windowHeight - p5.height) / 1.8;
//     xyz.position(x, y, 'relative');
//   };
//   let draw = (p5) => {
//     p5.background('rgb(100%,0%,10%)');
//     //Color of the ball
//     p5.stroke(255);
//     p5.strokeWeight(4);
//     //Mentioning that the ball or the circle won't have filled color
//     p5.noFill();
//     //The first 2 parameters are for positioning and the next two are
//     //for size
//     p5.ellipse(a, b, 100, 100);
//     //If the ball goes to the end of the canvas it should return back
//     if (a >= p5.width) {
//       speed = -3;
//     }
//     if (a === 90) {
//       speed = 3;
//     }
//     a = a + speed;
//   };
//   return (
//     <>
//       <Sketch setup={setup} draw={draw} className="draw" />
//     </>
//   );
// }

// export default Draw;
