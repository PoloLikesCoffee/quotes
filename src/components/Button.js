import React from 'react';

const Button = ({ title }) => {
	return (
		<button className="card__button" id={title}>
			{title}
		</button>
	);
};

export default Button;
