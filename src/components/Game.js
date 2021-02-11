import React, { useState } from 'react';
import Board from './Board';
import CalculateWinner from './CalculateWinner';

const Game = () => {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = CalculateWinner(board);

    const handleClick = (i) => {
        const boardCopy = [...board];
        if (winner || boardCopy[i]) {
            return null;             // If user clicks on an occupied square or game is won
        }
        boardCopy[i] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        setXisNext(!xIsNext);
    }

    const jumpTo = () => {

    }

    const renderMoves = () => {
        return (
            <button onClick={() => setBoard(Array(9).fill(null))}>
                Restart Game
            </button>
        )
    }

    return (
        <>
            <Board squares={board} handleClick={handleClick} />
            <div className="start">
                <p>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>
                {renderMoves()}
            </div>
        </>
    );
}

export default Game;