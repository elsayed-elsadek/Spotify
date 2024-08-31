import { useContext } from "react"
import { assets } from "../assets/assets"
import { Playercontext } from "../context/PlayerContext"
function Player() {
const {seekbg ,track,seekbar ,playstatus ,Play ,Pause ,time , prevsong ,nextsong ,seeksong} =useContext(Playercontext) ;

  return (
    <div className="flex ">
        <div className="hidden gap-4 lg:flex items-center px-2 ">
        <img className="w-12" src={track.image} alt="" />
        </div>

<div className="text-white px-2"> 
<p>{track.name} </p>
<p>{track.desc.slice(0,12)} </p>
</div>

<div className="flex-col gap-1 items-center m-auto ">

<div className="flex gap-4 justify-center">
<img className="w-4 cursor-pointer" src={assets.shuffle_icon} alt="" />
<img onClick={prevsong} className="w-4 cursor-pointer" src={assets.prev_icon} alt="" />

{!playstatus ?  <img onClick={Play} className="w-4  cursor-pointer " src={assets.play_icon} alt="" />
:
<img onClick={Pause} className="w-4  cursor-pointer " src={assets.pause_icon} alt="" />
}



<img onClick={nextsong} className="w-4 cursor-pointer" src={assets.next_icon} alt="" />
<img className="w-4 cursor-pointer" src={assets.loop_icon} alt="" />
</div>

<div className="flex gap-5 items-center text-white">
<p>{time.currentTime.min}:{time.currentTime.sec}</p>
<div onClick={seeksong} ref={seekbg} className=" w-[60vw] max-w-[500px] bg-gray-300 cursor-pointer rounded-full">
<hr ref={seekbar}   className=" border-none h-1 w-full bg-green-800 rounded-full "/>
</div>
<p>{time.totalTime.min}:{time.totalTime.sec}</p>
</div>
</div>
<div className="hidden lg:flex items-center opacity-75 gap-2 px-4">
  <img className="w-4 cursor-pointer" src={assets.play_icon} alt="" />
  <img className="w-4 cursor-pointer" src={assets.mic_icon} alt="" />
  <img className="w-4 cursor-pointer" src={assets.queue_icon} alt="" />
  <img className="w-4 cursor-pointer" src={assets.speaker_icon} alt="" />
  <img className="w-4 cursor-pointer" src={assets.volume_icon} alt="" />
<div className="w-20 rounded h-1 cursor-pointer bg-slate-400"></div>
  <img className="w-4 cursor-pointer" src={assets.mini_player_icon} alt="" />
  <img className="w-4 cursor-pointer" src={assets.zoom_icon} alt="" />


</div>
      


    </div>
  )
}

export default Player
