import './Main.scss';
import Card from '../Card/Card.jsx';

const Main = ({ card }) => {
	return (
		<main>
			<div className="container">
				{!card && <p>No card data found!</p>}
				{card && <Card {...card} />}
			</div>
		</main>
	);
};

export default Main;
