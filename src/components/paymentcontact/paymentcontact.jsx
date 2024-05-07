import "./paymentcontact.scss";

export default function PaymentContact(props) {
    return (<>
        <div ref={props.payRef} className={"payment-contact"}>
            <div className={"payment"}>
                <table class={"chart"}>
                    <tr class={"headers"}>
                        <th>Duration (min)</th>
                        <th>USD Rate</th>
                        <th>Robux Rate</th>
                    </tr>
                    <tr>
                        <th>&lt;00:30</th>
                        <th>$21</th>
                        <th><div><img src="robux.svg" alt="Robux Icon"></img>6,000</div></th>
                    </tr>
                    <tr>
                        <th>01:00 - 02:00</th>
                        <th>$63</th>
                        <th><div><img src="robux.svg" alt="Robux Icon"></img>18,000</div></th>
                    </tr>
                    <tr>
                        <th>02:00 - 03:00</th>
                        <th>$140</th>
                        <th><div><img src="robux.svg" alt="Robux Icon"></img>40,000</div></th>
                    </tr>
                    <tr>
                        <th>&gt;03:00</th>
                        <th colSpan={2}>Let's negotiate!</th>
                    </tr>
                </table>
                <div class={"text"}>
                    <h1>Payment</h1>
                    <p>I accept USD and Robux on Roblox. My Robux prices are calculated based on developer exchange rates, so that it can be exchanged for the associated USD amount.</p>
                </div>
            </div>
            <div ref={props.contactRef} class={"contact"}>
                <h1>Contact</h1>
                <p>Send me an email, <b>chrythman@gmail.com</b><br/>After we get in contact via email, I would prefer to use Discord for faster communication. If you just want to stick with email, that’s also fine with me.</p>
                <img className={"dots"} src="dots.svg"></img>
            </div>
        </div>
    </>)
}