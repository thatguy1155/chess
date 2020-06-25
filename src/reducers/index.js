import { combineReducers } from 'redux'
import boardReducer from './boardReducer'
import turnReducer from './turnReducer'



//send all the reducers back to the store
export default combineReducers({
    board: boardReducer,
    turns:turnReducer
    
})