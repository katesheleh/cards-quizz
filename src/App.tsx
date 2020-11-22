import React, {useEffect} from 'react'
import './App.css'
import DealerArea from './components/DealerArea/DealerArea'
import PlayerArea from './components/PlayerArea/PlayerArea'
import {getDealerCardsTC} from './redux/dealer-cards-reducer'
import {useDispatch} from 'react-redux'

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getDealerCardsTC())
    }, [])
    return (
        <div className="App">
            <PlayerArea/>
            <DealerArea/>
        </div>
    )
}

export default App
