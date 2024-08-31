import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";
import PropTypes from 'prop-types'; 

export const Playercontext =createContext();

const Playercontextprovider =(props)=>{

    const audioRef =useRef();
    const seekbg =useRef();
    const seekbar =useRef();

    const [track , setTrack]=useState(songsData[1]);
    const [playstatus ,setplayStatus] =useState(false);
    const[time ,setTime]=useState({
        currentTime:{
            sec : 0,
            min : 0 ,
        },
        totalTime :{
            sec :0 ,
            min :0 ,
        }
    })

    const Play = () => {
audioRef.current.play()

setplayStatus(true)
    }

    const Pause = () => {
        audioRef.current.pause()
        setplayStatus(false)
    }
    const playwithid =async (id)=> {

        await setTrack(songsData[id]);
        await audioRef.current.play()
        setplayStatus(true)
            }


            const prevsong = async () => {

                if  (track.id>0){
                    await setTrack(songsData[track.id-1 ])
                   await audioRef.current.play();
                   setplayStatus(true)
                   }
            }
                     
                                       
                                       
                                       const nextsong = async ()=> {
                           
                                           if(track.id < songsData.length-1){
                                            await setTrack(songsData[track.id +1 ])
                                           await audioRef.current.play();
                                           setplayStatus(true)
                                           }     }       
                                           
const seeksong = (e)=>{
audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekbg.current.offsetWidth) * audioRef.current.duration)

}


    useEffect(()=>{ 

    setTimeout(() => {
        audioRef.current.ontimeupdate = ()=>{
            seekbar.current.style.width =Math.floor(audioRef.current.currentTime / audioRef.current.duration *100) + '%';
setTime(
{    currentTime:{
        sec : Math.floor(audioRef.current.currentTime %60),
        min : Math.floor(audioRef.current.currentTime /60) ,
    },
    totalTime :{
        sec :Math.floor(audioRef.current.duration %60) ,
        min :Math.floor(audioRef.current.duration /60),
    }}
)

        }


    }, 1000);

    },[audioRef])




const contextValue ={
audioRef ,
seekbar ,seekbg,
time ,setTime ,
track ,setTrack ,
playstatus ,setplayStatus ,
Play ,Pause ,
playwithid ,
prevsong , nextsong ,
seeksong ,

}



return(
    <Playercontext.Provider value={contextValue}>
{props.children}
</Playercontext.Provider>
)
}

Playercontextprovider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Playercontextprovider ;  


