import React, { useState, useEffect } from "react";
import "./App.css";
import Board from "./Components/Board";
import Header from "./Components/Header/Header";
import Footer from "./Components/footer";

function App() {
  const description = {
    title: "Jogo da Velha",
  };
  const emptyBoard = Array(9).fill("");
  const [board, setboard] = useState(emptyBoard);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const handleCellClick = (index) => {
    if (winner) {
      return null;
    }
    if (board[index] !== "") {
      return null;
    }
    // (estou pegando meu board e vendo se ele esta diferente de vazio,
    // se for vazio ok pode continuar executando porem se nao for entao parar nesse momento
    //  . e assim impedindo que de para ficar trocando quando clica no msm lugar .)
    // /
    // /
    //  aqui estou recriando o Array, o momento q eu clicar em alguma celula eu setar o board
    setboard(
      board.map((item, itemIndex) =>
        itemIndex === index ? currentPlayer : item
      )
    );
    // clicou/atualiza o board/troca o jogador
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };
  const checkWinner = () => {
    const possibleWaysToWin = [
      [board[0], board[1], board[2]],
      [board[3], board[4], board[5]],
      [board[6], board[7], board[8]],
      // vertical
      [board[0], board[3], board[6]],
      [board[1], board[4], board[7]],
      [board[2], board[5], board[8]],
      //  diagonal
      [board[0], board[4], board[8]],
      [board[2], board[4], board[6]],
    ];
    possibleWaysToWin.forEach((cells) => {
      if (cells.every((cell) => cell === "O")) setWinner("O");
      if (cells.every((cell) => cell === "X")) setWinner("X");
    });
    // agora tenho um estado com o vencedor
    checkDraw();
  };
  // verficando se esta preenchido.. poderia ver com o X ou O mas é mais facil verificar se esta diferente de vazio
  const checkDraw = () => {
    if (board.every((item) => item !== "")) setWinner("E");
  };
  useEffect(checkWinner, [board]);
  // atualiza o board

  const resetGame = () => {
    setCurrentPlayer("X");
    setboard(emptyBoard);
    setWinner(null);
  };
  return (
    <main>
      <Header title={description.title} />
      <Board
        winner={winner}
        board={board}
        handleCellClick={handleCellClick}
      ></Board>

      <Footer winner={winner} resetGame={resetGame}></Footer>
    </main>
  );
}
export default App;
