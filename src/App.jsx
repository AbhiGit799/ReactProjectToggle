import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Switch from "./components/Switch/Switch";

function App() {
  const [isOn, setIsOn] = useState(false);

  function handleToggle() {
    setIsOn(!isOn);
    document.body.style.backgroundColor = !isOn ? "lightblue" : "white";

    /* 
    When the switch is ON, background becomes lightblue.
    When the switch is OFF, background resets to white.
    */
  }

  return (
    <>
      <Switch isOn={isOn} onToggle={handleToggle} label="Learning React" />
    </>
  );
}

export default App;
