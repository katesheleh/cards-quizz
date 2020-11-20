import {Dispatch} from 'redux'
import {cardsApi} from '../api/api'


let initialState: InitialStateType = {} as InitialStateType

export const cardsReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'STATISTICS':
            return {...state}
        default:
            return state
    }
}

// Action creators
export const cardsAC = () => ({type: 'STATISTICS'} as const)


// THUNK

export const getCardsTC = () => (dispatch: Dispatch<ActionsType>) => {
    cardsApi.cardsList()
        .then(res => {
            console.log(res)
        })
        .catch((error) => {
            console.log(error)
        })
}

// TYPES
export type InitialStateType = {}

export type ActionsType = CardsACType

export type CardsACType = ReturnType<typeof cardsAC>
