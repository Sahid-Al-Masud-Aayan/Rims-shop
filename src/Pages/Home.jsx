import React from 'react'

const Home = () => {
  return (
    <>
    <div className=' min-h-screen bg-gradient-to-r from-[#BFF098] to-[#6FD6FF] '>
      <h1 className=" flex justify-center items-center min-h-5 text-3xl font-bold text-[#470000] ">Welcome to Medium</h1>
    <p className=" flex justify-center items-center min-h-2 text-xl font-medium text-[#353535] ">Here you can find the best and most exclusive rims for your car.</p>
    <div className=" flex justify-center items-center ">
        
  <div className=" h-[550px] w-[1100px] bg-gradient-to-r from-[#879af2] via-[#7614cd] to-[#F68616] rounded-3xl flex items-center gap-2 p-4 mt-5">
      <h2 className='flex-wrap text-5xl font-extrabold text-[#fff] leading-normal'>We are providing you the best rims for your car at the cheapest rate.</h2>
      <img src="./public/min.jpg" className='w-[780px] h-[470px] rounded-lg ' alt="store Image" />
  </div>
</div>
    </div>
    </>
  )
}

export default Home