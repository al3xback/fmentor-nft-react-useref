import './Card.scss';

const Card = ({ data }) => {
	return (
		<article className="card">
			<div className="card__image">
				<img width="302" height="302" src={data.imageUrl} alt="" />
			</div>
			<div className="card__content">
				<h2 className="card__title">
					<a href="#/" className="btn btn--link">
						{data.title}
					</a>
				</h2>
				<p className="card__desc">{data.description}</p>
				<ul className="card__stats-list">
					<li className="card__stats-list-item">
						<i className="icon-ethereum" aria-hidden="true"></i>
						<span>{data.ethereumAmount} ETH</span>
					</li>
					<li className="card__stats-list-item">
						<i className="icon-clock" aria-hidden="true"></i>
						<span>{data.remainingTime} days left</span>
					</li>
				</ul>
				<div className="card__author">
					<img
						className="card__author-img"
						width="33"
						height="33"
						src={data.author.imageUrl}
						alt={data.author.name}
					/>
					<span className="card__author-desc">
						Creation of&nbsp;
						<a href="#/" className="btn btn--link">
							{data.author.name}
						</a>
					</span>
				</div>
			</div>
		</article>
	);
};

export default Card;
