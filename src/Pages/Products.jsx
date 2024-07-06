import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { dataOfproduct } from '../Slices/rimSlice'

const Products = () => {

  const [data, dataChanger] = useState ([])
  const navigator = useNavigate()
  const dispatcher = useDispatch()

useEffect(()=>{
axios.get('https://api.jsonbin.io/v3/b/66768aa5ad19ca34f87cdb72')
.then((work)=>dataChanger(work.data.record))
.catch((wrong)=>console.log(wrong))
},[])

const otherPage = (rims)=>{
  navigator('/data')
  dispatcher(dataOfproduct(rims))
}
const otherPageTwo = (rims)=>{
  navigator('/buy')
  dispatcher(dataOfproduct(rims))
}

  return (
    <>
    <div className=" flex justify-center items-center bg-gradient-to-r from-[#4E65FF] to-[#92EFFD] min-h-screen">
      <div className=" flex gap-5 flex-wrap justify-center">
        {
          data.map((product, n)=>(
            <div key={n} className=" w-[400px] h-[650px] bg-white flex flex-col justify-center items-center p-3 mt-7 mb-3">
        <img className=' w-[250px] h-[250px]' src={product.image_url} alt="Rim" />
        <h1 className=' font-bold text-4xl text-center'>Brand: {product.brand_name}</h1>
        <h2 className=' font-semibold text-2xl'>Model: {product.model_name}</h2>
        <ul className=' list-inside'>
          <li className=' text-xl'><span className=' text-xl font-medium'>Color:</span> {product.color}</li>
          <li className=' text-xl'><span className=' text-xl font-medium'>Material:</span> {product.material}</li>
          <li className=' text-xl'><span className=' text-xl font-medium'>Warranty:</span> {product.warranty}</li>
        </ul>
        <h2 className=' text-3xl font-extrabold text-[#FFA500]'>Price- {product.high_price} taka</h2>
        <button onClick={()=>otherPage(product)} className=' w-full h-[50px] rounded-xl bg-gradient-to-r from-[#FF512F] to-[#DD2476] mb-5 mt-3 text-2xl font-medium  hover:text-[#fff]'>Details</button>
        <button onClick={()=>otherPageTwo(product)} className=' w-full h-[50px] rounded-xl bg-gradient-to-r from-[#11998E] to-[#38EF7D] text-2xl font-medium hover:text-[#fff]'>Buy now</button>
      </div>
          ))
        }
      </div>

    </div>
    </>
  )
}

export default Products