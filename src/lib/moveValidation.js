

export const isValid = (board, movedPiece, destination) => {
    const piece = movedPiece.piece;
    const pieceType = piece.split(" ")[1];
    const start = movedPiece.startCoordinate;
    const end = destination.indexCoordinate;
    
    switch(pieceType) {
        case "Pawn":
            return validPawnMove(board, piece, start, end);
        case "Rook":
            return validRookMove(board, piece, start, end);
        case "Knight":
            return validKnightMove(board, piece, start, end);
        case "Bishop":
            return validBishopMove(board, piece, start, end);
        case "Queen":
            return validQueenMove(board, piece, start, end);
        case "King":
            return validKingMove(board, piece, start, end);
        default:
            return false;
    }
}

// need to add reaching end swap and en passant
const validPawnMove = (board, piece, start, end) => {
    const color = piece.split(" ")[0];
    const isCapture = board[end[0]][end[1]].isOccupied;
   
    // non-capture move validation
    // if(!isCapture && start[1] === end[1]) {
    //     if(color === "White")
    // }

}









const validRookMove = (board, piece, start, end) => {
    return true;
}

const validKnightMove = (board, piece, start, end) => {
    return true;
}

const validBishopMove = (board, piece, start, end) => {
    return true;
}

const validQueenMove = (board, piece, start, end) => {
    return true;
}

const validKingMove = (board, piece, start, end) => {
    return true;
}