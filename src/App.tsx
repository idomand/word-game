import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./Components/Navbar";
import { Auth } from "./Firebase/firebase-config";
import store from "./Redux/store";
import AllWords from "./pages/AllWords";
import GameBoard from "./pages/GameBoard";
import HomeScreen from "./pages/HomeScreen";
import ScoreBoard from "./Components/ScoreBoard";

console.log(Auth.currentUser);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="min-h-screen ">
          <Header />
          <Routes>
            <Route path="/allWords" element={<AllWords />} />
            <Route path="/score-board" element={<ScoreBoard />} />
            <Route path="/GameBoard" element={<GameBoard />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
