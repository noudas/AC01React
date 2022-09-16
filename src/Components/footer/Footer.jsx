import React from "react";

function Footer(props) {
  return (
    <div>
      {props.winner === "E" ? (
        <h2 className="winner-message">Empatou</h2>
      ) : (
        <h2 className="winner-message">{props.winner} Venceu!</h2>
      )}

      <button onclick={props.resetGame}>Recomeçar jogo</button>
    </div>
  );
}

export default Footer;
