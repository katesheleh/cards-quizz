import React from 'react'
import styles from './Cards.module.css'
import {CardsResponseType} from '../../../api/api'
import Card from './Card/Card'
import {CardsType} from '../../../redux/dealer-cards-reducer'


const Cards = (props: PropsType) => {
    // @ts-ignore
    const shuffledDealerCards = props.cards.sort((a, b) => a.id - b.id)

    return (
        <div className={styles.items}>
            {shuffledDealerCards.map(
                (d) => <Card key={d.id} card={d} onClick={props.onClick}/>
            )}
        </div>
    )
}

export default Cards


// TYPES
type PropsType = {
    cards: CardsType[]
    onClick: (card:CardsType) => void
}