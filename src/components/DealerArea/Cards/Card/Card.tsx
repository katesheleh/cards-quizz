import React, {useState} from 'react'
import styles from './Card.module.css'
import {CardsType} from '../../../../redux/dealer-cards-reducer'

const Card = (props: PropsType) => {
    // const [flipCard, setFlipCard] = useState(false)

    const onClickCardHandler = () => {
        if (!props.card.isOpen) {
            props.onClick(props.card)
        }
    }

    return (
        <div
            className={`${styles.item} ${props.card.isOpen ? styles.flipped : ''}`}
            onClick={onClickCardHandler}>

            <div className={`${styles.inner}`}>
                <div className={styles.back}></div>

               <div className={styles.front}>
                    <img src={props.card.url} alt='card' className={styles.img}/>
                </div>
            </div>
        </div>
    )
}

export default Card


// TYPES
type PropsType = {
    card: CardsType
    onClick: (card:CardsType) => void
}