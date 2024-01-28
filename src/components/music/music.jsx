import "./music.scss";
import MusicNavigation from "./musicnav";
import MusicCard from "./musiccard";
import { useState } from "preact/hooks";

let Songs = {
    Games: [{ Name: "Shady Forest", Album: "stupid adventure", "URI": "songs/games/example_gamesoundtrack.mp3" },
            { Name: "Valley Farm", Album: "stupid adventure", "URI": "songs/games/example_gamesoundtrack2.mp3" },
            { Name: "The Mountains", Album: "Plush Wars 2", "URI": "songs/games/example_gamesoundtrack3.mp3" },
            { Name: "Castle", Album: "Plush Wars 2", "URI": "songs/games/example_gamesoundtrack4.mp3" },
            { Name: "Candy Desert", Album: "Plush Wars 2", "URI": "songs/games/example_gamesoundtrack5.mp3" },
            { Name: "Oak's Desert", Album: "Oaklands", "URI": "songs/games/example_gamesoundtrack6.mp3" }
    ],
    Piano: [{ Name: "Coral Reef", Album: "stupid adventure", "URI": "songs/piano/example_pianosolo.mp3" },
            { Name: "The Mall", Album: "stupid adventure", "URI": "songs/piano/example_pianosong.mp3" }
    ],
    EDM: [{ Name: "Winds of Fjords (Cover)", Album: "Minomus", "URI": "songs/edm/example_edmcover.mp3" },
          { Name: "the_floaters.mp3", Album: "Single", "URI": "songs/edm/example_edmoriginal.mp3" },
          { Name: "Deadly Deep", Album: "stupid adventure", "URI": "songs/edm/example_edmoriginalgrungy.mp3" },
          { Name: "Road to Kalimba", Album: "Doby's Clay World", "URI": "songs/edm/example_edmoriginalgrungy2.mp3" }
    ],
    Surreal: [{ Name: "Rainy Swamp", Album: "Doby's Clay World", "URI": "songs/surreal/example_surrealgrungy.mp3" }],
    Cinematic: [{ Name: "Dangus Desert", Album: "stupid adventure", "URI": "songs/cinematic/example_cinematicdesert.mp3" },
                { Name: "Battle Beach", Album: "Plush Wars 2", "URI": "songs/edm/example_cinematic2.mp3" },
                { Name: "Introduction", Album: "The Lighthouse", "URI": "songs/edm/example_cinematic3.mp3" }
    ]
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
