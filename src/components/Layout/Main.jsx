import { forwardRef, useImperativeHandle, useRef, useState } from 'react';

import './Main.scss';
import Card from '../Card/Card.jsx';
import { CARD_DATA } from '../../data.js';

const Main = forwardRef(function Main(props, ref) {
	const [cardData, setCardData] = useState(null);
	const main = useRef();

	useImperativeHandle(ref, () => {
		return {
			initCard() {
				setCardData(CARD_DATA);
			},
		};
	});

	return (
		<main ref={main}>
			<div className="container">
				{!cardData && <p>No card data found!</p>}
				{cardData && <Card data={cardData} />}
			</div>
		</main>
	);
});

export default Main;
