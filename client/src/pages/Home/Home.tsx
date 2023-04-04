import React from 'react'

type Props = {}

const Home = (props: Props) => {
  return (
    <section className='flex justify-center items-center m-40'>
      <div>
        <h1 className='text-4xl text-center'>Sign Up</h1>
        <div className='flex flex-col mt-10  w-64'>
          <div>Name :</div>
          <div>Email :</div>
        </div>
      </div>
    </section>
  )
}

export default Home