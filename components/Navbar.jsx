import { NavLink } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className="right-navbar">
      <NavLink to="/" end>2026</NavLink>
      <NavLink to="/speaker2025">2025</NavLink>
      <NavLink to="/speaker2024">2024</NavLink>
      <NavLink to="/speaker2023">2023</NavLink>
      <NavLink to="/gallery">Gallery</NavLink>
    </nav>
  );
};

export default Navbar;
