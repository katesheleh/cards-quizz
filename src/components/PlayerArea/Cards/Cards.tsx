import React from 'react'
import styles from './Cards.module.css'
import {PlayerCardsType} from '../../../redux/player-cards-reducer'


const Cards = (props: PropsType) => {

    return (
        <div className={styles.items}>
            <div className={styles.emptyCards}>
                <div className={styles.emptyCard}></div>
                <div className={styles.emptyCard}></div>
                <div className={styles.emptyCard}></div>
                <div className={styles.emptyCard}></div>
            </div>
            {props.cards.map((d) => {
                return (
                    <div key={d.id} className={styles.item}>
                        <img src={d.url} alt='card' className={styles.img}/>
                    </div>
                )
            })}
        </div>
    )
}

export default React.memo(Cards)


// TYPES
type PropsType = {
    cards: PlayerCardsType[]
}