import "./paymentcontact.scss";

export default function PaymentContact(props) {
    return (<>
        <div ref={props.payRef} className={"payment-contact"}>
            <div className={"payment"}>
                <table class={"chart"}>
                    <tr class={"headers"}>
                        <th>Duration (min)</th>
                        <th>Robux Rate</th>
                    </tr>
                    <tr>
                        <th>&lt;00:30</th>
                        <th>$20 Robux equivalent</th>
                    </tr>
                    <tr>
                        <th>01:00 - 02:00</th>
                        <th>$60 Robux equivalent</th>
                    </tr>
                    <tr>
                        <th>02:00 - 03:00</th>
                        <th>$140 Robux equivalent</th>
                    </tr>
                    <tr>
                        <th>&gt;03:00</th>
                        <th>Let's negotiate!</th>
                    </tr>
                </table>
                <div class={"text"}>
                    <h1>Payment</h1>
                    <p>At this time, I am only doing payment through robux on Roblox. I will be opening up to USD payment in the near future. Robux amount should be calculated according to developer exchange rates.</p>
                </div>
            </div>
            <div ref={props.contactRef} class={"contact"}>
                <h1>Contact</h1>
                <p>Send me an email, <b>chrythman@gmail.com</b><br/>After we get in contact via email, I would prefer to use Discord for faster communication. If you just want to stick with email, that’s also fine with me.</p>
            </div>
        </div>
    </>)
}