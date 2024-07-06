import React from 'react'
import { useSelector } from 'react-redux'


const Data = () => {

const major= useSelector((state=>(state.counter.value)))

  return (
    <>
    <div className=" p-10">
        <div className=" w-full h-[550px] bg-gradient-to-r from-[#93A5CF] to-[#E4EfE9] p-10 mb-20">
            <div className=" flex justify-between">
                <img className=' w-[450px] h-[450px]' src={major.image_url} alt="Rim Image" />
                <div className=" flex flex-col justify-center items-center">
                    <h1 className=' text-5xl font-extrabold ml-40 mb-10 '>{major.brand_name} {major.model_name} {major.color} {major.wheel_diameter} inch Wheels</h1>
                <ul className=' text-3xl font-medium'>
                    <li>Diameter- {major.wheel_diameter}inch</li>
                    <li>Wheel Width- {major.wheel_width}J</li>
                    <li>Offset-ET{major.offset}</li>
                </ul>
                <h2 className=' text-center mt-10 text-5xl font-extrabold text-[#ff0202]'>Price- {major.high_price} taka</h2>
            </div>
                </div>
        </div>
        <div className="w-full  h-[800px] bg-gradient-to-r from-[#FFECD2] to-[#FCB69F] p-10">
            <h1 className=' text-center text-6xl font-medium text-[#060146] mb-28'>Specifications</h1>
            <h2 className=' text-3xl font-bold  bg-gradient-to-r from-[#FDFCFB] to-[#E2D1C3] '>Brand- {major.brand_name}</h2>
            <h2 className=' text-3xl font-bold  '>Model- {major.model_name}</h2>
            <h2 className=' text-3xl font-bold  bg-gradient-to-r from-[#FDFCFB] to-[#E2D1C3]'>Wheel Diameter- {major.wheel_diameter} inch</h2>
            <h2 className=' text-3xl font-bold  '>Color- {major.color}</h2>
            <h2 className=' text-3xl font-bold  bg-gradient-to-r from-[#FDFCFB] to-[#E2D1C3]'>Product Line- {major.product_line}</h2>
            <h2 className=' text-3xl font-bold  '>Wheel Width- {major.wheel_width}J</h2>
            <h2 className=' text-3xl font-bold  bg-gradient-to-r from-[#FDFCFB] to-[#E2D1C3]'>Offset- ET{major.offset}</h2>
            <h2 className=' text-3xl font-bold  '>Center Bore- {major.center_bore}</h2>
            <h2 className=' text-3xl font-bold  bg-gradient-to-r from-[#FDFCFB] to-[#E2D1C3]'>Number of Holes- {major.number_of_holes}</h2>
            <h2 className=' text-3xl font-bold  '>Material- {major.material}</h2>
            <h2 className=' text-3xl font-bold  bg-gradient-to-r from-[#FDFCFB] to-[#E2D1C3]'>Warranty- {major.warranty}</h2>
            
        </div>
    </div>
    </>
  )
}

export default Data