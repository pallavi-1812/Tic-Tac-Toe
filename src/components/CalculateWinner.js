
const CalculateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],            //winning loops , since its array hence we are starting from 0
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]; // if all three rows are filled and [a,b,c] = [x,x,x] || [y,y,y]
        }
    }
    return null;
}

export default CalculateWinner;