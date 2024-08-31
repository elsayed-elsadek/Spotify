import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/assets";
import Albumitem from "./Albumitem";
import Songsitem from "./Songsitem";


function Displayhome() {
  return (
    <>
     <Navbar/> 

     <div className="mb-4">
<h1 className="text-2xl font-bold my-5">Featured Charts</h1>
     </div>
<div className="flex my-5 font-bold text-2xl  overflow-auto">
  {albumsData.map((item ,index)=>(<Albumitem key={index} name={item.name} id={item.id} desc={item.desc} image={item.image} />  ))}
</div>

<div className="mb-4">
<h1 className="text-2xl font-bold my-5">Today`s bigest hits</h1>
     </div>
<div className="flex my-5 font-bold text-2xl  overflow-auto">
  {songsData.map((item ,index)=>(<Songsitem key={index} name={item.name} id={item.id} desc={item.desc} image={item.image} />  ))}
</div>
    </>
  )
}

export default Displayhome
