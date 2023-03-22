// useFetch
export interface FetchDataType {
  initUrl: string
  initData?: any
  query?: string
}
export interface FetchDataStateType {
  loading: boolean
  error: boolean
  data: any
  query?: string | undefined
}