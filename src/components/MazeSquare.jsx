import React from "react";
import "./MazeBoard.css";
import enemy from "../assets/images/night-king_intro.png";
import player from "../assets/images/40353_GOT_Missandei_POP_NYCC_WEB.png";

const MazeSquare = ({ row, column, board }) => {
  console.log(board);
  if (!board || board.elements.length === 0) return null;
  const hasEnemy = board.elements.find(
    e => e.row === row && e.column === column
  ).hasEnemy;
  let state = 0; // 0: empty, 1 hasEnemy, 2 hasPlayer
  if (hasEnemy) {
    state = 1;
  }

  if (
    board.playerLocation.row === row &&
    board.playerLocation.column === column
  ) {
    state = 2;
  }

  if (state === 0) {
    return <div className="container"></div>;
  } else if (state === 1) {
    return (
      <div className="container">
        <div className="square">
          <img src={enemy} alt="enemy"></img>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="square">
          <img src={player} alt="player"></img>
        </div>
      </div>
    );
  }
};

export default MazeSquare;
