import React from 'react';
import { Provider } from 'react-redux'
import Chessboard from './components/Chessboard'
import store from './Store'
import './App.css';

function App() {
  return (
    <Provider store={store}>
        <div className="App" style={teal}>
          <Chessboard />
        </div>
    </Provider>
  );
}

const teal = {
  backgroundColor:'lightgrey',
  height:'100vh'
}

export default App;
