import React from 'react';

const Button = ({ title, handleClick }) => {
	return (
		<button className="card__button" id={title} onClick={handleClick}>
			{title}
		</button>
	);
};

export default Button;
