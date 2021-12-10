import React, { useState } from "react";
import "./MazeBoard.css";
import { Board } from "../controllers/control";
import MazeSquare from "./MazeSquare";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const MazeBoard = ({ rows, columns }) => {
  const [model, setModel] = useState(Board(rows, columns));

  const moveHandler = direction => {
    if (direction === 1) {
      if (model.playerLocation.row > 0) {
        model.playerLocation.row--;
      }
    } else if (direction === 2) {
      if (model.playerLocation.row < model.rows - 1) {
        model.playerLocation.row++;
      }
    } else if (direction === 3) {
      if (model.playerLocation.column > 0) {
        model.playerLocation.column--;
      }
    } else if (direction === 4) {
      if (model.playerLocation.column < model.columns - 1) {
        model.playerLocation.column++;
      }
    }

    const enemy = model.elements.find(
      a =>
        a.row === model.playerLocation.row &&
        a.column === model.playerLocation.column
    );
    if (enemy) {
      enemy.hasEnemy = false;
    }
    model.totalMoves++;
    setModel({ ...model });
    if (!model.elements.find(a => a.hasEnemy)) {
      alert("Game over. Total moves to save princess: " + model.totalMoves);
      setModel(Board(rows, columns));
    }
  };

  let divs = [];
  for (let i = 0; i < model.rows; i++) {
    for (let j = 0; j < model.columns; j++) {
      divs.push(<MazeSquare row={i} column={j} board={model}></MazeSquare>);
    }
    divs.push(<br></br>);
  }

  document.onkeydown = function (e) {
    switch (e.keyCode) {
      case 37:
        moveHandler(3);
        break;
      case 38:
        moveHandler(1);
        break;
      case 39:
        moveHandler(4);
        break;
      case 40:
        moveHandler(2);
        break;
      default:
        break;
    }
  };
  return (
    <React.Fragment>
      <div className="boardContainer">
        {divs}
        <button onClick={() => setModel(Board(rows, columns))}>Restart</button>
        <p>Total Moves: {model.totalMoves}</p>
      </div>
    </React.Fragment>
  );
};

export default MazeBoard;
