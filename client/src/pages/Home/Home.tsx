import { useSelector } from "react-redux"

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
        </div>
      </div>
    </section>
  )
}

export default Home
