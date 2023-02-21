import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Main from "./Components/Main";
import Header from "./Components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
