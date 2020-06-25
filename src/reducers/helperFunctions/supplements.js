/////////supplementary functions for the guiding the pieces' movements


//set boundaries for diagonal movement
export const setDiagonalBounds = (squares,y,x,yourTeam) => {
    //take coordinates for all spaces between current position and the end of the board 
    const moves =  unfilteredDiagonalMoves(y,x)
    
    const upLeftBound = filterMoves(squares,moves.upLeftMoves,yourTeam).length > 0 ? filterMoves(squares,moves.upLeftMoves,yourTeam) : [-1,-1] //if no boundaties are set by occupied pieces then set the boundaries as one space outside the board
    const upRightBound = filterMoves(squares,moves.upRightMoves,yourTeam).length > 0 ? filterMoves(squares,moves.upRightMoves,yourTeam) : [-1,8]
    const lowLeftBound = filterMoves(squares,moves.lowLeftMoves,yourTeam).length > 0 ? filterMoves(squares,moves.lowLeftMoves,yourTeam) : [8,-1]
    const lowRightBound = filterMoves(squares,moves.lowRightMoves,yourTeam).length > 0 ? filterMoves(squares,moves.lowRightMoves,yourTeam) : [8,8]
    return {uLB:upLeftBound,uRB:upRightBound,lLB:lowLeftBound,lRB:lowRightBound}
    
}
//set boundaries for lateral movement
export const setLateralBounds = (squares,y,x,yourTeam) => {
    //take coordinates for all spaces between current position and the end of the board
    const moves =  unfilteredLateralMoves(y,x)
     
    const upBound = filterMoves(squares,moves.upMoves,yourTeam).length > 0 ? filterMoves(squares,moves.upMoves,yourTeam) : [-1,0] //if no boundaties are set by occupied pieces then set the boundaries as one space outside the board
    const downBound = filterMoves(squares,moves.downMoves,yourTeam).length > 0 ? filterMoves(squares,moves.downMoves,yourTeam) : [8,0]
    const leftBound = filterMoves(squares,moves.leftMoves,yourTeam).length > 0 ? filterMoves(squares,moves.leftMoves,yourTeam) : [0,-1]
    const rightBound = filterMoves(squares,moves.rightMoves,yourTeam).length > 0 ? filterMoves(squares,moves.rightMoves,yourTeam) : [0,8]
    return {uB:upBound,dB:downBound,lB:leftBound,rB:rightBound}
    
}

//filter all lateral and diagonal moves

//filter out any moves beyond the next occupied square. If the square is occupied by another team, then movement to that square is permitted
const filterMoves = (squares,moves,yourTeam) => {
    var bound = []
    //move through the array of unfiltered moves from the furthest moving toward the current location
    for (let i = moves.length - 1; i >= 0 ; i--){
        squares.forEach(square => {
            //if the square is a possible move for that piece and contains a different piece
            if (square.coordinate.y === moves[i][0] && square.coordinate.x === moves[i][1] && square.piece) {
                if(square.piece.team !== yourTeam && i < moves.length - 1){
                    bound = moves[i + 1]
                } else if(square.piece.team !== yourTeam && i === moves.length - 1){
                    bound = []
                } else {
                    bound = moves[i]
                }
            } 
        }) 
    }
    return bound
}

//this function gathers up all the spaces between a bishop or queen and the end of the board
const unfilteredDiagonalMoves = (y,x) => {
    const moves = {
        upLeftMoves:[],
        upRightMoves:[],
        lowLeftMoves:[],
        lowRightMoves:[]
    }
   let originalY = y
   let originalX = x

    //append to array the y,x coordinates for all moves in the up/left direction
    while(y >= 0 && x >= 0){
        moves.upLeftMoves.push([y,x])
        y -=1
        x -= 1
    }
    //remove the first item since it's the current space
    moves.upLeftMoves.shift()
    //reset x and y values to the piece's current coordinate
    y = originalY
    x = originalX

    while(y >= 0 && x <= 7){
        moves.upRightMoves.push([y,x])
        y -=1
        x += 1
    }
    moves.upRightMoves.shift()
    y = originalY
    x = originalX

    while(y <= 7 && x >= 0){
        moves.lowLeftMoves.push([y,x])
        y +=1
        x -= 1
    }
    moves.lowLeftMoves.shift()
    y = originalY
    x = originalX

    while(y <= 7 && x <= 7){
        moves.lowRightMoves.push([y,x])
        y +=1
        x += 1
    }
    moves.lowRightMoves.shift()
    y = originalY
    x = originalX
    return moves
}

//this function gathers up all the spaces between a rooke or queen and the end of the board
const unfilteredLateralMoves = (y,x) => {
    const moves = {
        upMoves:[],
        downMoves:[],
        leftMoves:[],
        rightMoves:[]
    }
   let originalY = y
   let originalX = x

    //append to array the y,x coordinates for all moves in the up/left direction
    while(y >= 0){
        moves.upMoves.push([y,x])
        y -=1
    }
    //remove the first item since it's the current space
    moves.upMoves.shift()
    //reset x and y values to the piece's current coordinate
    y = originalY
    
    while(y <= 7){
        moves.downMoves.push([y,x])
        y +=1
    }
    moves.downMoves.shift()
    y = originalY

    while(x >= 0){
        moves.leftMoves.push([y,x])
        x -= 1
    }
    moves.leftMoves.shift()
    x = originalX

    while(x <= 7){
        moves.rightMoves.push([y,x])
        x += 1
    }
    moves.rightMoves.shift()
    x = originalX
    return moves
}