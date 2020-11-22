import React, {useEffect} from 'react'
import './App.module.css'
import DealerArea from './components/DealerArea/DealerArea'
import PlayerArea from './components/PlayerArea/PlayerArea'
import {getDealerCardsTC} from './redux/dealer-cards-reducer'
import {useDispatch} from 'react-redux'
import Footer from './components/Footer/Footer'
import styles from './App.module.css'

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getDealerCardsTC())
    }, [])
    return (
        <div className={styles.app}>
            <div className={styles.main}>
                <PlayerArea/>
                <DealerArea/>
            </div>
            <Footer/>
        </div>
    )
}

export default App
