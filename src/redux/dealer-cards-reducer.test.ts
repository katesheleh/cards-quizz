import {dealerCardsAC, dealerCardsReducer, InitialStateType} from './dealer-cards-reducer'

let initState: InitialStateType

beforeEach(() => {
    initState = {
        cards: []
    }
})

test('Dealer Cards should be loaded', () => {
    const newCards = [
        {url: 'yyy.jpg'},
        {url: 'www.jpg'}
    ]
    const action = dealerCardsAC(newCards)
    const endState = dealerCardsReducer(initState, action)

    expect(endState.cards.length).toBe(2)
    expect(endState.cards[0].url).toBe('yyy.jpg')
})