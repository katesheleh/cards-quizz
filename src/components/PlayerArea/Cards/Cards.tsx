import React from 'react'
import styles from './Cards.module.css'
import {CardsResponseType} from '../../../api/api'


const Cards = (props: PropsType) => {
    return (
        <div className={styles.items}>
            {props.cards.map((d) => {
                return (
                    <div key={Math.random()} className={styles.item}>
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