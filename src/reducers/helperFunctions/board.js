export const moveSquares = (squares,y,x,selected) => {
    const capturedBlackPieces = []
    const capturedWhitePieces = []
    let oldY = selected.coordinate.y
    let oldX = selected.coordinate.x
    let piece = selected.piece
    let team = selected.team

    squares.forEach(square => {

         if (square.coordinate.y === y  && square.coordinate.x === x){
            square.piece && square.piece.team === 'black' && capturedBlackPieces.push(square.piece)
            square.piece && square.piece.team === 'white' && capturedWhitePieces.push(square.piece)
            square.piece={team:team,type:piece}
        } else if (square.coordinate.y === oldY  && square.coordinate.x === oldX){
            square.piece=null
        }
        square.playable=false
    })
    return[capturedBlackPieces,capturedWhitePieces]
}


export const clearBoard = (squares) => {
    squares.forEach(square => {
        square.playable=false
    })  
}