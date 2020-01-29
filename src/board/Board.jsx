import React from 'react';
import Square from './square/Square';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: new Array(9).fill(null),
            playerIsNext: true
        };
    }

    getWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let line of lines) {
            const [a, b, c] = line;
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                if (squares[a] === 'O') {
                    return 'Computer'
                }
                else {
                    return this.props.name
                }
            }
        }
        if (!squares.includes(null)) {
            return 'Frendship'
        }
        return false;
    }

    ai() {
        const squares = this.state.squares.slice();
        let getRandom = () => Math.floor(Math.random() * (8 + 1));
        let flag = true;
        do {
            let i = getRandom();
            if (!squares[i]) {
                squares[i] = 'O';
                this.setState({
                    squares: squares,
                    playerIsNext: !this.state.playerIsNext
                });
                flag = false;
                this.getWinner(this.state.squares);
            }
        } while (flag)
    }

    handleClick(i) {
        let squares = this.state.squares.slice();
        let winner = this.getWinner(this.state.squares);
        if (winner || squares[i]) {
            return false;
        }
        squares[i] = 'X';
        this.setState({
            squares: squares,
            playerIsNext: !this.state.playerIsNext
        });
        winner = this.getWinner(this.state.squares);
        if (!winner) {
            setTimeout(() => { this.ai() }, 300)
        }
    }

    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    }

    refresh = () => {
        const winner = this.getWinner(this.state.squares);
        const squares = new Array(9).fill(null);
        this.setState({
            squares: squares,
            playerIsNext: true
        });
        this.props.getStat(winner)
    }

    render() {
        const winner = this.getWinner(this.state.squares);
        let next = null;
        if (winner) {
            next = `${winner} is winner`;
        }
        else {
            next = `Next player: ${this.state.playerIsNext ? this.props.name : 'Computer'}`;
        }

        return (
            <div className="wrapper">
                <div className="next">{next}</div>
                <div className="wrapper-board">
                    <div className="board-row">
                        {this.renderSquare(0)}
                        {this.renderSquare(1)}
                        {this.renderSquare(2)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(3)}
                        {this.renderSquare(4)}
                        {this.renderSquare(5)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(6)}
                        {this.renderSquare(7)}
                        {this.renderSquare(8)}
                    </div>
                </div>
                <div className="refresh" onClick={this.refresh}>{winner ? 'New game' : 'Refresh field'}</div>
            </div>
        );
    }
}

export default Board;