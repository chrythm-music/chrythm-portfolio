import "./navbar.scss";

export default function Navbar() {
    return (<>
        <div className={"navbar"}>
            <div class={"logo-container"}>
                <img src="/icon1.png" alt="Chrythm's Icon"></img>
                <b>Chrythm</b>
            </div>
            <div class={"navigation-list"}>
                <p>About Me</p>
                <p>My Music</p>
                <p>Payment</p>
                <p>Contact</p>
            </div>
        </div>
    </>)
}