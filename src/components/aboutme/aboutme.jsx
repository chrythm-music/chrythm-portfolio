import "./aboutme.scss";

export default function AboutMe(props) {
    return (<>
        <div className={"about-me"}>
            <div className={"intro"}>
                <div class={"text"}>
                    <h1>Hi, I'm Chrythm</h1>
                    <h4>I would like to make music for you.</h4>
                </div>
                <img className={"icon"} src="icon2.svg" alt={"Chrythm's Icon, Large"}></img>
                <img className={"dots"} src="dots.svg"></img>
            </div>
            <div ref={props.useRef} class={"info"}>
                <div class={"text"}>
                    <h1>About Me</h1>
                    <p>I have been producing music since 2015. I play the piano, write game soundtracks, and conduct a digital orchestra.</p>
                </div>
                <img src="card.png" alt="A card showing an idea of who I am."></img>
            </div>
        </div>
    </>)
}