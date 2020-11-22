import {InitialStateType, playerCardsAC, playerCardsReducer, resetPlayerCardsAC} from './player-cards-reducer'


let initState: InitialStateType

beforeEach(() => {
    initState = {
        cards: [
            {url: 'yyy.jpg', id: '1'},
            {url: 'www.jpg', id: '2'}
        ]
    }
})

test('Should be added element to player array', () => {
    const newCard = {url: 'aaa.png', id: '3'}
    const action = playerCardsAC(newCard)
    const endState = playerCardsReducer(initState, action)

    expect(endState.cards.length).toBe(1)
    expect(endState.cards[2].url).toBe('aaa.png')
})

test('Array should be empty', () => {
    const action = resetPlayerCardsAC()
    const endState = playerCardsReducer(initState, action)

    expect(endState.cards.length).toBe(0)
})