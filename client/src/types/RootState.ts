export interface RootState {
  user: {
    signin: {
      userEmail: string,
      userPassword: string
    },
    signup: {
      userName: string,
      userEmail: string,
      userPassword: string
    }
  }
  token: string
}