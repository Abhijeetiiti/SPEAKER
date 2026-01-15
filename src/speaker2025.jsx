import React from "react";

import TedxFooter from "./TedxFooter";
import GradientText from './GradientText';
import TextType from './TextType';
import App from "./App";
import{ Link} from 'react-router-dom'
const Speakers2025 = () => {
  return (
  <>
      
    
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

        <h1 id="our-speaker">2025</h1>
          </GradientText>



      <TedxFooter className="relative z-10 mt-200px bg-black text-white" />
     <nav className="right-navbar">
        <Link to="/App">2026</Link> 
        <Link to="/speaker2024">2024</Link>
        <Link to="/speaker2023">2023</Link>
        <Link to="/speaker2022">2022</Link>
        <Link to="/gallery">Gallery</Link>  
     </nav>
  </>

  );
};

export default Speakers2025;
