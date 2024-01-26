import { render } from 'preact';

import './style.scss';
import Navbar from './components/navbar/navbar';
import AboutMe from './components/aboutme/aboutme';

export function App() {
	return (<>
        <Navbar/>
        <AboutMe/>
    </>);
}

render(<App />, document.getElementById('app'));
