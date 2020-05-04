import React from 'react';

const Square = ({ data }) => {
    
    const getSquareColor = ({ indexCoordinate }) => {
        const [x, y] = indexCoordinate;
        if(x % 2 === 0 && y % 2 === 0) {
            return "white-square";
        } else if(x % 2 === 0 && y % 2 !== 0) {
            return "black-square";
        } else if(x % 2 !== 0 && y % 2 === 0) {
            return "black-square";
        } else if(x % 2 !== 0 && y % 2 !== 0) {
            return "white-square";
        }
    }

    const getPiece = ({ piece }) => {
        switch(piece) {
            case "White Pawn":
                return <img src={require("../lib/assets/piece-images/wP.png")} alt={piece} className="piece" />;
            case "White Rook":
                return <img src={require("../lib/assets/piece-images/wR.png")} alt={piece} className="piece" />;
            case "White Knight":
                return <img src={require("../lib/assets/piece-images/wN.png")} alt={piece} className="piece" />;
            case "White Bishop":
                return <img src={require("../lib/assets/piece-images/wB.png")} alt={piece} className="piece" />;
            case "White Queen":
                return <img src={require("../lib/assets/piece-images/wQ.png")} alt={piece} className="piece" />;
            case "White King":
                return <img src={require("../lib/assets/piece-images/wK.png")} alt={piece} className="piece" />;
            case "Black Pawn":
                return <img src={require("../lib/assets/piece-images/bP.png")} alt={piece} className="piece" />;
            case "Black Rook":
                return <img src={require("../lib/assets/piece-images/bR.png")} alt={piece} className="piece" />;
            case "Black Knight":
                return <img src={require("../lib/assets/piece-images/bN.png")} alt={piece} className="piece" />;
            case "Black Bishop":
                return <img src={require("../lib/assets/piece-images/bB.png")} alt={piece} className="piece" />;
            case "Black Queen":
                return <img src={require("../lib/assets/piece-images/bQ.png")} alt={piece} className="piece" />;
            case "Black King":
                return <img src={require("../lib/assets/piece-images/bK.png")} alt={piece} className="piece" />;
            default:
                return null;
        }
    }

    return (
        <div className={getSquareColor(data)}>
            { getPiece(data) }
        </div>
    );
}

export default Square;