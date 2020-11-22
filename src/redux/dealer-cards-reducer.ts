import {cardsApi} from '../api/api'
import {Dispatch} from 'redux'
import {v4} from 'uuid'


let initialState: InitialStateType = {
    cards: [] as CardsType[]
} as InitialStateType

export const dealerCardsReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'DEALER-CARDS':
            return {...state, cards: action.cards}
        case 'DEALER-CARD-OPEN':
            return {
                ...state,
                cards: state.cards.map(card => card.id === action.id ? {...card, isOpen: true} : card)
            }
        default:
            return state
    }
}

// Action creators
export const dealerCardsAC = (cards: CardsType[]) => ({type: 'DEALER-CARDS', cards} as const)
export const dealerCardOpenAC = (id: string) => ({type: 'DEALER-CARD-OPEN', id} as const)

export type CardsType = {
    id: string
    url: string
    isOpen: boolean
}
// THUNK
export const getDealerCardsTC = () => (dispatch: Dispatch<ActionsType>) => {
    cardsApi.cardsList()
        .then(res => {
            const cards = res.data.map(d => ({...d, isOpen: false, id: v4()}))
            dispatch(dealerCardsAC(cards.sort(() => Math.random() - 0.5)))
        })
        .catch((error) => {
            console.log(error)
        })
}

// TYPES
export type InitialStateType = {
    cards: CardsType[]
}

export type ActionsType = DealerCardsACType | dealerCardOpenACType

export type DealerCardsACType = ReturnType<typeof dealerCardsAC>
export type dealerCardOpenACType = ReturnType<typeof dealerCardOpenAC>
