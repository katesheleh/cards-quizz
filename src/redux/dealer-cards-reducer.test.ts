import {
    dealerCardOpenAC,
    dealerCardsAC,
    dealerCardsReducer,
    DealerCardsType,
    InitialStateType
} from './dealer-cards-reducer'

let initState: InitialStateType
let newCards: DealerCardsType[]

beforeEach(() => {
    initState = {
        cards: []
    }
    newCards = [
        {url: 'yyy.jpg', isOpen: false, id: '2'},
        {url: 'www.jpg', isOpen: false, id: '3'}
    ]
})

test('Dealer Cards should be loaded', () => {
    const action = dealerCardsAC(newCards)
    const endState = dealerCardsReducer(initState, action)

    expect(endState.cards.length).toBe(2)
    expect(endState.cards[0].url).toBe('yyy.jpg')
    expect(endState.cards[1].id).toBe('3')
})

test('Dealer card should be opened', () => {
    const initialState = {
        cards: [
            {url: 'yyy.jpg', isOpen: false, id: '2'},
            {url: 'www.jpg', isOpen: false, id: '3'}
        ]
    }
    const action = dealerCardOpenAC('3')
    const endState = dealerCardsReducer(initialState, action)

    expect(endState.cards.length).toBe(2)
    expect(endState.cards[1].isOpen).toBeTruthy()
})