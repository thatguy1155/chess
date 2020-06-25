import { CHANGE_TURNS,END_GAME } from './types'

export const changeTurns = (postData) => dispatch => {
    dispatch({
        type: CHANGE_TURNS,
        payload: postData
    })
}

export const endGame = (postData) => dispatch => {
    dispatch({
        type: END_GAME,
        payload: postData
    })
}