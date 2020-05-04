import React, { Component } from 'react';
import Square from '../components/Square';

import { isValid } from '../lib/moveValidation';

class Chess extends Component {
    state = {
        gameboard: [],
        isPlaying: false
    }

    // Capture piece and coordinate data for moved piece
    dragStartHandler = (e, data) => {
        const movedPieceObj = JSON.stringify({ piece: data.piece, startCoordinate: data.indexCoordinate });
        e.dataTransfer.setData("text", movedPieceObj)
    }

    // currently no functionality but needed for drag and drop. may add highlighting for move validation later
    dragOverHandler = (e) => {
        e.preventDefault();
    }

    // get moved piece data, new position, and validate move before updating board
    dragDropHandler = (e, data) => {
        e.preventDefault();
        const board = [...this.state.gameboard];
        const movedPiece = JSON.parse(e.dataTransfer.getData("text"));
        const destination = data;
        console.log(movedPiece, destination)
        const validMove = isValid(board, movedPiece, destination);
        console.log("test", validMove)
    }

    generateSquares = () => {
        const board = this.state.gameboard;
        return board.map(row => {
            return row.map(square => {
                return (
                    <Square 
                        key={ square.chessCoordinate }
                        data={ square }
                        dragStart={ this.dragStartHandler }
                        dragOver={ this.dragOverHandler }
                        drop={ this.dragDropHandler }
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
                <div id="board">
                    { squares }
                </div>
            </div>
        )
    }
}

export default Chess;
