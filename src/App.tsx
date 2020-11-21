import React from 'react'
import './App.css'
import DealerArea from './components/DealerArea/DealerArea'
import PlayerArea from './components/PlayerArea/PlayerArea'

function App() {

    return (
        <div className="App">
            <PlayerArea/>
            <DealerArea/>
        </div>
    )
}

export default App
