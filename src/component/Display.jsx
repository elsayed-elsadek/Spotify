import {Routes, Route, useLocation} from 'react-router-dom'
import Displayhome from './Displayhome'
import Displayalbum from './Displayalbum.jSX'
import { useEffect, useRef } from 'react'
import { albumsData } from '../assets/assets';
function Display() {

const displayref =useRef();
const locatin =useLocation();
const isalbum = locatin.pathname.includes('album');
 const albumid = isalbum ? locatin.pathname.slice(-1) : '';
const bgcolor = albumsData[(Number(albumid))].bgColor ;

useEffect(()=>{

  if(isalbum){
    displayref.current.style.background = bgcolor ;
  }

  else{
displayref.current.style.background = `#121212`
  }
})

  return (
    <div ref={displayref} className="w-[100%] mx-2 mb-2 p-6 rounded bg-[#212121] text-white overflow-auto lg:ml-0">
      
<Routes>
<Route path='/' element={<Displayhome/>} />
<Route path='/album/:id' element={<Displayalbum/>} />

</Routes>
    </div>
  )
}

export default Display
