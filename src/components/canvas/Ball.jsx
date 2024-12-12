// import React from "react";
// import { Suspense } from "react";
// import {
//   Decal,
//   Float,
//   OrbitControls,
//   Preload,
//   useTexture,
// } from "@react-three/drei";

// import { Canvas } from "@react-three/fiber";
// import CanvasLoader from "../Loader";

// const Ball = (props) => {
//   const [decal] = useTexture([props.imgUrl]);

//   return (
//     <>
//       <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
//         <ambientLight intensity={0.25} />
//         <directionalLight position={[0, 0, 0.05]} />
//       </Float>

//       <mesh castShadow receiveShadow scale={2.75}>
//         <icosahedronBufferGeometry args={[1, 1]} />
//         <meshStandardMaterial
//           color="#fff8eb"
//           polygonOffset
//           polygonOffsetFactor={-5}
//           flatShading
//         />
//         <Decal
//           position={[0, 0, 1]}
//           rotation={[2 * Math.PI]}
//           flatShading
//           map={decal}
//         />
//       </mesh>
//     </>
//   );
// };

// const BallCanvas = ({ icon }) => {
//   return (
//     <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls enableZoom={false} />
//         <Ball imgUrl={icon} />
//       </Suspense>
//       <Preload all />
//     </Canvas>
//   );
// };

// export default BallCanvas;

import React from "react";

const Ball = () => {
  return <div>Ball</div>;
};

export default Ball;
