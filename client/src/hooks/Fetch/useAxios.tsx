import useSWR from 'swr'
import axios from 'axios'

const useAxios = (initUrl: string) => {
  const { data, error } = useSWR(async () => {
    try {
      const response = await axios.get(initUrl)
      return response.data
    } catch (error) {
      console.log(error)
    }
  })
  return { data, error }
}

export default useAxios