// import React from "react";
// import { useState, useRef, Suspense} from 'react'
// import {Canvas, useFrame} from '@react-three/fiber'

// import { Points, PointMaterial, Preload} from '@react-three/drei'
// import * from "maath/random/dist/maath-random.esm";

// const Stars = (props) => {
//   const ref = useRef();

//   const sphere = random.inSphere(new Float32Array(5000), { radius:1.2})

//   useFrame((state, delta) => {
//     ref.current.rotation.x -= delta /10
//     ref.current.rotation.y -= delta /15
//   })

//   return (
//     <group rotation={[0,0,math/4]}>
//       <Point ref={ref} positions={sphere} stride= {3} frustumCulled {...props}>
//         <PointMaterial transparent color='f272c8' size={0.02} sizeAttenuation={true} depthWrite={false}  />
//       </Point>
//     </group>
//   )
// };

// const StartCanvas = () => {
//   return (
//     <div className="w-full h-auto absolute inset-0 z-[-1]">
//       <Canvas camera={{ position: [0, 0, 1] }}>
//         <Suspense fallback= {null}>
//           <Stars />
//         </Suspense>
//         <Preload all />
//       </Canvas>
//     </div>
//   );
// };

// export default Stars;

import React from "react";

const Stars = () => {
  return <div>Start</div>;
};

export default Stars;
