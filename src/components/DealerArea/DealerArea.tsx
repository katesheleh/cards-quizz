import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getDealerCardsTC} from '../../redux/dealer-cards-reducer'
import {CardsResponseType} from '../../api/api'
import {AppRootStateType} from '../../redux/store'
import commonStyles from '../../assets/styles/common.module.css'
import Cards from './Cards/Cards'
import {playerCardsAC} from '../../redux/player-cards-reducer'

const DealerArea = () => {
    const dealerCards = useSelector<AppRootStateType, CardsResponseType[]>(store => store.dealerCards.cards)

    const dispatch = useDispatch()

    const onClickHandler = (url: string) => {
        dispatch(playerCardsAC({url: url}))
    }


    useEffect(() => {
        dispatch(getDealerCardsTC())
    }, [])

    return (
        <section className={commonStyles.container}>
            <Cards cards={dealerCards} onClick={onClickHandler}/>
        </section>
    )
}

export default DealerArea