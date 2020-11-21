import React, {useState} from 'react'
import styles from './Card.module.css'

const Card = (props: PropsType) => {
    const [flipCard, setFlipCard] = useState(false)

    const onClickCardHandler = () => {
        if (!flipCard) {
            props.onClick(props.card)
            setFlipCard(true)
        }
    }

    return (
        <div
            className={`${styles.item} ${flipCard ? styles.flipped : ''}`}
            onClick={onClickCardHandler}>

            <div className={`${styles.inner}`}>
                <div className={styles.back}></div>

                <div className={styles.front}>
                    <img src={props.card} alt='card' className={styles.img}/>
                </div>
            </div>
        </div>
    )
}

export default Card


// TYPES
type PropsType = {
    card: string
    onClick: (url: string) => void
}