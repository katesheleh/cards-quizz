import {CardsResponseType} from '../api/api'
import { CardsType } from './dealer-cards-reducer'

let initialState: InitialStateType = {
    cards: [] as CardsType[]
} as InitialStateType

export const playerCardsReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'PLAYER-CARDS':
            return {...state, cards: [...state.cards, action.card]}
        case 'RESET-PLAYER-CARDS':
            return {...state, cards: []}
        default:
            return state
    }
}

// Action creators
export const playerCardsAC = (card: CardsType) => ({type: 'PLAYER-CARDS', card} as const)
export const resetPlayerCardsAC = () => ({type: 'RESET-PLAYER-CARDS'} as const)


// TYPES
export type InitialStateType = {
    cards: CardsResponseType[]
}

export type ActionsType = PlayerCardsACType | ResetPlayerCardsACType

export type PlayerCardsACType = ReturnType<typeof playerCardsAC>
export type ResetPlayerCardsACType = ReturnType<typeof resetPlayerCardsAC>
