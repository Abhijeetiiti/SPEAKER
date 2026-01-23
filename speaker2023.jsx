import Navbar from "./components/Navbar";
import './App.css'
import TeamCards from './components/TeamCard.jsx' ; 



function Speaker2023() {
  return (
    <>
    <div style={{ height: '1050px', position: 'relative', paddingLeft: '50px', paddingTop: '50px', paddingRight: '50px' }}>

         
    <div className="team-section">
    
      <TeamCards />
    </div>
      </div>
     <Navbar />
     
    </>
    

  );
}

export default Speaker2023;
