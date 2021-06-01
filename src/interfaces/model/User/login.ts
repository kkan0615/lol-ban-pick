/**
 * For the user Login
 */
export interface UserLoginForm {
  id: string
  password: string
  rememberId: boolean
}

export interface UserLoginReturn {
  token: string
}
