import React from "react";
import "./App.css";
import Button from "@mui/material/Button";
import MazeBoard from "./components/MazeBoard";

function App() {
  // const columns = prompt("Please enter board width");
  // const rows = prompt("Please enter board height");
  return (
    <div className="App">
      {/* <div className="App-header">HHHHH</div> */}
      <MazeBoard className="App-header" rows={10} columns={10}></MazeBoard>
    </div>
  );
}

export default App;
