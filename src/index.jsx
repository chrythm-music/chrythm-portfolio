import { render } from 'preact';

import './style.scss';
import Navbar from './components/navbar/navbar';
import AboutMe from './components/aboutme/aboutme';
import PaymentContact from './components/paymentcontact/paymentcontact';
import CreditFooter from './components/footer/creditfooter';
import Music from './components/music/music';
import { useState } from 'preact/hooks';

export function App() {
    let [CurrentNavigation, SetCurrentNavigation] = useState("About Me");

	return (<>
        <Navbar updateActive={SetCurrentNavigation} activeNav={CurrentNavigation} labels={["About Me", "My Music", "Payment", "Contact"]}/>
        <AboutMe/>
        <Music/>
        <PaymentContact/>
        <CreditFooter/>
    </>);
}

render(<App />, document.getElementById('app'));
