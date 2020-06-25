import React, {useState} from 'react';
import { bishopAction } from '../../actions/boardActions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

const Bishop = (props) => {
   const {team,location,bishopAction,turn} = props
   const [hovering, setHovering] = useState('off');
    
   //call action from ../../actions/boardActions
   const bishopMoves = () => {
        turn === team && bishopAction(location,team)
    } 

    //--------Functions for the appearence ----------------
    const teamParser = () => {
        return team === 'black' ? "https://i.ibb.co/LtZgvzy/black-bishop.png" : "https://i.ibb.co/F4TcRpS/white-bishop.png" 
    }
    //alter style for the piece while hovering over
    const hoverSettings = (isHovering) => {
        return isHovering === 'on' && turn === team && {backgroundColor:'white',boxShadow:'5px 5px 2px 2px',padding:'2px'} 
    }

    //----------inline style----------
    const chessPiece = {
        width:'2rem',
        height:'3rem',
        backgroundColor:hoverSettings(hovering).backgroundColor,
       boxShadow:hoverSettings(hovering).boxShadow,
       padding:hoverSettings(hovering).padding
    }
   
    return (
        <img src={teamParser()} alt="bishop" style={chessPiece} onMouseOver={() => {setHovering('on')}} onMouseOut={() => {setHovering('off')}} onClick={() => {bishopMoves()}}></img>
    );
  }
//make sure that the returned turn is always a string
  Bishop.propTypes = {
    turn: PropTypes.string.isRequired,
}
//grab the following info from the redux store at ../reducers/turnReducers
  const mapStateToProps = state => ({
    turn: state.turns.turn
  })
// connect that info and the function endGame to this react component
  export default connect(mapStateToProps, {bishopAction})(Bishop)