import React,{useRef, useState} from 'react'
import './Video.css'
import videoUrl from './../assets/surakshith.mp4'
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'

function Video(props) {
    const [play,setPlay] = useState(false)
    const videoRef = useRef();
    
    const onVideoPress = () => {
        if(play){
            videoRef.current.pause();
            setPlay(false);
        }
        else{
            videoRef.current.play()
            setPlay(true);
        }
    }

    return (
        <div className="video">
            <video 
                className="video__player" 
                loop 
                onClick={onVideoPress}
                ref={videoRef}
                src={videoUrl}
                ></video>
                <VideoFooter channel={props.channel} description={props.description} song={props.song}/>
                <VideoSidebar likes={props.likes} share={props.share} messages={props.messages}/>
        </div>
    )
}

export default Video
