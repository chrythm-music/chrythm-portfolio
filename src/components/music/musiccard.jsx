import { useEffect, useRef, useState } from "preact/hooks"
import "./music.scss"

function FormatTime(seconds) {
    seconds = Math.floor(seconds);

    const Minutes = Math.floor(seconds / 60);
    const RemainingSeconds = seconds % 60;
  
    const FormattedMinutes = String(Minutes).padStart(2, '0');
    const FormattedSeconds = String(RemainingSeconds).padStart(2, '0');
  
    return `${FormattedMinutes}:${FormattedSeconds}`;
  }

export default function MusicCard(props) {
    let AudioRef = useRef(null);
    let ProgressFrameRef = useRef(null);
    let ProgressBarRef = useRef(null);
    
    let [AudioPosition, SetAudioPosition] = useState(0);
    let [AudioLength, SetAudioLength] = useState(0);


    let Update = () => {
        ProgressFrameRef.current = requestAnimationFrame(Update);

        SetAudioPosition(AudioRef.current?.currentTime);
    }

    let SongMetaLoaded = () => {
        SetAudioLength(AudioRef.current?.duration);
    }

    let UpdatePosition = (Event) => {
        let ProgressBarWidth = ProgressBarRef.current.offsetWidth;

        let ClickX = Event.clientX - ProgressBarRef.current.getBoundingClientRect().left;

        let PositionPercentage = (ClickX / ProgressBarWidth);

        if (AudioRef.current) {
            AudioRef.current.currentTime = PositionPercentage * AudioLength;
            SetAudioPosition(AudioRef.current?.currentTime);
        }
    }

    useEffect(() => {
        if (props.play) {
            ProgressFrameRef.current = requestAnimationFrame(Update);
            AudioRef.current?.play()
        } else {
            cancelAnimationFrame(ProgressFrameRef.current)
            AudioRef.current?.pause()
        }
    }, [props.play, AudioRef])

    return (<>
        <div className={"music-card"}>
            <div className={"info"}>
                <img className={"pause-play"} onClick={() => {
                    if (props.play) {
                        props.playEvent(null);
                    } else {
                        props.playEvent(props.songUri);
                    }
                    // if (AudioRef.current?.paused) {
                    //     AudioRef.current?.play()
                    // } else {
                    //     AudioRef.current?.pause()
                    // }

                    // SetPausedState(AudioRef.current?.paused)
                }} src={props.play ? "/pause.png" : "/play.png"}></img>
                <div className={"text"}>
                    <b>{props.songName}</b>
                    <p>{props.albumName}</p>
                </div>
            </div>
            <div className={"status"}>
                <div ref={ProgressBarRef} onClick={UpdatePosition} className={"progress-bar"}>
                    <div className={"progress-fill"} style={{"width": ((AudioPosition / AudioLength) * 100) + "%"}}></div>
                </div>

                <div className={"timing"}>
                    <p>{FormatTime(AudioPosition)}</p>
                    <p>{FormatTime(AudioLength)}</p>
                </div>
            </div>

            <audio ref={AudioRef} src={props.songUri} onLoadedMetadata={SongMetaLoaded} />
        </div>
    </>)
}