import "./music.scss";
import MusicNavigation from "./musicnav";
import MusicCard from "./musiccard";
import { useState } from "preact/hooks";

let Songs = {
    Games: [{ Name: "Game 1", Album: "Album 1", "URI": "songs/games/example_gamesoundtrack.mp3" },
            { Name: "Game 2", Album: "Album 1", "URI": "songs/games/example_gamesoundtrack2.mp3" },
            { Name: "Game 3", Album: "Album 1", "URI": "songs/games/example_gamesoundtrack3.mp3" },
            { Name: "Game 4", Album: "Album 1", "URI": "songs/games/example_gamesoundtrack4.mp3" },
            { Name: "Game 5", Album: "Album 1", "URI": "songs/games/example_gamesoundtrack5.mp3" },
            { Name: "Game 6", Album: "Album 1", "URI": "songs/games/example_gamesoundtrack6.mp3" }
    ],
    Piano: [{ Name: "Piano 1", Album: "Album 1", "URI": "songs/piano/example_pianosolo.mp3" },
            { Name: "Piano 2", Album: "Album 1", "URI": "songs/piano/example_pianosong.mp3" }
    ],
    EDM: [{ Name: "EDM 1", Album: "Album 1", "URI": "songs/edm/example_edmcover.mp3" },
          { Name: "EDM 2", Album: "Album 1", "URI": "songs/edm/example_edmoriginal.mp3" },
          { Name: "EDM 3", Album: "Album 1", "URI": "songs/edm/example_edmoriginalgrungy.mp3" },
          { Name: "EDM 4", Album: "Album 1", "URI": "songs/edm/example_edmoriginalgrungy2.mp3" }
    ],
    Surreal: [{ Name: "Surreal 1", Album: "Album 1", "URI": "songs/surreal/example_surrealgrungy.mp3" }],
    Cinematic: [{ Name: "Cinematic 1", Album: "Album 1", "URI": "songs/cinematic/example_cinematicdesert.mp3" }]
}

export default function Music(props) {
    var SongGenres = Object.keys(Songs);

    var [CurrentGenre, SetCurrentGenre] = useState(SongGenres[0]);

    var [CurrentlyPlaying, SetCurrentlyPlaying] = useState(null);


    return (<>
        <div ref={props.useRef} className={"music"}>
            <h1>My Music</h1>
            <p>These are some example clips from my songs.</p>
            <MusicNavigation genreState={SetCurrentGenre} playEvent={SetCurrentlyPlaying} genres={SongGenres}/>
            <div className={"music-list"}>
                {
                    Songs[CurrentGenre || "Games"].map((Info) => {
                        return <MusicCard playEvent={SetCurrentlyPlaying} play={CurrentlyPlaying == Info.URI} key={CurrentGenre + Info.URI} songName={Info.Name} albumName={Info.Album} songUri={Info.URI}/>
                    })
                }
            </div>
        </div>
    </>)
}