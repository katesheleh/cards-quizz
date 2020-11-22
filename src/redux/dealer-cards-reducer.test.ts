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
        cards: [
            {url: 'xxx.jpg', isOpen: false, id: '1'}
        ]
    }
    newCards = [
        {url: 'yyy.jpg', isOpen: false, id: '2'},
        {url: 'www.jpg', isOpen: false, id: '3'}
    ]
})

test('Dealer Cards should be loaded', () => {
    const action = dealerCardsAC(newCards)
    const endState = dealerCardsReducer(initState, action)

    expect(endState.cards.length).toBe(3)
    expect(endState.cards[0].url).toBe('xxx.jpg')
    expect(endState.cards[2].id).toBe('3')
})

test('Dealer card should be opened', () => {
    const action = dealerCardOpenAC('1')
    const endState = dealerCardsReducer(initState, action)

    expect(endState.cards.length).toBe(1)
    expect(endState.cards[0].isOpen).toBeTruthy()
})