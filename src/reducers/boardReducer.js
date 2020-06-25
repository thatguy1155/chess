//here it will evaluate any actions that are commmitted and manipulate the state

//bring in the types from actions/types
import { PAWN,KNIGHT,BISHOP,ROOKE,QUEEN,KING,MOVE_PIECE,END_GAME } from '../actions/types'
import{ pawnMoves,rookeMoves,knightMoves,bishopMoves,queenMoves,kingMoves } from './helperFunctions/moves'
import{ moveSquares,clearBoard } from './helperFunctions/board'

//create initial state
const initialState = {
    squares: [
        {
            coordinate:{y:0,x:0},
            piece:{
                team:"white",
                type:"Rooke"
            },
            playable:false
        },
        {
            coordinate:{y:0,x:1},
            piece:{
                team:"white",
                type:"Knight"
            },
            playable:false
        },
        {
            coordinate:{y:0,x:2},
            piece:{
                team:"white",
                type:"Bishop"
            },
            playable:false
        },
        {
            coordinate:{y:0,x:3},
            piece:{
                team:"white",
                type:"King"
            },
            playable:false
        },
        {
            coordinate:{y:0,x:4},
            piece:{
                team:"white",
                type:"Queen"
            },
            playable:false
        },
        {
            coordinate:{y:0,x:5},
            piece:{
                team:"white",
                type:"Bishop"
            },
            playable:false
        },
        {
            coordinate:{y:0,x:6},
            piece:{
                team:"white",
                type:"Knight"
            },
            playable:false
        },
        {
            coordinate:{y:0,x:7},
            piece:{
                team:"white",
                type:"Rooke"
            },
            playable:false
        },
        {
            coordinate:{y:1,x:0},
            piece:{
                team:"white",
                type:"Pawn"
            },
            playable:false
        },
        {
            coordinate:{y:1,x:1},
            piece:{
                team:"white",
                type:"Pawn"
            },
            playable:false
        },
        {
            coordinate:{y:1,x:2},
            piece:{
                team:"white",
                type:"Pawn"
            },
            playable:false
        },
        {
            coordinate:{y:1,x:3},
            piece:{
                team:"white",
                type:"Pawn"
            },
            playable:false
        },
        {
            coordinate:{y:1,x:4},
            piece:{
                team:"white",
                type:"Pawn"
            },
            playable:false
        },
        {
            coordinate:{y:1,x:5},
            piece:{
                team:"white",
                type:"Pawn"
            },
            playable:false
        },
        {
            coordinate:{y:1,x:6},
            piece:{
                team:"white",
                type:"Pawn"
            },
            playable:false
        },
        {
            coordinate:{y:1,x:7},
            piece:{
                team:"white",
                type:"Pawn"
            },
            playable:false
        },
        {
            coordinate:{y:2,x:0},
            piece:null,
            playable:false
        },
        {
            coordinate:{y:2,x:1},
            piece:null,
            playable:false
        },
        {
            coordinate:{y:2,x:2},
            piece:null,
            playable:false
        },
        {
            coordinate:{y:2,x:3},
            piece:null,
            playable:false
        },
        {
            coordinate:{y:2,x:4},
            piece:null,
            playable:false
        },
        {
            coordinate:{y:2,x:5},
            piece:null,
            playable:false
        },
        {
            coordinate:{y:2,x:6},
            piece:null,
            playable:false
        },
        {
            coordinate:{y:2,x:7},
            piece:null,
            playable:false
        },
        {
            coordinate:{y:3,x:0},
            piece:null,
            playable:false
        },
        {
            coordinate:{y:3,x:1},
            piece:null,
            playable:false
        },
        {
            coordinate:{y:3,x:2},
            piece:null,
            playable:false
        },
        {
            coordinate:{y:3,x:3},
            piece:null,
            playable:false
        },
        {
            coordinate:{y:3,x:4},
            piece:null,
            playable:false
        },
        {
            coordinate:{y:3,x:5},
            piece:null,
            playable:false
        },
        {
            coordinate:{y:3,x:6},
            piece:null,
            playable:false
        },
        {
            coordinate:{y:3,x:7},
            piece:null,
            playable:false
        },
        {
            coordinate:{y:4,x:0},
            piece:null,
            playable:false
        },
        {
            coordinate:{y:4,x:1},
            piece:null,
            playable:false
        },
        {
            coordinate:{y:4,x:2},
            piece:null,
            playable:false
        },
        {
            coordinate:{y:4,x:3},
            piece:null,
            playable:false
        },
        {
            coordinate:{y:4,x:4},
            piece:null,
            playable:false
        },
        {
            coordinate:{y:4,x:5},
            piece:null,
            playable:false
        },
        {
            coordinate:{y:4,x:6},
            piece:null,
            playable:false
        },
        {
            coordinate:{y:4,x:7},
            piece:null,
            playable:false
        },
        {
            coordinate:{y:5,x:0},
            piece:null,
            playable:false
        },
        {
            coordinate:{y:5,x:1},
            piece:null,
            playable:false
        },
        {
            coordinate:{y:5,x:2},
            piece:null,
            playable:false
        },
        {
            coordinate:{y:5,x:3},
            piece:null,
            playable:false
        },
        {
            coordinate:{y:5,x:4},
            piece:null,
            playable:false
        },
        {
            coordinate:{y:5,x:5},
            piece:null,
            playable:false
        },
        {
            coordinate:{y:5,x:6},
            piece:null,
            playable:false
        },
        {
            coordinate:{y:5,x:7},
            piece:null,
            playable:false
        },
        {
            coordinate:{y:6,x:0},
            piece:{
                team:"black",
                type:"Pawn"
            },
            playable:false
        },
        {
            coordinate:{y:6,x:1},
            piece:{
                team:"black",
                type:"Pawn"
            },
            playable:false
        },
        {
            coordinate:{y:6,x:2},
            piece:{
                team:"black",
                type:"Pawn"
            },
            playable:false
        },
        {
            coordinate:{y:6,x:3},
            piece:{
                team:"black",
                type:"Pawn"
            },
            playable:false
        },
        {
            coordinate:{y:6,x:4},
            piece:{
                team:"black",
                type:"Pawn"
            },
            playable:false
        },
        {
            coordinate:{y:6,x:5},
            piece:{
                team:"black",
                type:"Pawn"
            },
            playable:false
        },
        {
            coordinate:{y:6,x:6},
            piece:{
                team:"black",
                type:"Pawn"
            },
            playable:false
        },
        {
            coordinate:{y:6,x:7},
            piece:{
                team:"black",
                type:"Pawn"
            },
            playable:false
        },
        {
            coordinate:{y:7,x:0},
            piece:{
                team:"black",
                type:"Rooke"
            },
            playable:false
        },
        {
            coordinate:{y:7,x:1},
            piece:{
                team:"black",
                type:"Knight"
            },
            playable:false
        },
        {
            coordinate:{y:7,x:2},
            piece:{
                team:"black",
                type:"Bishop"
            },
            playable:false
        },
        {
            coordinate:{y:7,x:3},
            piece:{
                team:"black",
                type:"Queen"
            },
            playable:false
        },
        {
            coordinate:{y:7,x:4},
            piece:{
                team:"black",
                type:"King"
            },
            playable:false
        },
        {
            coordinate:{y:7,x:5},
            piece:{
                team:"black",
                type:"Bishop"
            },
            playable:false
        },
        {
            coordinate:{y:7,x:6},
            piece:{
                team:"black",
                type:"Knight"
            },
            playable:false
        },
        {
            coordinate:{y:7,x:7},
            piece:{
                team:"black",
                type:"Rooke"
            },
            playable:false
        },


    ], 
    selectedPiece:{},
    capturedWhitePieces: [],
    capturedBlackPieces: []
}

export default (state = initialState, action) => {
    //when you get an action, evaluate which kind of action it is
    switch(action.type) {
        //if you get the action type of FETCH_USERS, return the state with the items from there
        case PAWN:
            const pawnState = [...state.squares]
            pawnMoves(pawnState,action.payload.location.y,action.payload.location.x,action.payload.team)
            //select the square that triggered the action and store the piece that was there
            const thisPawn = {
                coordinate:{
                    y: action.payload.location.y,
                    x: action.payload.location.x,
                },
                team:action.payload.team,
                piece:'Pawn'   
            }
            return{
                ...state,
                //set the state filtered by the available moves
                squares:pawnState,
                //select the piece so that when player clicks on a square to move to, that piece is moved there
                selectedPiece:thisPawn
            }
        case KNIGHT:
            const knightState = [...state.squares]
            knightMoves(knightState,action.payload.location.y,action.payload.location.x,action.payload.team)
            const thisKnight = {
                coordinate:{
                    y: action.payload.location.y,
                    x: action.payload.location.x,
                },
                team:action.payload.team,
                piece:'Knight'   
            }
            return{
                ...state,
                squares:knightState,
                selectedPiece:thisKnight
            }
        case BISHOP:
            const bishopState = [...state.squares]
            bishopMoves(bishopState,action.payload.location.y,action.payload.location.x,action.payload.team)
            const thisBishop = {
                coordinate:{
                    y: action.payload.location.y,
                    x: action.payload.location.x,
                },
                team:action.payload.team,
                piece:'Bishop'   
            }
            return{
                ...state,
                squares:bishopState,
                selectedPiece:thisBishop
            }
        case ROOKE:
            const rookeState = [...state.squares]
            rookeMoves(rookeState,action.payload.location.y,action.payload.location.x,action.payload.team)
            const thisRooke = {
                coordinate:{
                    y: action.payload.location.y,
                    x: action.payload.location.x,
                },
                team:action.payload.team,
                piece:'Rooke'   
            }
            return{
                ...state,
                squares:rookeState,
                selectedPiece:thisRooke
            }
        case QUEEN:
            const queenState = [...state.squares]
            queenMoves(queenState,action.payload.location.y,action.payload.location.x,action.payload.team)
            const thisQueen = {
                coordinate:{
                    y: action.payload.location.y,
                    x: action.payload.location.x,
                },
                team:action.payload.team,
                piece:'Queen'   
            }
            return{
                ...state,
                squares:queenState,
                selectedPiece:thisQueen
            }
        case KING:
            const kingState = [...state.squares]
            kingMoves(kingState,action.payload.location.y,action.payload.location.x,action.payload.team)
            const thisKing = {
                coordinate:{
                    y: action.payload.location.y,
                    x: action.payload.location.x,
                },
                team:action.payload.team,
                piece:'King'   
            }
            return{
                ...state,
                squares:kingState,
                selectedPiece:thisKing
            }
        case MOVE_PIECE:
            const movedState = [...state.squares]
            const hostages = moveSquares(movedState,action.payload.y,action.payload.x,state.selectedPiece)
            var newBlackPiecesCaptured = hostages[0].length > 0 ? [...state.capturedBlackPieces,hostages[0][0]] : [...state.capturedBlackPieces];
            var newWhitePiecesCaptured = hostages[1].length > 0 ? [...state.capturedWhitePieces,hostages[1][0]] : [...state.capturedWhitePieces]
            
            return{
                ...state,
                capturedWhitePieces:newWhitePiecesCaptured,
                capturedBlackPieces:newBlackPiecesCaptured,
                squares:movedState,
                selectedPiece:{}
            }

        case END_GAME:
            const endState = [...state.squares]
            clearBoard(endState)
            
            return{
                ...state,
                
                squares:endState,
                selectedPiece:{}
            }
        //add the new user to the items state
        
        default:
            return state
    }
}




  
    

