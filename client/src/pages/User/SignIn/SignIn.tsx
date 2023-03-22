

type Props = {}

const SignIn = (props: Props) => {
  return (
    <section className='flex justify-center items-center h-screen'>
      <div>
        <h1>Sign In</h1>
        <form className='flex flex-col'>
          <label htmlFor="">Email : </label>
          <input type="email" name="" id="" />
          <label htmlFor="">Password : </label>
          <input type="password" name="" id="" />
        </form>
      </div>
    </section>
  )
}

export default SignIn