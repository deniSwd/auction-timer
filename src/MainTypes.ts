export type Participant = {
  'id': number
  'online': boolean
  'name': string
  'lead time': number
  'payment terms': string
}
export type Participants = {
  participants: Array<Participant>
}