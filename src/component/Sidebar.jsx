import { useNavigate } from "react-router-dom"
import { assets } from "../assets/assets"

const Sidebar = () => {
const navigate =useNavigate();

  return (
  <>
  

    <div className="h-[85%]  text-white hidden lg:flex lg:flex-col  gap-2 w-[20%] mx-2">
      <div className="flex-col items-center p-2 bg-[#212121] justify-center gap-4 ">
        
        <div onClick={()=> navigate("/")} className="flex p-2 cursor-pointer  items-center">
        <img className="w-8 pr-2" src = {assets.home_icon} alt="" />
        <p>home</p>
           </div>

           <div className="flex cursor-pointer  p-2 items-center">
        <img className="w-8 pr-2" src = {assets.search_icon} alt="" />
        <p>home</p>
           </div>
      </div>

      <div className="flex bg-[#212121] items-center  p-2 gap-12 my-1">
 <div className="flex w-[80%]">
 <img className="w-8 pr-2" src={assets.stack_icon} alt="" />
 <p className="text-[15px]">Your library</p>
 </div>

<div className="flex gap-2 w-[20%] mx-3">
  <img className="w-4 cursor-pointer" src={assets.arrow_icon} alt="" />
  <img className="w-4 cursor-pointer"  src={assets.plus_icon} alt="" />
</div>

</div>

<div className="flex-col bg-[#212121] my-2 p-2">
<h1 className="font-semibold" >Create your First Playlist</h1>
<p className="font-light">It`s easy we will help you</p>
<button className="rounded-full text-[15px] p-3 font-semibold bg-white my-3 text-black">Create Playlist</button>
</div>

<div className="flex-col bg-[#212121] my-2 p-2 h-[40vh]">
<h1 className="font-semibold" >Let`s find some prodect to follow </h1>
<p className="font-light">We will  keep you update on new episodes</p>
<button className="rounded-full text-[15px] p-3 font-semibold bg-white my-3 text-black">Browse Prodect</button>
</div>
    </div>
    </>
  )
}

export default Sidebar
