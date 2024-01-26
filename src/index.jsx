import { render } from 'preact';

import './style.scss';
import Navbar from './components/navbar/navbar';
import AboutMe from './components/aboutme/aboutme';
import PaymentContact from './components/paymentcontact/paymentcontact';
import CreditFooter from './components/footer/creditfooter';
import Music from './components/music/music';
import { useEffect, useRef, useState } from 'preact/hooks';

// https://stackoverflow.com/questions/58525269/jump-to-a-specific-section-in-a-page-react
const scrollToSection = (elementRef, navRef) => {
    let offset = navRef.current.offsetHeight;

    if (document.body.offsetWidth <= 503) {
        offset = 0;
    }
    
    window.scrollTo({
        top: elementRef.current.offsetTop - navRef.current.offsetHeight,
        behavior: "smooth",
    });
};
    

export function App() {
    let NavbarRef = useRef(null);

    let AboutMeRef = useRef(null);
    let MusicRef = useRef(null);
    let PaymentRef = useRef(null);
    let ContactRef = useRef(null);

    let Labels = {
        "About Me": AboutMeRef,
        "My Music": MusicRef,
        "Payment": PaymentRef,
        "Contact": ContactRef
    }

    let UpdateNavigation = (New) => {
        scrollToSection(Labels[New], NavbarRef);
    }

	return (<>
        <Navbar useRef={NavbarRef} updateActive={UpdateNavigation} labels={Object.keys(Labels)}/>
        <AboutMe useRef={AboutMeRef}/>
        <Music useRef={MusicRef}/>
        <PaymentContact payRef={PaymentRef} contactRef={ContactRef}/>
        <CreditFooter/>
    </>);
}

render(<App />, document.getElementById('app'));
