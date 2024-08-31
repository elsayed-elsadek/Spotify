import { useContext } from "react"
import { Playercontext } from "../context/PlayerContext"
import PropTypes from 'prop-types'; 
function Songsitem({name ,id ,image ,desc}) {

  const {playwithid} =useContext(Playercontext)
  return (
    <div onClick={()=> playwithid(id)} className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]" key={id}>
    <img className="rounded" src={image} alt="" />
    <p className=" font-bold mt-2 mb-1">{name}</p>
    <p className="text-slate-200 text-sm">{desc}</p>
  </div>
  )
}

Songsitem.propTypes = {
  name: PropTypes.string.isRequired, 
  id: PropTypes.number.isRequired, 
  image: PropTypes.string.isRequired, 
  desc: PropTypes.string 
};

export default Songsitem
