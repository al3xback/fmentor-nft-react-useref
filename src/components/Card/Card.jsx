import { useRef, useEffect } from 'react';

import './Card.scss';

const Card = ({
	imageUrl,
	title,
	description,
	ethereumAmount,
	remainingTime,
	author,
}) => {
	const imageUrlRef = useRef();
	const titleRef = useRef();
	const descriptionRef = useRef();
	const ethereumAmountRef = useRef();
	const remainingTimeRef = useRef();
	const authorImgRef = useRef();
	const authorNameRef = useRef();

	useEffect(() => {
		imageUrlRef.current.src = imageUrl;
		titleRef.current.textContent = title;
		descriptionRef.current.textContent = description;
		ethereumAmountRef.current.textContent = ethereumAmount;
		remainingTimeRef.current.textContent = remainingTime;
		authorImgRef.current.src = author.imageUrl;
		authorImgRef.current.alt = author.name;
		authorNameRef.current.textContent = author.name;
	});

	return (
		<article className="card">
			<div className="card__image">
				<img ref={imageUrlRef} width="302" height="302" alt="" />
			</div>
			<div className="card__content">
				<h2 className="card__title">
					<a ref={titleRef} href="#" className="btn btn--link"></a>
				</h2>
				<p ref={descriptionRef} className="card__desc"></p>
				<ul className="card__stats-list">
					<li className="card__stats-list-item">
						<i className="icon-ethereum" aria-hidden="true"></i>
						<span ref={ethereumAmountRef}></span>
					</li>
					<li className="card__stats-list-item">
						<i className="icon-clock" aria-hidden="true"></i>
						<span ref={remainingTimeRef}></span>
					</li>
				</ul>
				<div className="card__author">
					<img
						ref={authorImgRef}
						className="card__author-img"
						width="33"
						height="33"
					/>
					<span className="card__author-desc">
						Creation of&nbsp;
						<a
							ref={authorNameRef}
							href="#"
							className="btn btn--link"></a>
					</span>
				</div>
			</div>
		</article>
	);
};

export default Card;
