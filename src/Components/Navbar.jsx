import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className=" h-[60px] w-full bg-gradient-to-r from-[#FCFB62] to-[#91F9E5] flex justify-center items-center ">
        <div className="container flex justify-between items-center">
        <Link to="/" ><img className=" w-[120px] h-[50px] " src="./public/logo.png" alt="logo" /></Link>
        
            <ul className=" flex justify-center items-center gap-3 flex-wrap ">
            <Link to="/" className=" text-2xl font-semibold text-[#222222] flex-wrap flex justify-center items-center gap-1 hover:text-[#666666]">Home</Link>
            <Link to="/users" className=" text-2xl font-semibold text-[#222222] flex-wrap flex justify-center items-center gap-1 hover:text-[#666666]">Sellers</Link>
            <Link to="/products" className=" text-2xl font-semibold text-[#222222] flex-wrap flex justify-center items-center gap-1 hover:text-[#666666]">Rims</Link>
            <Link to="/help" className=" text-2xl font-semibold text-[#222222] flex-wrap flex justify-center items-center gap-1 hover:text-[#666666]">Help</Link>
        </ul>
        
        
        {/* <div className=" flex justify-center items-center gap-2 flex-wrap"><Link to="/Signup" className=" h-[40px] w-[100px] p-2 flex justify-center items-center bg-gradient-to-r from-[#C22ED0] to-[#5FFAE0] text-xl font-semibold text-[#fff] rounded-xl">Sign Up</Link>
         <Link to="/Login" className="  h-[40px] w-[100px] p-2 flex justify-center items-center bg-gradient-to-r from-[#C22ED0] to-[#5FFAE0] text-xl font-semibold text-[#fff] rounded-xl mr-2 ">Login</Link>
         </div> */}
         
     </div>   
        
    </nav>
    </>
  )
}

export default Navbar