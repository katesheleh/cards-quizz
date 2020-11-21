import React from 'react'
import styles from './Cards.module.css'
import {CardsResponseType} from '../../../api/api'
import {playerCardsAC} from '../../../redux/player-cards-reducer'
import {useDispatch} from 'react-redux'


const Cards = (props: PropsType) => {
    const shuffledDealerCards = props.cards.sort(() => Math.random() - 0.5)
    const dispatch = useDispatch()

    const onClickHandler = (url: string) => {
        dispatch(playerCardsAC({url: url}))
    }
    return (
        <div className={styles.items}>
            {shuffledDealerCards.map((d) => {
                return (
                    <div key={Math.random()} className={styles.item} onClick={() => onClickHandler(d.url)}>
                        <img
                            src={d.url}
                            alt='card'
                            className={styles.img}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Cards


// TYPES
type PropsType = {
    cards: CardsResponseType[]
}