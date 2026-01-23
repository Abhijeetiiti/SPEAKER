import { NavLink, Outlet } from "react-router-dom";
import TedxFooter from "./TedxFooter";y

function Layout() {
  return (
    <div className="relative min-h-screen flex flex-col">
   
      <nav className="right-navbar">
        <NavLink to="/">2026</NavLink>
        <NavLink to="/speaker2025">2025</NavLink>
        <NavLink to="/speaker2024">2024</NavLink>
        <NavLink to="/speaker2023">2023</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
      </nav>

   
      <main className="flex-1">
        <Outlet /> 
      </main>

      <TedxFooter className="relative z-10 bg-black text-white" />
    </div>
  );
}

export default Layout;
