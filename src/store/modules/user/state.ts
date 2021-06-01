export interface UserState {
  id: number
  name: string
  color: string
  nickname: string
  img: string
  Friends: Array<UserState>
}

export const userState: UserState = {
  id: 1,
  name: '',
  color: '',
  nickname: '',
  img: '',
  Friends: []
}

