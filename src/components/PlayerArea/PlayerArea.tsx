import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {CardsResponseType} from '../../api/api'
import {AppRootStateType} from '../../redux/store'
import styles from './PlayerArea.module.css'
import commonStyles from '../../assets/styles/common.module.css'
import {resetPlayerCardsAC} from '../../redux/player-cards-reducer'
import Cards from './Cards/Cards'
import {getDealerCardsTC} from '../../redux/dealer-cards-reducer'

const PlayerArea = () => {
    const playerCards = useSelector<AppRootStateType, CardsResponseType[]>(store => store.playerCards.cards)
    const dispatch = useDispatch()
    if(playerCards.length === 5) {
        dispatch(resetPlayerCardsAC())
        dispatch(getDealerCardsTC())
    }


    return (
        <section className={`${commonStyles.container} ${styles.section}`}>
            <div className={styles.items}>
                   <Cards cards={playerCards}/>
            </div>
        </section>
    )
}

export default PlayerArea