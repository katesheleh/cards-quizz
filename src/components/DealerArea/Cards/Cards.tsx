import React from 'react'
import styles from './Cards.module.css'
import Card from './Card/Card'
import {DealerCardsType} from '../../../redux/dealer-cards-reducer'


const Cards = (props: PropsType) => {

    return (
        <div className={styles.items}>
            {props.cards.map(
                (d) => <Card key={d.id} card={d} onClick={props.onClick}/>
            )}
        </div>
    )
}

export default React.memo(Cards)


// TYPES
type PropsType = {
    cards: DealerCardsType[]
    onClick: (card: DealerCardsType) => void
}