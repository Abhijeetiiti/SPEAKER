import {} from 'react'
import TedxFooter from "./TedxFooter";
import GradientText from './GradientText'
import './App.css'
import DecayCard from './DecayCard';
import CircularGallery from './CircularGallery';
import Hyperspeed from './Hyperspeed';
import ScrollFloat from './ScrollFloat';
import TextType from './TextType';

import { NavLink } from "react-router-dom"; 

function App() {


  return (
    <>
     <div className="relative min-h-screen overflow-hidden py=20 flex flex-col items-center justify-center gap-20 bg-black">
    <Hyperspeed
  effectOptions={{
    onSpeedUp: () => { },
    onSlowDown: () => { },
    distortion: 'turbulentDistortion',
    length: 400,
    roadWidth: 10,
    islandWidth: 2,
    lanesPerRoad: 4,
    fov: 90,
    fovSpeedUp: 150,
    speedUp: 2,
    carLightsFade: 0.4,
    totalSideLightSticks: 20,
    lightPairsPerRoadWay: 40,
    shoulderLinesWidthPercentage: 0.05,
    brokenLinesWidthPercentage: 0.1,
    brokenLinesLengthPercentage: 0.5,
    lightStickWidth: [0.12, 0.5],
    lightStickHeight: [1.3, 1.7],
    movingAwaySpeed: [60, 80],
    movingCloserSpeed: [-120, -160],
    carLightsLength: [400 * 0.03, 400 * 0.2],
    carLightsRadius: [0.05, 0.14],
    carWidthPercentage: [0.3, 0.5],
    carShiftX: [-0.8, 0.8],
    carFloorSeparation: [0, 5],
    colors: {
      roadColor: 0x080808,
      islandColor: 0x0a0a0a,
      background: 0x000000,
      shoulderLines: 0xFFFFFF,
      brokenLines: 0xFFFFFF,
      leftCars: [0xFF1A1A, 0xE10600,0xFF3B3B],

      rightCars: [0xFFFFFF, 0xE6F0FF, 0xCFE8FF ],

      sticks: 0x03B3C3,
    }
  }}
/>

    
    
      <div fontSize={40} fontWeight={'bold'}>
        <GradientText
           colors={[" #FDDCA9"," #FEA712 ", "#E76219", "#C21717 ", "#562717"]}
           animationSpeed={2}
           showBorder={false}
           className="custom-class">

        <TextType 
          text={["Welcome To TEDx 2026","It's Time to Introduce ","Our Speaker"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          style={{
          fontSize: "90px",
          fontWeight: "bold"
     }}
/>
        </GradientText>
       
    </div>
        <GradientText
          colors={[" #FDDCA9"," #FEA712 ", "#E76219", "#C21717 ", "#562717"]}
         animationSpeed={3}
         showBorder={false}
         className="custom-class">

        <h1 id="our-speaker">2026</h1>
          </GradientText>
     
        


      <div style={{ height: '500px', position: 'relative' }}>
  <CircularGallery bend={2} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
</div>
  
 </div>

<div>
  <h4 id='h4'>.</h4>
</div>

  <TedxFooter className="relative z-10 mt-200px bg-black text-white" />
<nav className="right-navbar">
     <a href="">2025</a>
     <a href="">2024</a>
     <a href="">2023</a>
      <a href="">Gallery</a>

</nav>



    </>
  )
}

export default App
