import { useState } from "react";
import "./App.css";
import player1 from "./player1.png";
import player2 from "./player2.png";
function App() {
  var [symbol, setSymbol] = useState("X");
  var [array, setArray] = useState([]);
  var [isPressed, setIsPressed] = useState([]);
  var [count, setCount] = useState(0);
  var [isWin, setIsWin] = useState(false);
  var [isDraw, setIsDraw] = useState(false);
  function handleSetSymbol(index) {
    if (symbol === "X") {
      setSymbol("O");
    } else {
      setSymbol("X");
    }
    array[index] = symbol;
    isPressed[index] = true;
    setCount(count + 1);
    checkWin();
    if (isWin) {
      setIsPressed(Array(9).fill(true));
    }
  }
  function checkWin() {
    if (
      (array[0] === array[1] &&
        array[1] === array[2] &&
        (array[0] === "X" || array[0] === "O")) ||
      (array[3] === array[4] &&
        array[4] === array[5] &&
        (array[3] === "X" || array[3] === "O")) ||
      (array[6] === array[7] &&
        array[7] === array[8] &&
        (array[6] === "X" || array[6] === "O")) ||
      (array[0] === array[3] &&
        array[3] === array[6] &&
        (array[0] === "X" || array[0] === "O")) ||
      (array[1] === array[4] &&
        array[4] === array[7] &&
        (array[1] === "X" || array[1] === "O")) ||
      (array[2] === array[5] &&
        array[5] === array[8] &&
        (array[2] === "X" || array[2] === "O")) ||
      (array[0] === array[4] &&
        array[4] === array[8] &&
        (array[0] === "X" || array[0] === "O")) ||
      (array[2] === array[4] &&
        array[4] === array[6] &&
        (array[2] === "X" || array[2] === "O"))
    ) {
      setIsWin(true);
      console.log(symbol + " Won");
    }
    if (count === 9 && !isWin) {
      setIsDraw(true);
    }
  }
  function handleReset() {
    setCount(0);
    setIsDraw(false);
    setIsWin(false);
    setArray([]);
    setIsPressed([]);
    setSymbol("X");
  }
  return (
    <div className="App">
      <h1 style={{ display: isWin ? "none" : "block" }}>
        Player {symbol} select your box
      </h1>
      <h1 style={{ display: isWin ? "block" : "none" }}>
        {symbol === "X" ? "O" : "X"} Won
      </h1>
      <h1 style={{ display: isDraw ? "block" : "none" }}>Its a Draw</h1>
      <div className="grid-container">
        <button disabled={isPressed[0]} onClick={() => handleSetSymbol(0)}>
          <img
            src={array[0] === "X" ? player1 : player2}
            style={{ display: isPressed[0] ? "inline-flex" : "none" }}
            alt="player"
          ></img>
        </button>
        <button disabled={isPressed[1]} onClick={() => handleSetSymbol(1)}>
          <img
            src={array[1] === "X" ? player1 : player2}
            style={{ display: isPressed[1] ? "inline-flex" : "none" }}
            alt="player"
          ></img>
        </button>
        <button disabled={isPressed[2]} onClick={() => handleSetSymbol(2)}>
          <img
            src={array[2] === "X" ? player1 : player2}
            style={{ display: isPressed[2] ? "inline-flex" : "none" }}
            alt="player"
          ></img>
        </button>
        <button disabled={isPressed[3]} onClick={() => handleSetSymbol(3)}>
          <img
            src={array[3] === "X" ? player1 : player2}
            style={{ display: isPressed[3] ? "inline-flex" : "none" }}
            alt="player"
          ></img>
        </button>
        <button disabled={isPressed[4]} onClick={() => handleSetSymbol(4)}>
          <img
            src={array[4] === "X" ? player1 : player2}
            style={{ display: isPressed[4] ? "inline-flex" : "none" }}
            alt="player"
          ></img>
        </button>
        <button disabled={isPressed[5]} onClick={() => handleSetSymbol(5)}>
          <img
            src={array[5] === "X" ? player1 : player2}
            style={{ display: isPressed[5] ? "inline-flex" : "none" }}
            alt="player"
          ></img>
        </button>
        <button disabled={isPressed[6]} onClick={() => handleSetSymbol(6)}>
          <img
            src={array[6] === "X" ? player1 : player2}
            style={{ display: isPressed[6] ? "inline-flex" : "none" }}
            alt="player"
          ></img>
        </button>
        <button disabled={isPressed[7]} onClick={() => handleSetSymbol(7)}>
          <img
            src={array[7] === "X" ? player1 : player2}
            style={{ display: isPressed[7] ? "inline-flex" : "none" }}
            alt="player"
          ></img>
        </button>
        <button disabled={isPressed[8]} onClick={() => handleSetSymbol(8)}>
          <img
            src={array[8] === "X" ? player1 : player2}
            style={{ display: isPressed[8] ? "inline-flex" : "none" }}
            alt="player"
          ></img>
        </button>
      </div>
      <button
        style={{ display: isWin || isDraw ? "block" : "none" }}
        className="playAgain"
        onClick={handleReset}
      >
        <span>Play Again</span>
      </button>
    </div>
  );
}

export default App;
