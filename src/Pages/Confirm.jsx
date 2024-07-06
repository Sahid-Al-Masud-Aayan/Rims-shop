import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { dataOfproduct } from '../Slices/rimSlice'


const Confirm = () => {
    const major= useSelector((state=>(state.counter.value)))
const navigator = useNavigate()
const dispatcher = useDispatch()

    const FirstPage = (rims)=>{
        navigator('/')
        dispatcher(dataOfproduct(rims))
      }
  return (
    <>
    
    <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col justify-center items-center">

        <h1 className=' text-6xl font-bold mb-2'>Order is confirmed!</h1>
    <button onClick={()=>FirstPage()} className=' w-[300px] h-[80px] rounded-lg bg-gradient-to-r from-[#09203F] to-[#537895] mb-5 mt-3 text-2xl text-[#fff] font-medium hover:text-[#fff]'>Continue Shopping</button>
        </div>
    </div>
    </>
  )
}

export default Confirm