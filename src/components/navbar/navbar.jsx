import "./navbar.scss";

export default function Navbar(props) {
    return (<>
        <div ref={props.useRef} className={"navbar"}>
            <div class={"logo-container"}>
                <img src="icon1.png" alt="Chrythm's Icon"></img>
                <b>Chrythm</b>
            </div>
            <div class={"navigation-list"}>
                {
                    props.labels.map((Name) => {
                        return <div onClick={() => props.updateActive(Name)} className={"container" + (props.activeNav == Name ? " active" : "")}>{Name}<div className={"active-bubble"}/></div>
                    })
                }
            </div>
        </div>
    </>)
}