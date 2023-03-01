import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Main from "./Components/Main";
import Header from "./Components/Header";
import AllWords from "./Components/AllWords";
import ScoreBoard from "./Components/ScoreBoard";
import GameContextComponent from "./GameContextComponent";

function App() {
  return (
    <GameContextComponent>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/allWords" element={<AllWords />} />
          <Route path="/score-board" element={<ScoreBoard />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </GameContextComponent>
  );
}

export default App;
