import { Link } from "react-router-dom"

type Props = {}

const SignIn = (props: Props) => {
  return (
    <section className='flex justify-center items-center m-40'>
      <div>
        <h1 className='text-4xl text-center'>Sign In</h1>
        <form className='flex flex-col mt-10  w-64'>
          <label htmlFor="email">Email : </label>
          <input className='border p-2 rounded-lg' type="email" name="email" id="email" />
          <label className='mt-3' htmlFor="password">Password : </label>
          <input className='border p-2 rounded-lg' type="password" name="password" id="password" />
          <input
            className='border cursor-pointer mt-5 p-2 hover:bg-black hover:text-white transition duration-500 rounded-lg'
            type="submit" value="SEND" />
          <Link className='text-xl mt-3 text-blue-400 text-center' to='/Signup'>Sign Up?</Link>
        </form>
      </div>
    </section>
  )
}

export default SignIn