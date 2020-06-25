import React, {useState} from 'react';
import { connect } from 'react-redux'
import { moveSquare } from '../actions/boardActions'
import { changeTurns } from '../actions/turnActions'
import PropTypes from 'prop-types';
import Rooke from './pieces/Rooke'
import Knight from './pieces/Knight'
import Pawn from './pieces/Pawn'
import Bishop from './pieces/Bishop'
import King from './pieces/King'
import Queen from './pieces/Queen'



const Square = (props) => {
    const {squareInfo,moveSquare,turn,changeTurns} = props
    const [hovering, setHovering] = useState('off');
    const y = squareInfo.coordinate.y
    const x = squareInfo.coordinate.x
    
    //when you click on a playable square, move the selected piece to that square and change turns
    const movePiece = () => {
        if (squareInfo.playable === true) {
            moveSquare({y:y,x:x})
            changeTurns(turn === 'white' ? 'black' : 'white')
        }
    }

    //--------Functions for the appearence ----------------

    //designate square as black or white depending on it's position on the board.
    //also slightly alter the color on hover
    const blackOrWhite = () => {
        if(y % 2 === 0 && x % 2 === 0){
            return hovering === 'on' && squareInfo.playable ? '#DDDDDD' : 'white'
        } else if (y % 2 === 1 && x % 2 === 1) {
            return hovering === 'on' && squareInfo.playable ? '#DDDDDD' : 'white'
        } else {
            return hovering === 'on' && squareInfo.playable ? '#333333' : 'black'
        }
    }
    //change the squares opacity depending on turn or if it's a viable next move
    const isPlayable = () => {
        if (squareInfo.playable) {
            return '100%'
        } else if (squareInfo.piece && squareInfo.piece.team === turn) {
            return '100%'
        } else {
            return '50%'
        }
    }

    //------------inline style---------------
    const squareStyle = {
        height:'4rem',
        width:'4rem',
        opacity:isPlayable(),
        backgroundColor:blackOrWhite()
    }

    //display a chess piece in the square is if is designated in the store at '../reducers/boardReducers'
    const chessPiece = () => {
        if (squareInfo.piece){
            switch(squareInfo.piece.type) {
                case 'Rooke':
                    return <Rooke team={squareInfo.piece.team} location={squareInfo.coordinate}/>
                case 'Knight':
                    return <Knight team={squareInfo.piece.team} location={squareInfo.coordinate}/>
                case 'Bishop':
                    return <Bishop team={squareInfo.piece.team} location={squareInfo.coordinate}/>
                case 'Pawn':
                    return <Pawn team={squareInfo.piece.team} location={squareInfo.coordinate}/>
                case 'King':
                    return <King team={squareInfo.piece.team} location={squareInfo.coordinate}/>
                case 'Queen':
                    return <Queen team={squareInfo.piece.team} location={squareInfo.coordinate}/>
                default:
                    break
                }
        } else {
            return ''
        }
    }

    const chosenPiece = chessPiece()

    return (
      <div style={squareStyle} onMouseOver={() => {setHovering('on')}} onMouseOut={() => {setHovering('off')}}onClick={movePiece}>{chosenPiece}</div>
    );
  }

  //make sure the proper props are being passed through redux
Square.propTypes = {
    changeTurns: PropTypes.func.isRequired,
    turn: PropTypes.string.isRequired,
}


// //below we connect the values from the state to the component
const mapStateToProps = state => ({
    selected: state.board.selectedPiece,
    turn: state.turns.turn

})


  export default connect(mapStateToProps, {moveSquare,changeTurns})(Square)