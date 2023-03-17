import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import AllWords from "./Components/AllWords";
import ScoreBoard from "./Components/ScoreBoard";
import GameContextComponent from "./lib/GameContextComponent";
import GameBoard from "./Components/GameBoard";

function App() {
  return (
    <GameContextComponent>
      <BrowserRouter>
        <div className="bg-gradient-to-r from-cyan-500 to-indigo-500">
          <Header />
          <Routes>
            <Route path="/allWords" element={<AllWords />} />
            <Route path="/score-board" element={<ScoreBoard />} />
            <Route path="/" element={<GameBoard />} />
          </Routes>
        </div>
      </BrowserRouter>
    </GameContextComponent>
  );
}

export default App;
