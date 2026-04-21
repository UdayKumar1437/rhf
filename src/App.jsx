import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import YouTubeForm from "./components/YouTubeForm";
import ButtonComp from "./components/ButtonComp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <YouTubeForm /> */}
      <ButtonComp/>
    </>
  );
}

export default App;
