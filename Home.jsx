import Navbar from "./components/Navbar";
import './App.css'
import React from 'react'
import CircularGallery from './components/CircularGallery.jsx'  
import Hyperspeed from './components/Hyperspeed.jsx'
import TedxFooter from './components/TedxFooter.jsx'
import GradientText from './components/GradientText.jsx'
import TextType from './components/TextType.jsx'
import CardNav from './components/CardNav.jsx';

const items = [
    {
      label: "About Us",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company" },
        { label: "Careers", ariaLabel: "About Careers" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects" },
        { label: "Case Studies", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37", 
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Twitter", ariaLabel: "Twitter" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" }
      ]
    }
  ];

function Home() {
  return (
    <>
 <div><CardNav
        logoSrc="./public/logo.png"
      logoAlt="Tedx IITI "
      items={items}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
    /></div>
    <div className=" mt-100 relative min-h-screen overflow-hidden py-20 flex flex-col items-center justify-center gap-20 bg-black">
    <div className="absolute inset-0 z-0">
  <Hyperspeed className="ml-100"
        effectOptions={{
          distortion: 'turbulentDistortion',
          length: 400,
          roadWidth: 10,
          islandWidth: 2,
          lanesPerRoad: 5,
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
          carLightsLength: [12, 80],
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
            leftCars: [0xFF1A1A, 0xE10600, 0xFF3B3B],
            rightCars: [0xFFFFFF, 0xE6F0FF, 0xCFE8FF],
            sticks: 0x03B3C3,
          }
        }}
      />
           <GradientText 
        colors={["#FDDCA9", "#FEA712", "#E76219", "#C21717", "#562717"]}
        animationSpeed={2}
        showBorder={false}
      >
          <TextType
          text={["Welcome To TEDx 2026", "It's Time to Introduce", "Our Speaker"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor
          cursorCharacter="|"
          style={{ fontSize: "90px", fontWeight: "bold" }}
        />
      </GradientText>

      <GradientText
        colors={["#FDDCA9", "#FEA712", "#E76219", "#C21717", "#562717"]}
        animationSpeed={3}
        showBorder={false}
      >
        <h1 id="our-speaker">2026</h1>
      </GradientText>

     <div style={{ height: '500px', position: 'relative', paddingLeft: '50px', paddingTop: '50px', paddingRight: '50px' }}>
        <CircularGallery bend={2} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
          <Navbar />
      </div>
      </div>
        
       </div>
        <TedxFooter  className="relative z-10 bg-black text-white"  />
    
    </>
  );
}

export default Home;
