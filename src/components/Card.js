import React from 'react';
import Button from './Button';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

const Card = ({ quote, author, getNewQuote }) => {
	const handleClick = (event) => {
		getNewQuote();
	};

	return (
		<div className="card">
			{quote && author && (
				<div>
					<div className="card__quote">
						<div className="quotes-symbol">
							<FormatQuoteIcon />
						</div>
						<div className="quote-text">{quote}</div>
					</div>
					<div className="card__author">By {author}.</div>
				</div>
			)}
			<div className="button-container">
				<Button title={'New quote'} handleClick={handleClick} />
			</div>
		</div>
	);
};

export default Card;
