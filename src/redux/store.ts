import {applyMiddleware, combineReducers, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import {dealerCardsReducer} from './dealer-cards-reducer'
import {playerCardsReducer} from './player-cards-reducer'


const rootReducer = combineReducers({
    dealerCards: dealerCardsReducer,
    playerCards: playerCardsReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))
export type AppRootStateType = ReturnType<typeof rootReducer>
// @ts-ignore
window.store = store