import React from 'react'
import './style/Metadata.scss'
import Play from '../assets/static/play.jsx'
import Pause from '../assets/static/Pause.jsx'
import imagen from '../assets/static/paradise_portada.jpg'
import Cancion from '../assets/static/Paradise(Preview).mp3'
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
  const [playing, setPlaying] = useState(0)
  const [progress, setProgress] = useState(0)
  const [timeProgress, setTimeProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef(null)
  const togglePlaying = () => setPlaying(prev => !prev)
  
  useEffect(()=>{
    if(audioRef && audioRef.current){
      if(playing) {
        audioRef.current.play();
      }
      else {audioRef.current.pause();}
    }
  },[playing])
  
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
        let ceil = Math.ceil(currentTime)
        if(ceil===30){
          clearInterval(intervalTime)
          setDuration(ceil)
          console.log(ceil)
          ceil = 0
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
                {!playing || duration === 30 ? <Play/> : <Pause/>}
              </div>
            </div>
          </div>
          <div className="track_List" onClick={togglePlaying}>
            <div className="track__Name">{props.titleTrack}</div>
            <div className="track__Time right-5rem">0:{timeProgress}</div>
          </div>
          <div className="tracklist__footer">Audio samples provided courtesy of iTunes</div>   
        </div>
       
        
      </div>
    </div>
  )
}

export default Metadata