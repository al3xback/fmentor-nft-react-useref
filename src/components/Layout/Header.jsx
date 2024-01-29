import { forwardRef, useImperativeHandle, useRef } from 'react';

import './Header.scss';

const Header = forwardRef(function Header(props, ref) {
	const title = useRef();

	useImperativeHandle(ref, () => {
		return {
			initTitle(value) {
				title.current.textContent = value;
			},
		};
	});

	return (
		<header>
			<h1 ref={title} className="sr-only"></h1>
		</header>
	);
});

export default Header;
