import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {dealerCardOpenAC, DealerCardsType} from '../../redux/dealer-cards-reducer'
import {AppRootStateType} from '../../redux/store'
import commonStyles from '../../assets/styles/common.module.css'
import Cards from './Cards/Cards'
import {playerCardsAC} from '../../redux/player-cards-reducer'

const DealerArea = () => {

    const dealerCards = useSelector<AppRootStateType, DealerCardsType[]>(store => store.dealerCards.cards)
    const dispatch = useDispatch()

    const onClickHandler = (card: DealerCardsType) => {
        dispatch(playerCardsAC(card))
        if (dealerCards.filter(d => d.isOpen).length < 4) {
            dispatch(dealerCardOpenAC(card.id))
        }
    }

    return (
        <section className={commonStyles.container}>
            <Cards cards={dealerCards} onClick={onClickHandler}/>
        </section>
    )
}

export default React.memo(DealerArea)