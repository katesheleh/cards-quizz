import {cardsApi} from '../api/api'
import {Dispatch} from 'redux'
import {v4} from 'uuid'


let initialState: InitialStateType = {
    cards: [] as DealerCardsType[]
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
export const dealerCardsAC = (cards: DealerCardsType[]) => ({type: 'DEALER-CARDS', cards} as const)
export const dealerCardOpenAC = (id: string) => ({type: 'DEALER-CARD-OPEN', id} as const)

// THUNK
export const getDealerCardsTC = () => (dispatch: Dispatch<ActionsType>) => {
    cardsApi.cardsList()
        .then(res => {
            const cards = res.data.map(d => ({...d, isOpen: false, id: v4()}))
            // receive data and shuffle it
            dispatch(dealerCardsAC(cards.sort(() => Math.random() - 0.5)))
        })
        .catch((error) => {
            console.log(error)
        })
}

// TYPES
export type InitialStateType = {
    cards: DealerCardsType[]
}

export type DealerCardsType = {
    id: string
    url: string
    isOpen: boolean
}

export type ActionsType = DealerCardsACType | DealerCardOpenACType

export type DealerCardsACType = ReturnType<typeof dealerCardsAC>
export type DealerCardOpenACType = ReturnType<typeof dealerCardOpenAC>
