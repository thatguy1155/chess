import React, {useState, useEffect} from 'react';
import { endGame } from '../actions/turnActions'
import shortid from 'shortid'
import { connect } from 'react-redux'
import './board.scss'

const BlackPiecesCaptured = (props) => {
    const {capturedBlackPieces,selectedPiece,endGame,winner} = props
    const [hovering, setHovering] = useState('off')

    useEffect(() => {
        //not standard to the rules of chess, but if the king gets captured somehow then end the game
        capturedBlackPieces[capturedBlackPieces.length - 1] && capturedBlackPieces[capturedBlackPieces.length - 1].type === 'King' && endGame('white')
        // eslint-disable-next-line
    },[capturedBlackPieces]) 

    //if user clicks on the final message, then play again
    function refreshPage() {
        window.location.reload(false);
      }

    //an object of images to call when based on the caputred items
    const imageMap = {
        Pawn:"https://i.ibb.co/0Mff62X/black-pawn.png",
        Knight:"https://i.ibb.co/190N1VS/black-knight.png",
        Rooke:"https://i.ibb.co/WKM5Vvw/black-rooke.png",
        Bishop:"https://i.ibb.co/LtZgvzy/black-bishop.png",
        Queen:"https://i.ibb.co/k3ww498/black-queen.png",
        King:"https://i.ibb.co/hDfXM01/black-king.png"
    }

    //gererate a unique id to serve as a key
    capturedBlackPieces.forEach(item => {
        item.id = shortid.generate()
    })

    //--------Functions for the appearence ----------------
    //show checkmate button as an option to be clicked if the king is selected
    const kingSelected = (selectedPiece) => {
        return selectedPiece.piece === 'King' && selectedPiece.team === 'white' ? 'block' : 'none'   
      }
      //slightly change the checkmate button's color on hover
      const hoverSettings = (isHovering) => {
        return isHovering === 'on' ? '#333333': 'black'
      }
      //change the content of this element to display a final message when someone wins the game
      const winnerChosen = (winner) => {
        return winner === 'none' ? {gameOn:'block',gameOver:'none'} : {gameOn:'none',gameOver:'block'}
      }
  
      const finalMessage = () => {
        return winner === 'white' ? "white team wins" : "play again?"
      }


      //----------------inline style--------------------
    const checkmateButton = {
        height:'20px',
        width:'85px',
        border:'none',
        backgroundColor:hoverSettings(hovering),
        color:'white',
        borderRadius:'10px',
        marginTop:'10px',
        display:kingSelected(selectedPiece)
    }

    const captured = {
        display:'flex',
        flexWrap:'wrap',
        backgroundColor:'white',
        borderRadius:'10px'
    }
  
  

    const finalMessageStyle = {
        cursor:'pointer',
        color:'black'
    }
  
    return (
      <div className="captured-sizing" style={captured}>
          <div style={{display:winnerChosen(winner).gameOn}}>
            {capturedBlackPieces.map(item => (
                <img src={imageMap[item.type]} key={item.id} alt="captured piece" className="captured-piece"></img>
            ))}
            <button style={checkmateButton} onMouseOver={() => {setHovering('on')}} onMouseOut={() => {setHovering('off')}} onClick={() => {endGame('black')}}>checkmate?</button>
          </div>
          <div style={{display:winnerChosen(winner).gameOver}}>
              <h2 onClick={() => {refreshPage()}} style={finalMessageStyle}>{finalMessage()}</h2>
          </div>
        
    </div>
    );
  }

  //grab the following info from the redux store at ../reducers/turnReducers and ../reducers/boardReducers
  const mapStateToProps = state => ({
    capturedBlackPieces: state.board.capturedBlackPieces,
    selectedPiece: state.board.selectedPiece,
    winner: state.turns.winner 
  })

  // connect that info and the function endGame to this react component
  export default connect(mapStateToProps, {endGame})(BlackPiecesCaptured)