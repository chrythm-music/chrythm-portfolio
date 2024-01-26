import "./music.scss"

import { useState } from 'preact/hooks';

export default function MusicNavigation(props) {
    let [CurrentSelectedState, SetCurrentSelectedState] = useState(props.genres[0]);

    return (<>
        <div className={"music-navigation"}>
            {props.genres.map((key) => {
                return (<div key={key} onClick={() => { SetCurrentSelectedState(key); props.genreState(key); props.playEvent(null); }} className={"button" + (CurrentSelectedState == key ? " selected" : "")}>{key}</div>)
            })}
        </div>
    </>)
}