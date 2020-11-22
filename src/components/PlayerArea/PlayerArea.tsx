import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../redux/store'
import styles from './PlayerArea.module.css'
import commonStyles from '../../assets/styles/common.module.css'
import {PlayerCardsType, resetPlayerCardsAC} from '../../redux/player-cards-reducer'
import Cards from './Cards/Cards'
import {getDealerCardsTC} from '../../redux/dealer-cards-reducer'

const PlayerArea = () => {

    const playerCards = useSelector<AppRootStateType, PlayerCardsType[]>(store => store.playerCards.cards)
    const dispatch = useDispatch()

    if (playerCards.length === 5) {
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

export default React.memo(PlayerArea)