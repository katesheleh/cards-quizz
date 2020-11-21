import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {CardsResponseType} from '../../api/api'
import {AppRootStateType} from '../../redux/store'
import styles from './PlayerArea.module.css'
import commonStyles from '../../assets/styles/common.module.css'
import {resetPlayerCardsAC} from '../../redux/player-cards-reducer'
import Cards from './Cards/Cards'

const PlayerArea = () => {
    const playerCards = useSelector<AppRootStateType, CardsResponseType[]>(store => store.playerCards.cards)
    const dispatch = useDispatch()

    return (
        <section className={`${commonStyles.container} ${styles.section}`}>
            <div className={styles.items}>
                {playerCards.length < 5
                    ? <Cards cards={playerCards}/>
                    : dispatch(resetPlayerCardsAC())
                }
            </div>
        </section>
    )
}

export default PlayerArea