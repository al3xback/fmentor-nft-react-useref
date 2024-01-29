import { useRef, useEffect } from 'react';

import Header from './components/Layout/Header.jsx';
import Main from './components/Layout/Main.jsx';
import Footer from './components/Layout/Footer.jsx';
import { TITLE } from './data.js';

function App() {
	const title = useRef();
	const main = useRef();

	useEffect(() => {
		title.current.initTitle(TITLE);
		main.current.initCard();
	});

	return (
		<>
			<Header ref={title} />
			<Main ref={main} />
			<Footer />
		</>
	);
}

export default App;
