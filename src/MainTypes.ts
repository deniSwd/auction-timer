export type Participant = {
  id: number
  online: boolean
  name: string
  leadTime: number
  paymentTerms: string
}
export type Participants = {
  participants: Array<Participant>
}