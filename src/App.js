import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Rank from "./components/rank/Rank";
import Game from "./components/game/Game";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rank" element={<Rank />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  )
};

export default App;
