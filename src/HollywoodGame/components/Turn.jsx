import React from 'react';

import Star from './Star';

export const Turn = ({ actor, movies, answerStatus = 'none', onAnswerSelected }) => {
	const backgroundColor = getBackgroundColor(answerStatus);

	return (
		<div className="row turn" style={{ backgroundColor }}>
			<div className="col-4 offset-1">
				<img src={actor.imageUrl} alt="Actor" className="actorImage"/>
			</div>
			<div className="col-6">
				{movies.map((title) => <Star title={title} key={title} onClick={onAnswerSelected} />)}
			</div>
		</div>
	);
}

function getBackgroundColor(answerStatus) {
	return {
		none: 'white',
		correct: 'green',
		incorrect: 'red'
	}[answerStatus];
}
