import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Speaker2025 from "./components/speaker2025";
import Speaker2024 from "./components/speaker2024";
import Speaker2023 from "./components/speaker2023";
import Gallery from "./components/Gallery";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/speaker2025" element={<Speaker2025 />} />
      <Route path="/speaker2024" element={<Speaker2024 />} />
      <Route path="/speaker2023" element={<Speaker2023 />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  );
}

export default App;
