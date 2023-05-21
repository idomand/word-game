import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import AllWords from "./Components/AllWords";
import ScoreBoard from "./Components/ScoreBoard";
// import GameContextComponent from "./lib/GameContextComponent";
import GameBoard from "./Components/GameBoard";
import { Provider } from "react-redux";
import store from "./Redux/store";

import { Auth } from "./Firebase/firebase-config";
import HomeScreen from "./Components/HomeScreen";

console.log(Auth.currentUser);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-indigo-500	">
          <Header />
          <Routes>
            <Route path="/allWords" element={<AllWords />} />
            {/* <Route path="/score-board" element={<ScoreBoard />} /> */}

            <Route path="/GameBoard" element={<GameBoard />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
