import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Continue, Footer, Hero, Turn } from './components';

import './HollywoodGame.css';

const mapStateToProps = (state) => {
	return {
		turnData: state.turnData,
		answerStatus: state.answerStatus
	}
};
const mapDispatchToProps = (dispatch) => {
	return {
		onAnswerSelected: (answer) => dispatch({ type: 'ANSWER_SELECTED', answer }),
		onContinue: () => dispatch({ type: 'CONTINUE' })
	};
}; 

const HollywoodGame = connect(mapStateToProps, mapDispatchToProps)(({
	turnData,
	answerStatus,
	onAnswerSelected,
	onContinue
}) =>
<div className="container-fluid">
	<Hero/>
	<Turn {...turnData} answerStatus={answerStatus} onAnswerSelected={onAnswerSelected}/>
	<Continue show={answerStatus === 'correct'} onContinue={onContinue}/>
	<p>
		<Link to="/add">Add an actor</Link>
	</p>
	<Footer/>
</div>);
 
export default HollywoodGame;
