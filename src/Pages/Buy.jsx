import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { dataOfproduct } from '../Slices/rimSlice'

const Buy = () => {
const major= useSelector((state=>(state.counter.value)))
const navigator = useNavigate()
const dispatcher = useDispatch()

const finalPage = (rims)=>{
    navigator('/done')
    dispatcher(dataOfproduct(rims))
  }

  return (
    <>
<div className="p-10">
<div className=" w-full h-[550px] bg-gradient-to-r from-[#868F96] to-[#596164] p-10 mb-20">
            <div className=" flex justify-between">
                <img className=' w-[450px] h-[450px]' src={major.image_url} alt="Rim Image" />
                <div className=" flex flex-col justify-center items-center">
                    <h1 className=' text-5xl font-extrabold ml-40 mb-10 '>{major.brand_name} {major.model_name} {major.color} {major.wheel_diameter}inch Wheels</h1>
                <ul className=' text-3xl font-medium'>
                    <li>Diameter- {major.wheel_diameter}inch</li>
                    <li>Wheel Width- {major.wheel_width}J</li>
                    <li>Offset-ET{major.offset}</li>
                </ul>
                <h2 className=' text-center mt-10 text-5xl font-extrabold text-[#ff0202]'>Price- {major.high_price} taka</h2>
                <button onClick={()=>finalPage()} className=' w-[300px] h-[100px] rounded-lg bg-gradient-to-r from-[#e7ff2f] to-[#65dd24] mb-5 mt-3 text-4xl font-bold hover:text-[#fff]'>Buy now</button>
            </div>
            
                </div>
        </div>
</div>
    </>
  )
}

export default Buy