import React, {useState} from 'react';
import { queenAction } from '../../actions/boardActions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';


const Queen = (props) => {
   const {team,location,queenAction,turn} = props
   const [hovering, setHovering] = useState('off');

   
   //call action from ../../actions/boardActions
   const queenMoves = () => {
        turn === team && queenAction(location,team)
    } 

    //--------Functions for the appearence ----------------
    const teamParser = () => {
        return team === 'black' ? "https://i.ibb.co/k3ww498/black-queen.png" : "https://i.ibb.co/my2t1Kk/white-queen.png" 
    }
    //alter style for the piece while hovering over
    const hoverSettings = (isHovering) => {
        return isHovering === 'on' && turn === team && {backgroundColor:'white',boxShadow:'5px 5px 2px 2px',padding:'2px'} 
    }

//----------inline style----------
    const chessPiece = {
        width:'2.25rem',
        height:'3.5rem',
        backgroundColor:hoverSettings(hovering).backgroundColor,
       boxShadow:hoverSettings(hovering).boxShadow,
       padding:hoverSettings(hovering).padding
    }
   
    return (
        <img src={teamParser()} alt="queen" style={chessPiece} onMouseOver={() => {setHovering('on')}} onMouseOut={() => {setHovering('off')}} onClick={() => {queenMoves()}}></img>
    );
  }
  

 
//make sure that the returned turn is always a string
  Queen.propTypes = {
    turn: PropTypes.string.isRequired,
}
//grab the following info from the redux store at ../reducers/turnReducers
  const mapStateToProps = state => ({
    turn: state.turns.turn
  })
// connect that info and the function endGame to this react component
  export default connect(mapStateToProps, {queenAction})(Queen)