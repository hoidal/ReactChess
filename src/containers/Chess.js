import React, { Component } from 'react';
import Square from '../components/Square';

class Chess extends Component {
    state = {
        gameboard: [],
        isPlaying: false
    }

    generateSquares = () => {
        const board = this.state.gameboard;
        return board.map(row => {
            return row.map(square => {
                return (
                    <Square 
                        key={square.chessCoordinate}
                        data={square}
                    />
                );
            })
        })
    }

    componentDidMount() {
        this.setState({ gameboard: this.props.board })
    }

    render() {
        const squares = this.generateSquares();
        return (
            <div id="game">
                <button onClick={this.gameStartHandler}>Start</button>
                <div id="board">
                    { squares }
                </div>
            </div>
        )
    }
}

export default Chess;
