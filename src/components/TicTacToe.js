import React, { useState, useEffect, useCallback } from 'react';
import './TicTacToe.css';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [currentPlayer, setCurrentPlayer] = useState('🍎');
  const [winner, setWinner] = useState(null);
  const [winningLine, setWinningLine] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [mode, setMode] = useState('player'); // Default mode is player vs player

  const winningPositions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  const checkWinner = () => {
    for (let i = 0; i < winningPositions.length; i++) {
      const [a, b, c] = winningPositions[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinningLine([a, b, c]);
        return board[a];
      }
    }
    return null;
  };

  const isBoardFull = () => {
    return board.every(cell => cell !== '');
  };

  const makeComputerMove = () => {
    const availableMoves = board.reduce((acc, cell, index) => {
      if (!cell) {
        acc.push(index);
      }
      return acc;
    }, []);

    if (availableMoves.length > 0 && !gameOver) {
      const randomIndex = Math.floor(Math.random() * availableMoves.length);
      handleCellClick(availableMoves[randomIndex]);
    }
  };

  useEffect(() => {
    const winnerPlayer = checkWinner();
    if (winnerPlayer) {
      setWinner(winnerPlayer);
      setGameOver(true);
    } else if (isBoardFull()) {
      setWinner('Draw');
      setGameOver(true);
    } else if (mode === 'computer' && currentPlayer === '🍏') {
      // Computer's turn
      makeComputerMove();
    }
  }, [board, currentPlayer, gameOver, mode]);

  const handleCellClick = useCallback(
    (index) => {
      if (gameOver || board[index]) return;

      const newBoard = [...board];
      newBoard[index] = currentPlayer;

      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === '🍎' ? '🍏' : '🍎');
    },
    [board, currentPlayer, gameOver]
  );

  const resetGame = () => {
    setBoard(Array(9).fill(''));
    setCurrentPlayer('🍎');
    setWinner(null);
    setWinningLine([]);
    setGameOver(false);
  };

  const renderCell = (index) => {
    const isWinningCell = winningLine.includes(index);

    let cellContent;
    if (board[index] === '🍎') {
      cellContent = '🍎'; // Changer 🍎 par une pomme rouge
    } else if (board[index] === '🍏') {
      cellContent = '🍏'; // Changer 🍏 par une pomme verte
    }

    return (
      <button
        key={index}
        onClick={() => handleCellClick(index)}
        className={`w-16 h-16 border border-gray-300 flex items-center justify-center text-4xl focus:outline-none ${
          isWinningCell ? 'bg-yellow-200' : ''
        }`}
        disabled={gameOver || board[index] !== ''}
      >
        {cellContent}
      </button>
    );
  };

  const getWinnerMessage = () => {
    if (winner) {
      let winnerText = `Winner is ${winner}!`;
      let winnerClass = '';

      if (winner === '🍎') {
        winnerText = (
          <>
            Winner is <span className="balloon">🍎</span>!
          </>
        );
        winnerClass = 'text-red-500';
      } else if (winner === '🍏') {
        winnerText = (
          <>
            Winner is <span className="balloon">🍏</span>!
          </>
        );
        winnerClass = 'text-green-500';
      } else if (winner === 'Draw') {
        winnerText = "It's a Draw!";
      }

      return (
        <p className={`text-2xl font-bold ${winnerClass}`}>
          {winnerText}
        </p>
      );
    } else {
      return (
        <p className="text-2xl font-bold">
          {currentPlayer === '🍎' ? (
            <>
              <span className="balloon">🍎</span>'s turn
            </>
          ) : mode === 'player' ? (
            <>
              <span className="balloon">🍏</span>'s turn
            </>
          ) : (
            <>
              Computer's turn <span className="balloon">🎈</span>
            </>
          )}
        </p>
      );
    }
  };

  const rows = [];
  for (let i = 0; i < 3; i++) {
    const row = [];
    for (let j = 0; j < 3; j++) {
      const index = i * 3 + j;
      row.push(renderCell(index));
    }
    rows.push(<div key={i} className="flex">{row}</div>);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="mb-4">
        <label>
          Mode:
          <select value={mode} onChange={(e) => setMode(e.target.value)}>
            <option value="player">Player vs Player</option>
            <option value="computer">Player vs Computer</option>
          </select>
        </label>
      </div>
      <div className="mb-4">{rows}</div>
      <div className="mb-4">{getWinnerMessage()}</div>
      <button
        onClick={resetGame}
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md focus:outline-none"
      >
        Restart
      </button>
    </div>
  );
};

export default TicTacToe;