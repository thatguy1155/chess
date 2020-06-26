import React, {useState} from 'react';
import { rookeAction } from '../../actions/boardActions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import './pieces.scss'


const Rooke = (props) => {
   const {team,location,rookeAction,turn} = props
   const [hovering, setHovering] = useState('off');

   //call action from ../../actions/boardActions
   const rookeMoves = () => {
        turn === team && rookeAction(location,team)
    } 
    
    //--------Functions for the appearence ----------------
   const teamParser = () => {
        return team === 'black' ? "https://i.ibb.co/WKM5Vvw/black-rooke.png" : "https://i.ibb.co/sWhMDQF/white-rooke.png" 
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
        <img src={teamParser()} alt="knight" className="rooke" style={chessPiece} onMouseOver={() => {setHovering('on')}} onMouseOut={() => {setHovering('off')}} onClick={() => {rookeMoves()}}></img>
    );
  }

  //make sure that the returned turn is always a string
  Rooke.propTypes = {
    turn: PropTypes.string.isRequired,
}
//grab the following info from the redux store at ../reducers/turnReducers
  const mapStateToProps = state => ({
    turn: state.turns.turn
  })
// connect that info and the function endGame to this react component
  export default connect(mapStateToProps, {rookeAction})(Rooke)