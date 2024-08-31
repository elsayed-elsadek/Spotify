import { useParams } from 'react-router-dom'
import { albumsData, assets } from '../assets/assets';
import Navbar from './Navbar';
import { songsData } from '../assets/assets';
import { useContext } from 'react';
import { Playercontext } from '../context/PlayerContext';

function Displayalbum() {
const {id} =useParams();
const albumdata = albumsData[id];
const {playwithid} =useContext(Playercontext);

  return (
    <>
        <Navbar/>
<div className='flex gap-4 items-center'>
    <img className='w-48 h-48 m-2 rounded' src={albumdata.image} alt="" />
    
    <div className='flex-col  py-10 px-2'>
        <p className='font-bold py-2'>Playlist</p>
        <h1 className='text-7xl font-bold'>{albumdata.name}</h1>
        <p className='p-2 text-[15px]'>{albumdata.desc}</p>

        <div className='flex gap-2 items-center'>
            <img className='w-7' src={assets.spotify_logo} alt="" />
            <b>Spotify</b>
            •1.1548 likes
            •<b>50 songs,</b>
            About 2 hr 50 min
        </div>
    </div>
</div>

<div className='grid grid-cols-3 sm:grid-cols-4 text-[#a7a7a7] mt-10 mb-4'>

<p>#  <b>Title</b></p>
<p>Album</p>
<p className='hidden sm:block'>Date Added</p>
<img className='w-4 m-auto' src={assets.clock_icon} alt="" />
</div>
<hr />

{songsData.map((item ,index)=>(
<div onClick={()=> playwithid(item.id)} className='grid grid-cols-3 sm:grid-cols-4 my-4 items-center text-[#a7a7a7]' key={index}>

 <div className='flex gap-2 items-center text-15px cursor-pointer' >
    <p className=''>{index+1}</p>
    <img className='w-8' src={item.image} alt="" />
    <p  className='text-white text-[15px]'>{item.name}</p>
 </div>

<p className=''>Happy Fav</p>
<p>5 days left </p>
<p className='m-auto'>{item.duration}</p>
</div>
))}




    </>
  )
}

export default Displayalbum
