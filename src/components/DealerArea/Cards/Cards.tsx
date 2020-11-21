import React from 'react'
import styles from './Cards.module.css'
import {CardsResponseType} from '../../../api/api'
import Card from './Card/Card'


const Cards = (props: PropsType) => {
    const shuffledDealerCards = props.cards.sort(() => Math.random() - 0.5)

    return (
        <div className={styles.items}>
            {shuffledDealerCards.map(
                (d) => <Card key={Math.random()} card={d.url} onClick={() => props.onClick(d.url)}/>
            )}
        </div>
    )
}

export default Cards


// TYPES
type PropsType = {
    cards: CardsResponseType[]
    onClick: (url: string) => void
}