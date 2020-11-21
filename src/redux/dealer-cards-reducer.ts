
import {cardsApi, CardsResponseType} from '../api/api'
import {Dispatch} from 'redux'


let initialState: InitialStateType = {
    cards: [] as CardsResponseType[]
} as InitialStateType

export const dealerCardsReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'DEALER-CARDS':
            return {...state, cards: action.cards}
        default:
            return state
    }
}

// Action creators
export const dealerCardsAC = (cards: CardsResponseType[]) => ({type: 'DEALER-CARDS', cards} as const)


// THUNK
export const getDealerCardsTC = () => (dispatch: Dispatch<ActionsType>) => {
    cardsApi.cardsList()
        .then(res => {
            console.log(res.data)
            dispatch(dealerCardsAC(res.data))
        })
        .catch((error) => {
            console.log(error)
        })
}

// TYPES
export type InitialStateType = {
    cards: CardsResponseType[]
}

export type ActionsType = DealerCardsACType

export type DealerCardsACType = ReturnType<typeof dealerCardsAC>
