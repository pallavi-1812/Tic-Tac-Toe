import React from 'react';
import Square from './Square';

const Board = ({ squares, handleClick }) => {
    return (
        <div className='board'>
            {squares.map((square, i) => {
                return (
                    <Square key={i} value={square} handleClick={() => handleClick(i)} />
                )
            })}
        </div>
    );
}

export default Board;