import Header from './components/Layout/Header.jsx';
import Main from './components/Layout/Main.jsx';
import Footer from './components/Layout/Footer.jsx';
import { TITLE, CARD_DATA } from './data.js';

function App() {
	return (
		<>
			<Header title={TITLE} />
			<Main card={CARD_DATA} />
			<Footer />
		</>
	);
}

export default App;
