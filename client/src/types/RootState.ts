export interface RootState {
  User: {
    id: string
    userName: string
    userEmail: string
  }
  SignIn: {
    userEmail: string,
    userPassword: string
  }
  Signup: {
    userName: string
    userEmail: string
    userPassword: string
  }
  Token: string
  Alert: string
}