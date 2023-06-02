import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ProgressBar color={"red"} progress={"90%"} title={"HTML"} />
      <ProgressBar color={"blue"} progress={"80%"} title={"CSS"}/>
      <ProgressBar color={"green"} progress={"65%"} title={"JAVASCRIPT"}/>
    </>
  );
}

export default App;