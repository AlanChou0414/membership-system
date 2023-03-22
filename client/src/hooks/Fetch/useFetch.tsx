import { useEffect, useState } from 'react'
import axios from "axios"

// types
import { FetchDataType } from '../../types/DataType'
import { FetchDataStateType } from '../../types/DataType'

const useFetch = ({ initUrl, initData, query }: FetchDataType) => {
  const [fetchState, setFetchState] = useState<FetchDataStateType>({
    loading: false,
    error: false,
    data: initData,
    query: ''
  })
  useEffect(() => {
    const getData = async () => {
      setFetchState({ ...fetchState, loading: true })
      try {
        const response = (await axios(initUrl + query)).data
        setFetchState({ ...fetchState, data: response })
      }
      catch (err) {
        setFetchState({ ...fetchState, error: true })
        throw new Error('useFetch hook get error data!')
      }
      setFetchState({ ...fetchState, loading: false })
    }
    getData()
  }, [query])
  return ({ fetchState })
}

export default useFetch