import React, {useState} from 'react';
import { pawnAction } from '../../actions/boardActions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import './pieces.scss'//for media queries
const Pawn = (props) => {
    //configure state for this component
   const {team,location,pawnAction,turn} = props
   const [hovering, setHovering] = useState('off');
    
   //call action from ../../actions/boardActions
    const pawnMoves = () => {
        turn === team && pawnAction(location,team)
    } 

    //--------Functions for the appearence ----------------
   const teamParser = () => {
       return team === 'black' ? "https://i.ibb.co/0Mff62X/black-pawn.png" : "https://i.ibb.co/QJFFxmq/white-pawn.png" 
   }
   //alter style for the piece while hovering over
   const hoverSettings = (isHovering) => {
       return isHovering === 'on' && turn === team && {backgroundColor:'white',boxShadow:'5px 5px 2px 2px',padding:'2px'} 
    }

    //----------inline style----------
    const chessPiece = {
        backgroundColor:hoverSettings(hovering).backgroundColor,
       boxShadow:hoverSettings(hovering).boxShadow,
       padding:hoverSettings(hovering).padding
    }
   
    return (
        <img src={teamParser()} alt="pawn" style={chessPiece} className="pawn" onMouseOver={() => {setHovering('on')}} onMouseOut={() => {setHovering('off')}} onClick={() => {pawnMoves()}}></img>
    );
  }

  //make sure that the returned turn is always a string
  Pawn.propTypes = {
    turn: PropTypes.string.isRequired,
}

//grab the following info from the redux store at ../reducers/turnReducers
  const mapStateToProps = state => ({
    turn: state.turns.turn
  })
  // connect that info and the function endGame to this react component
  export default connect(mapStateToProps, {pawnAction})(Pawn)