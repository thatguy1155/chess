
//bring in the types from actions/types
import { CHANGE_TURNS,END_GAME } from '../actions/types'

//create initial state
const initialState = {
    turn: 'white',
    winner: 'none'
}

export default (state = initialState, action) => {
    //when you get an action, evaluate which kind of action it is
    switch(action.type) {
        //if you get the action type of CHANGE_TURNS, return the state with the items from there
        case CHANGE_TURNS:
            const newTurn = action.payload
            return{
                ...state,
                turn:newTurn,
            }
        case END_GAME:
            const winner = action.payload
            return{
                ...state,
                turn:'none',
                winner:winner
            }
        default:
            return state
    }
}

