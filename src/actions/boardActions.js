import { PAWN,KNIGHT,BISHOP,ROOKE,QUEEN,KING,MOVE_PIECE } from './types'

export const pawnAction = (coordinates,team) => dispatch => {
    dispatch({
        type: PAWN,
        payload: {location:coordinates,team:team}
    })
}

export const knightAction = (coordinates,team) => dispatch => {
    dispatch({
        type: KNIGHT,
        payload: {location:coordinates,team:team}
    })
}
export const bishopAction = (coordinates,team) => dispatch => {
    dispatch({
        type: BISHOP,
        payload: {location:coordinates,team:team}
    })
}

export const rookeAction = (coordinates,team) => dispatch => {
    dispatch({
        type: ROOKE,
        payload: {location:coordinates,team:team}
    })
}

export const queenAction = (coordinates,team) => dispatch => {
    dispatch({
        type: QUEEN,
        payload: {location:coordinates,team:team}
    })
}
export const kingAction = (coordinates,team) => dispatch => {
    dispatch({
        type: KING,
        payload: {location:coordinates,team:team}
    })
}


export const moveSquare = (coordinates) => dispatch => {
    dispatch({
        type: MOVE_PIECE,
        payload: coordinates
    })
}


