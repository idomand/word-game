import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import AllWords from "./Components/AllWords";
import ScoreBoard from "./Components/ScoreBoard";
import GameContextComponent from "./lib/GameContextComponent";
import GameBoard from "./Components/GameBoard";
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  return (
    <GameContextComponent>
      <Provider store={store}>
        <BrowserRouter>
          <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-indigo-500	">
            <Header />
            <Routes>
              <Route path="/allWords" element={<AllWords />} />
              {/* <Route path="/score-board" element={<ScoreBoard />} /> */}
              <Route path="/" element={<GameBoard />} />
            </Routes>
          </div>
        </BrowserRouter>
      </Provider>
    </GameContextComponent>
  );
}

export default App;
