import React from 'react'
import './style/Metadata.scss'
import Play from '../assets/static/play.jsx'
import Pause from '../assets/static/Pause.jsx'
import imagen from '../assets/static/paradise_portada.jpg'
import Cancion from '../assets/static/Paradise(Preview).mp3'
import equalizer from '../assets/static/equalizer.gif'
import { useState, useRef, useEffect } from 'react'

function useInterval(callback, delay){
  const savedCallback = useRef();

  useEffect(()=> {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(()=> {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null){
      let id = setInterval(tick, delay);
      return () =>clearInterval(id)
    }
  }, [delay]);
}

const Metadata = (props) =>{
  const [playing, setPlaying] = useState(1)
  const [progress, setProgress] = useState(0)
  const [timeProgress, setTimeProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef(null)
  const togglePlaying = (prev) =>{
    const {currentTime} = audioRef.current
    let intervalTime = setInterval(()=>{
      const {currentTime} = audioRef.current
    let ceil = Math.ceil(currentTime)
        if(ceil >= 30){
          console.log(ceil)
          clearInterval(intervalTime)
          ceil = 0
          setDuration(ceil)
          console.log(ceil)
        }
        if(ceil<10){
          ceil = `0${ceil}`
        }
        setTimeProgress(ceil)
        console.log(ceil)
      },1000)
    if(currentTime > 29 ){
      setPlaying(false) 
    }
    if(duration === 30){
      let dur = 0
      setDuration(dur)
    }
    if(playing || prev) {
      audioRef.current.play();
      prev = !prev
      setPlaying(prev)
      // clearInterval(intervalTime)
    }
    if(!playing){
      audioRef.current.pause();
      let bulean = true
      setPlaying(bulean)
    }
    
    console.log(playing)
  } 
  // useEffect(()=>{
  //   if(audioRef && audioRef.current){
  //     if(playing) {
  //       audioRef.current.play();
  //     }
  //     else {audioRef.current.pause();}
  //   }
  // },[playing])
  
  
  useInterval(()=> {
    if(audioRef && audioRef.current){
      const {currentTime, duration} = audioRef.current
      setProgress(Math.ceil((currentTime * 100) / duration))
    }
  })

  useEffect(()=>{
    let intervalTime = setInterval(()=>{
      if(audioRef && audioRef.current){
        const {currentTime} = audioRef.current
        console.log(currentTime)
        let ceil = Math.ceil(currentTime)
        if(ceil >= 30){
          console.log(ceil)
          clearInterval(intervalTime)
          ceil = 0
          setDuration(ceil)
          console.log(ceil)
          setPlaying(true)
        }
        if(ceil<10){
          ceil = `0${ceil}`
        }
        setTimeProgress(ceil)
      }
    },1000)
  },[])
  return(
    <div className="metadataContainer">
      <img src={imagen}  className="metadata__img" alt="AlbumPicture"/>
      <div className="audio-streaming-container">
        <div className="stream--dark">
          <div className="stream__controls--container">
            <div className="current-track-container">
              <div className="currentTrack01"></div>
              <div className="currentTrack02" style={{width:`${progress}%`,}}></div>
            </div>
            <div className="stream__control-bg">
              <audio src={Cancion} ref={audioRef} type="audio/mpeg" id="audio" className="player-audio"></audio>
              <div onClick={togglePlaying} className="stream__controls">
                {playing || duration === 30 ? <Play/> : <Pause/>}
              </div>
            </div>
          </div>
          <div className="track_List" onClick={togglePlaying}>
            <div className="track__Name">{props.titleTrack}</div>
            <div className="track__Time right-5rem">0:{timeProgress}</div>
            <img src={playing || duration === 30 ?  "": equalizer  }   className="equalizerIcon" />
          </div>
          <div className="tracklist__footer"></div>   
        </div>

      </div>
    </div>
  )
}

export default Metadata