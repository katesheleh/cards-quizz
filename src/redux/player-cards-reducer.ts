import { DealerCardsType } from './dealer-cards-reducer'

let initialState: InitialStateType = {
    cards: [] as DealerCardsType[]
} as InitialStateType

export const playerCardsReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'PLAYER-CARDS':
            return {...state, cards: [...state.cards, {url: action.card.url, id: action.card.id}]}
        case 'RESET-PLAYER-CARDS':
            return {...state, cards: []}
        default:
            return state
    }
}

// Action creators
export const playerCardsAC = (card: PlayerCardsType) => ({type: 'PLAYER-CARDS', card} as const)
export const resetPlayerCardsAC = () => ({type: 'RESET-PLAYER-CARDS'} as const)


// TYPES
export type InitialStateType = {
    cards: PlayerCardsType[]
}

export type PlayerCardsType = {
    url: string
    id: string
}

export type ActionsType = PlayerCardsACType | ResetPlayerCardsACType

export type PlayerCardsACType = ReturnType<typeof playerCardsAC>
export type ResetPlayerCardsACType = ReturnType<typeof resetPlayerCardsAC>
