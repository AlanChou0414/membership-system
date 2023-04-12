import { useSelector } from "react-redux"
import { useEffect } from "react"

//type
import { RootState } from "../../types/RootState"

const Home = () => {
  const { userName, userEmail } = useSelector((state: RootState) => state.User)

  return (
    <section className='flex justify-center items-center m-40'>
      <div>
        <h1 className='text-4xl text-center'>Welcome</h1>
        <div className='flex flex-col mt-10  w-64'>
          <div>Name : {userName}</div>
          <div>Email : {userEmail}</div>
          <input
            className='border cursor-pointer mt-5 p-2 hover:bg-black hover:text-white transition duration-500 rounded-lg'
            type="button" value="Logout" />
        </div>
      </div>
    </section>
  )
}

export default Home
