import { setDiagonalBounds, setLateralBounds } from './supplements'

export const pawnMoves = (squares,y,x,yourTeam) => {
    let space = yourTeam === 'black' ? -1 : 1  //move up or down the board depending on your team
    squares.forEach(square => {
            if (((y === 6 && yourTeam === 'black') || (y === 1 && yourTeam === 'white')) && square.coordinate.y === y + (2 * space) &&  square.coordinate.x === x && square.piece === null){
                square.playable=true //the first move for a pawn when the pawn can move 2 spaces
            } else if (square.coordinate.y === y + space &&  square.coordinate.x === x && square.piece === null){
                square.playable=true // move one space
            } else if (square.coordinate.y === y + space &&  (square.coordinate.x === x + 1 || square.coordinate.x === x - 1) && square.piece && square.piece.team !== yourTeam){
                square.playable=true //move one diagonally to capture an opponent
            } else {
                square.playable=false
            }
    })
}

//set as viable any space where x or y value is greater/less by two and the other is greater/less by one 
export const knightMoves = (squares,y,x,yourTeam) => {
    squares.forEach(square => {
        if (square.piece && square.piece.team === yourTeam) {
            square.playable=false
        } else if ((square.coordinate.y === y + 2 || square.coordinate.y ===  y - 2) && (square.coordinate.x === x + 1 || square.coordinate.x === x - 1)){
            square.playable=true
        } else if ((square.coordinate.y === y + 1 || square.coordinate.y === y - 1) && (square.coordinate.x === x + 2 || square.coordinate.x === x - 2)){
            square.playable=true
        } else {
            square.playable=false
        }
    })
}

//rookes can move diagonally so any space where the y(1) - y(0) = x(1) - x(0) or y(1) - y(0) = x(0) - x(1) 
//up until the next piece of the same team or spaces after the next opposing team.
//these boundaries are set via setLateralBounds in the supplements page
export const bishopMoves = (squares,y,x,yourTeam) => {
    let bounds = setDiagonalBounds(squares,y,x,yourTeam)
    squares.forEach(square => {
        if (square.piece && square.piece.team === yourTeam) {
            square.playable=false
        } else if ((square.coordinate.y - y)  === (square.coordinate.x - x) && (square.coordinate.y < bounds.lRB[0] && square.coordinate.y > bounds.uLB[0]) && (square.coordinate.x < bounds.lRB[1] && square.coordinate.x > bounds.uLB[1])){
            square.playable=true
        } else if ((square.coordinate.y - y)  === (x - square.coordinate.x) && (square.coordinate.y < bounds.lLB[0] && square.coordinate.y > bounds.uRB[0]) && (square.coordinate.x > bounds.lLB[1] && square.coordinate.x < bounds.uRB[1])){
            square.playable=true
        } else {
            square.playable=false
        }
    })  
}

//rookes can move laterally so any space where the y or x value is the same
//up until the next piece of the same team or spaces after the next opposing team.
//these boundaries are set via setLateralBounds in the supplements page
export const rookeMoves = (squares,y,x,yourTeam) => {
    let bounds = setLateralBounds(squares,y,x,yourTeam)
    squares.forEach(square => {
        if (square.piece && square.piece.team === yourTeam) {
            square.playable=false
        } else if ((square.coordinate.x === x) && (square.coordinate.y > bounds.uB[0] && square.coordinate.y < bounds.dB[0])){
            square.playable=true
        } else if ((square.coordinate.y === y) && (square.coordinate.x < bounds.rB[1] && square.coordinate.x > bounds.lB[1])){
            square.playable=true
        } else {
            square.playable=false
        }
    })  
}

//basically a hybrid of rooke and bishop moves
export const queenMoves = (squares,y,x,yourTeam) => {
    let lBounds = setLateralBounds(squares,y,x,yourTeam)
    let dBounds = setDiagonalBounds(squares,y,x,yourTeam)
    squares.forEach(square => {
        if (square.piece && square.piece.team === yourTeam) {
            square.playable=false
        } else if ((square.coordinate.x === x) && (square.coordinate.y > lBounds.uB[0] && square.coordinate.y < lBounds.dB[0])){
            square.playable=true
        } else if ((square.coordinate.y === y) && (square.coordinate.x < lBounds.rB[1] && square.coordinate.x > lBounds.lB[1])){
            square.playable=true
        } else if ((square.coordinate.y - y)  === (square.coordinate.x - x) && (square.coordinate.y < dBounds.lRB[0] && square.coordinate.y > dBounds.uLB[0]) && (square.coordinate.x < dBounds.lRB[1] && square.coordinate.x > dBounds.uLB[1])){
            square.playable=true
        } else if ((square.coordinate.y - y)  === (x - square.coordinate.x) && (square.coordinate.y < dBounds.lLB[0] && square.coordinate.y > dBounds.uRB[0]) && (square.coordinate.x > dBounds.lLB[1] && square.coordinate.x < dBounds.uRB[1])){
            square.playable=true
        } else {
            square.playable=false
        }
    })  
}

//a king can move one space in any direction so if the a space is within x +- 2 and y +- 2 from the king's position
//then it's viable
export const kingMoves = (squares,y,x,yourTeam) => {
    squares.forEach(square => {
        if (square.piece && square.piece.team === yourTeam) {
            square.playable=false
        } else if (square.coordinate.y === y + 2  && square.coordinate.x === x ){
            square.playable=false
        } else if ((square.coordinate.y < y + 2 && square.coordinate.y >  y - 2) && (square.coordinate.x < x + 2 && square.coordinate.x > x - 2)){
            square.playable=true
        }  else {
            square.playable=false
        }
    })
}



