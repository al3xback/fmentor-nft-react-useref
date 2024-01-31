import { useRef, useEffect } from 'react';

import './Header.scss';

const Header = ({ title }) => {
	const titleRef = useRef();

	useEffect(() => {
		titleRef.current.textContent = title;
	});

	return (
		<header>
			<h1 ref={titleRef} className="sr-only"></h1>
		</header>
	);
};

export default Header;
