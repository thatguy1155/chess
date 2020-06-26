import React, {useState,useEffect} from 'react'
import { endGame } from '../actions/turnActions'
import shortid from 'shortid'
import { connect } from 'react-redux'
import './board.scss'//for media queries

//main react component
const WhitePiecesCaptured = (props) => {
    const {capturedWhitePieces,selectedPiece,endGame,winner} = props
    const [hovering, setHovering] = useState('off')

    useEffect(() => {
      //not standard to the rules of chess, but if the king gets captured somehow then end the game
      capturedWhitePieces[capturedWhitePieces.length - 1] && capturedWhitePieces[capturedWhitePieces.length - 1].type === 'King' && endGame('black')
      // eslint-disable-next-line
    },[capturedWhitePieces])

    function refreshPage() {
      window.location.reload(false);
    }

    //pieces
    capturedWhitePieces.forEach(item => {
      item.id = shortid.generate()
  })


    //an object of images to call when based on the caputred items
    const imageMap = {
        Pawn:"https://i.ibb.co/QJFFxmq/white-pawn.png",
        Knight:"https://i.ibb.co/y5xJVJq/white-knight.png",
        Rooke:"https://i.ibb.co/sWhMDQF/white-rooke.png",
        Bishop:"https://i.ibb.co/F4TcRpS/white-bishop.png",
        Queen:"https://i.ibb.co/my2t1Kk/white-queen.png",
        King:"https://i.ibb.co/Y06LN78/white-king.png"
    }
    
    
    //--------Functions for the appearence ----------------

    //show checkmate button as an option to be clicked if the king is selected
    const kingSelected = (selectedPiece) => {
      return selectedPiece.piece === 'King' && selectedPiece.team === 'black' ? 'block' : 'none'   
    }
    //slightly change the checkmate button's color on hover
    const hoverSettings = (isHovering) => {
      return isHovering === 'on' ? '#DDDDDD': 'white'
    }
    //change the content of this element to display a final message when someone wins the game
    const winnerChosen = (winner) => {
      return winner === 'none' ? {gameOn:'block',gameOver:'none'} : {gameOn:'none',gameOver:'block'}
    }

    const finalMessage = () => {
      return winner === 'black' ? "black team wins" : "play again?"
    }

    //---------------inline style----------------
    const checkmateButton = {
      height:'20px',
      width:'85px',
      border:'none',
      backgroundColor:hoverSettings(hovering),
      color:'black',
      borderRadius:'10px',
      marginTop:'10px',
      display:kingSelected(selectedPiece)
    }

    const captured = {
      display:'flex',
      flexWrap:'wrap',
      backgroundColor:'black',
      borderRadius:'10px'
    }

    

    const finalMessageStyle = {
      cursor:'pointer',
      color:'white'
  }

  
    return (
      <div className="captured-sizing" style={captured}>
          <div style={{display:winnerChosen(winner).gameOn}}>
            {capturedWhitePieces.map(item => (
                <img src={imageMap[item.type]} key={item.id} alt="captured piece" className="captured-piece"></img>
            ))}
            <button style={checkmateButton} onMouseOver={() => {setHovering('on')}} onMouseOut={() => {setHovering('off')}} onClick={() => {endGame('white')}}>checkmate?</button>
          </div>
          <div style={{display:winnerChosen(winner).gameOver}}>
              <h2 onClick={() => {refreshPage()}} style={finalMessageStyle}>{finalMessage()}</h2>
          </div>
    </div>
    );
  }
  
  //grab the following info from the redux store at ../reducers/turnReducers and ../reducers/boardReducers
  const mapStateToProps = state => ({
    capturedWhitePieces: state.board.capturedWhitePieces,
    selectedPiece: state.board.selectedPiece,
    winner:state.turns.winner 
  })

  // connect that info and the function endGame to this react component
  export default connect(mapStateToProps, {endGame})(WhitePiecesCaptured)