import { Participants } from '../MainTypes'

const baseUrl = '/participants.json'
export const getUsers = (): Promise<Participants> => fetch(baseUrl).then(res => res.json())