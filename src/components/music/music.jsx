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
            { Name: "Oak's Desert", Album: "Oaklands", "URI": "songs/games/example_gamesoundtrack6.mp3" },
            { Name: "Funky Forest", Album: "Plush Wars 2", "URI": "songs/games/example_gamesoundtrack7.mp3" },
            { Name: "Dirt Dance", Album: "Plush Wars 2", "URI": "songs/games/dirtdancenew4.mp3" },
            { Name: "Main Theme", Album: "Plush Wars 2", "URI": "songs/games/pw2.mp3" }
    ],
    Piano: [{ Name: "Coral Reef", Album: "stupid adventure", "URI": "songs/piano/example_pianosolo.mp3" },
            { Name: "The Mall", Album: "stupid adventure", "URI": "songs/piano/example_pianosong.mp3" },
            { Name: "Rising Saplings", Album: "Oaklands", "URI": "songs/piano/example_piano2.mp3" },
            { Name: "Rainy Gray", Album: "Cosmic Reach Fan Song", "URI": "songs/piano/rainygrayLOUD.mp3" },
            { Name: "Desolate Dreams", Album: "Cosmic Reach Fan Song", "URI": "songs/piano/desolatedreamsLOUD.mp3" },
            { Name: "Sunny Estates", Album: "Crazy Cars", "URI": "songs/piano/crazyasacar3.mp3" },
            { Name: "Surface", Album: "Massacre Miners 2", "URI": "songs/piano/city4.mp3" },
            { Name: "Permafrost", Album: "Massacre Miners 2", "URI": "songs/piano/deal2.mp3" },
            { Name: "Stone", Album: "Massacre Miners 2", "URI": "songs/piano/mininininininininininingCut.mp3" }
    ],
    EDM: [{ Name: "Winds of Fjords (Cover)", Album: "Minomus", "URI": "songs/edm/example_edmcover.mp3" },
          { Name: "the_floaters.mp3", Album: "Single", "URI": "songs/edm/example_edmoriginal.mp3" },
          { Name: "Deadly Deep", Album: "stupid adventure", "URI": "songs/edm/example_edmoriginalgrungy.mp3" },
          { Name: "Road to Kalimba", Album: "Doby's Clay World", "URI": "songs/edm/example_edmoriginalgrungy2.mp3" },
          { Name: "Alan's Autologistics", Album: "Oaklands", "URI": "songs/edm/example_edm2.mp3" },
          { Name: "Pianoman Watches", Album: "Hexagon Smash", "URI": "songs/edm/example_edm3.mp3" },
          { Name: "Serious Business", Album: "Hexagon Smash", "URI": "songs/edm/example_edm4.mp3" },
          { Name: "Toy Factory", Album: "Plush Wars 2", "URI": "songs/edm/example_edm5.mp3" },
          { Name: "Robodemon Biz", Album: "Mechanical Misadventures", "URI": "songs/edm/robodemonbiz.mp3" }
    ],
    Surreal: [{ Name: "Rainy Swamp", Album: "Doby's Clay World", "URI": "songs/surreal/example_surrealgrungy.mp3" },
              { Name: "Tattered Desert", Album: "The Legend of The Bone Sword", "URI": "songs/surreal/example_surreal2.mp3" },
              { Name: "Title Screen", Album: "The Legend of The Bone Sword", "URI": "songs/surreal/title3.mp3" },
              { Name: "Ghastly Village", Album: "Rarity Miner", "URI": "songs/surreal/scarityminer3.mp3" },
              { Name: "Normal Cave", Album: "Crystal Collection", "URI": "songs/surreal/pure3.mp3" },
              { Name: "Harrowing Descent", Album: "Downcave", "URI": "songs/surreal/minining.mp3" },
              { Name: "Slippery Slope", Album: "Downcave", "URI": "songs/surreal/idez_22.mp3" },
              { Name: "Spelunking", Album: "Downcave", "URI": "songs/surreal/dry3.mp3" },
              { Name: "Pitfire", Album: "Game of Solace", "URI": "songs/surreal/drumtest2.mp3" }
    ],
    Cinematic: [{ Name: "Dangus Desert", Album: "stupid adventure", "URI": "songs/cinematic/example_cinematicdesert.mp3" },
                { Name: "Battle Beach", Album: "Plush Wars 2", "URI": "songs/cinematic/example_cinematic2.mp3" },
                { Name: "Introduction", Album: "The Lighthouse", "URI": "songs/cinematic/example_cinematic3.mp3" },
                { Name: "Lay of the Land", Album: "Oaklands", "URI": "songs/cinematic/example_cinematic4.mp3" },
                { Name: "9 Mile Mountain", Album: "Single", "URI": "songs/cinematic/9milemountain.mp3" },
                { Name: "Construction", Album: "Cosmic Reach", "URI": "songs/cinematic/seismicLOUD.mp3" },
                { Name: "Navigation", Album: "Cosmic Reach", "URI": "songs/cinematic/cosmosLOUD.mp3" },
                { Name: "Cozy Settlement", Album: "Cosmic Reach", "URI": "songs/cinematic/cosmicLOUD.mp3" },
                { Name: "Hub 1 Woodlands", Album: "Crystal Collection", "URI": "songs/cinematic/hubLOUD.mp3" }
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
