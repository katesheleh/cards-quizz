import React, {useEffect} from 'react'
import './App.css';
import {useDispatch} from 'react-redux'
import {getCardsTC} from './redux/cards-reducer'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCardsTC())
  })
  return (
    <div className="App">

    </div>
  );
}

export default App;
