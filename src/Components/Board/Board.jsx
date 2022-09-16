import React from "react";

function Board(props) {
  return (
    <div className={`board ${props.winner ? "game-over" : ""} `}>
      {props.board.map((item, index) => (
        <div
          key={index}
          className={`cell ${item}`}
          onClick={() => props.handleCellClick(index)}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default Board;
