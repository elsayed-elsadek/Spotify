import { useContext  } from "react"
import Display from "./component/Display"
import Player from "./component/Player"
import Sidebar from "./component/Sidebar"
import { Playercontext } from "./context/PlayerContext"
const App = () => {
  const {audioRef ,track} =useContext(Playercontext);
  return (
    <>
        <div className='bg-black h-screen'>
 <div className="flex h-[90%]">
<Sidebar/>
<Display/>

  </div>

  <Player/>
<audio ref={audioRef} src={track.file} preload="auto" ></audio>
  </div>

    </>
  )
}

export default App
