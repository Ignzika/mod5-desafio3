import { Routes, Route } from "react-router-dom";

import "./App.css";
import PokeNavBar from "./components/PokeNavBar";
import PokeHome from "./views/PokeHome";
import Pokedex from "./views/PokeDex";
import PokeDetail from "./components/PokeDetail";
import PokeOthers from "./views/PokeOthers";
import PokeLinks from "./views/PokeLinks";
import PokeNotFound from "./components/PokeNotFound";

function App() {
  return (
    <>
      <PokeNavBar />
      <Routes>
        <Route path="/" element={<PokeHome />} />
        <Route path="/Pokedex" element={<Pokedex />} />
        <Route path="/PokeDetail/:name" element={<PokeDetail />} />
        <Route path="/PokeOthers" element={<PokeOthers />} />
        <Route path="/PokeLinks" element={<PokeLinks />} />
        <Route path="/*" element={<PokeNotFound />} />
      </Routes>
    </>
  );
}

export default App;
