import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "../components/NavBar";
import NotFound from "../pages/NotFound";
import Pokemones from "../pages/Pokemones";
import Pokemon from "../pages/Pokemon";
import Home from "../pages/Home";
import "../style.css";

const AppRoutes = () => {
  return (
    <div>
      <Router>
        <NavBar />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/pokemones" element={<Pokemones />} />
          <Route path="/pokemones/:name" element={<Pokemon />} /> 
          <Route path="*" element={<NotFound />} />
          
        </Routes>

      </Router>
    </div>
  );
}

export default AppRoutes;