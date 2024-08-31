import { useNavigate } from "react-router-dom"
import { assets } from "../assets/assets"
function Navbar() {

  const navigate =useNavigate();
  return (
    <>
      <div className="w-[full] flex justify-between items-center ">
<div className="flex gap-2">
<img onClick={()=> navigate(-1)} className="w-8 bg-black rounded-2xl p-2 cursor-pointer" src={assets.arrow_left} alt="" />
<img onClick={()=> navigate(1)} className="w-8 bg-black rounded-2xl p-2 cursor-pointer" src={assets.arrow_right} alt="" />
</div>
<div className="flex gap-4 items-center">
<p className="bg-white rounded-2xl text-black px-4 py-1 text-[15px] font-semibold cursor-pointer hidden md:block">Explore Primum</p>
<p className="bg-black rounded-2xl text-white px-4 py-1 text-[15px] font-semibold cursor-pointer ">Install App</p>
<p className="bg-purple-600 text-black rounded-full w-8 h-8 flex justify-center items-center cursor-pointer">E</p>
</div>
      </div>

      <div className="flex py-4 gap-2">
        <p className="rounded-2xl bg-white text-black px-4 py-1 cursor-pointer">All</p>
        <p className="rounded-2xl bg-black text-white px-4 py-1 cursor-pointer">Music</p>
        <p className="rounded-2xl bg-black text-white px-4 py-1 cursor-pointer">Potcast</p>


      </div>
    </>
  )
}

export default Navbar
