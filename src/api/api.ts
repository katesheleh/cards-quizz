import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://svquizz.s3.eu-central-1.amazonaws.com',
})

export const cardsApi = {
    cardsList() {
        return instance.get<CardsResponseType[]>(`/cards.json`)
    }
}

export type CardsResponseType = {
    url: string
}