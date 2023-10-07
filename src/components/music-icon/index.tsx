import React from 'react'
import equalizerAnimation from '../../assets/images/music-animation.svg'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

type Props = {
    isOpened: boolean,
    isPlaying: boolean,
    setIsPlaying: any,
    audioRef: any,
    isExpanded: boolean,
    setIsExpanded: any,
    setOnHover:any
}

export const BackgroundMusic: React.FC<Props> = ({ isOpened, isPlaying, setIsPlaying, audioRef, isExpanded, setIsExpanded, setOnHover }) => {

    const handleAudioEnded = () => {
        // Reset the playback time to the beginning
        if(audioRef.current) {
            audioRef.current.currentTime = 0;
            // Start playing again
            audioRef.current.play();
        }
    };
    
    return <div className={`background-music ${isPlaying ? 'is-played' : 'is-paused' } ${isExpanded && 'is-expanded'}`} 
        style={{ display: isOpened ? 'block' : 'none' }}
        onMouseOver={(e) => {
            setIsExpanded(true)
            setOnHover(true)
        }} 
        onMouseOut={(e) => {
            setIsExpanded(false)
            setOnHover(false)
        }}
        onClick={() => {
            if (audioRef.current) {
                if(isPlaying) {
                    audioRef.current.pause();
                    setIsPlaying(false);
                } else {
                    audioRef.current.play();
                    setIsPlaying(true);
                }
            }
        }}>
    <audio ref={audioRef} controls style={{ display: 'none' }} onEnded={handleAudioEnded}>
        <source src="/Dengarkan Dia - Teman Tapi Menikah (Official Music Video).mp3" type="audio/mp3" />
        Your browser does not support the audio element.
    </audio>
    <button className="btn btn-dark btn-sm text-white">
        {
            !isPlaying && 
            <span className="background-music-play-icon">
                <PlayArrowIcon style={{ marginLeft: '-4px' }} />
            </span>
        }
        <span className="background-music-pause-icon">
            <img src={equalizerAnimation} alt="" width="14" height="14" />
        </span>
        {
            isExpanded &&
            <span className="background-music-credit" style={{ marginLeft: '5px' }}>Teman tapi menikah❤️</span>
        }
    </button>
</div>
}