import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import WhiteCaptured from './WhitePiecesCaptured'
import BlackCaptured from './BlackPiecesCaptured'
import Square from './Square'
import { connect } from 'react-redux'
import './board.scss'



const Chessboard = (props) => {
  const {squares} = props

  //----------inline style----------
  const flex = {
    display:'flex',
    padding:'5ch'
  }
  //make the 8x8 grid where the added posts fall into
  const boardGrid = {
    display: 'grid',
    marginLeft:'4%',
    gridTemplateColumns: 'repeat(8, 0fr)',
    gridGap: '0rem',
    height:'100%',
  }


  return (
    <React.Fragment>
      <CssBaseline />
      <div style={flex} className="flex-direction">
        <BlackCaptured />
        <Container maxWidth="sm">
          <div style={boardGrid}>
            {squares.map(square => (
                <Square key={[square.coordinate.y,square.coordinate.x]} squareInfo={square} />
            ))}
          </div>
        </Container>
        <WhiteCaptured />
      </div>
    </React.Fragment>
      
  );
}



const mapStateToProps = state => ({
  squares: state.board.squares, //we use posts here because its how the postreducer was defined in root reducer(reducers/index.js) on line 7
})

export default connect(mapStateToProps, {})(Chessboard)