import { useState } from 'react'
import { useEffect } from 'react'
import React from 'react'


   const Users = () => {
  const [primary, changer] = useState([])

  useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => changer(json)) 
}, [])
  return (
    <>
    <div className=" flex flex-wrap gap-[30px]">
      {
        primary.map((jsons)=>{
          return(

            <div className="conatiner">
            <div className=" p-14">
            <div className=" h-[450px] w-[350px] bg-gradient-to-r from-[#D8B5FF] to-[#1EAE98] rounded-[30px] p-6 flex items-center flex-col">
            <div className=" w-[200px] h-[200px] rounded-full">
              <img className='rounded-full' src="https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg" alt="user image" />
            </div>
            <h2 className=' text-[28px] font-bold font-mono'>ID:{jsons.id}</h2>
              <h2 className=' text-[20px] font-extrabold font-sans'>User Name:{jsons.name}</h2>
              <h2 className=' text-[18px] font-semibold font-serif'>Email:{jsons.email}</h2>
              <h2 className=' text-[20px] font-sans font-semibold'>Phone:{jsons.phone}</h2>
              <h2 className=' text-[20px] font-serif font-bold'>Website:{jsons.website}</h2>
            </div>
            </div>

            </div>
              
          )
        })
      }
    </div>
    </>
  )
}

export default Users