// Create new empty board as a two-dimensional array, each square as an object managing state

export const createBoard = () => {
    let board = [];
    board = createRows();
    board = createColumns(board);
    board = createSquareObjects(board)
    return board;
}

const createRows = () => new Array(8);

const createColumns = board => {
    for(let i=0; i < board.length; i++) {
        board[i] = new Array(8);
    }
    return board;
}

const createSquareObjects = board => {
    for(let i=0; i < board.length; i++) {
        for(let j=0; j < board[i].length; j++) {
            const indexCoordinate = [i, j];
            const chessCoordinate = getChessCoordinate(indexCoordinate);
            const chessPiece = getChessPiece(indexCoordinate);
            const isOccupied = chessPiece ? true : false;
            board[i][j] = {
                indexCoordinate: indexCoordinate,
                chessCoordinate: chessCoordinate,
                piece: chessPiece,
                isOccupied: isOccupied
            }
        }
    }
    return board;
}

const getChessCoordinate = coordinate => {
    const [x, y] = coordinate;
    const columnLookup = {
        0: "A",
        1: "B",
        2: "C",
        3: "D",
        4: "E",
        5: "F",
        6: "G",
        7: "H"
    };
    const rowLookup = {
        0: "8",
        1: "7",
        2: "6",
        3: "5",
        4: "4",
        5: "3",
        6: "2",
        7: "1"
    };
    return columnLookup[y] + rowLookup[x];
}

const getChessPiece = coordinate => {
    const [x, y] = coordinate;
    const startingPositionObj = {
        0: {color: "Black", piece: ["Rook", "Knight", "Bishop", "Queen", "King", "Bishop", "Knight", "Rook"]},
        1: {color: "Black", piece: ["Pawn", "Pawn", "Pawn", "Pawn", "Pawn", "Pawn", "Pawn", "Pawn"]},
        6: {color: "White", piece: ["Pawn", "Pawn", "Pawn", "Pawn", "Pawn", "Pawn", "Pawn", "Pawn"]},
        7: {color: "White", piece: ["Rook", "Knight", "Bishop", "Queen", "King", "Bishop", "Knight", "Rook"]}
    }

    if(startingPositionObj[x]) {
        return startingPositionObj[x].color + " " + startingPositionObj[x].piece[y];
    } else {
        return null;
    }
}