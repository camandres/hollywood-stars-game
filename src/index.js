import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore } from 'redux';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

import AddActorForm from './AddActorForm/AddActorForm';
import HollywoodGame from './HollywoodGame/HollywoodGame';
import { actors, getTurnData } from './actor-data';

const initialState = {
	actors,
	turnData: getTurnData(actors),
	answerStatus: 'none'
}
const actionHandlers = {
	'ANSWER_SELECTED': (state, action) => Object.assign({}, state, { answerStatus: getAnswerStatus(action.answer, state.turnData) }),
	'CONTINUE': (state, action) => Object.assign({}, state, { answerStatus: 'none', turnData: getTurnData(state.actors) }),
	'ADD_ACTOR': (state, action) => Object.assign({}, state, { actor: state.actors.concat(action.actor) })
};
const reducer = (state = initialState, action) => {
	let actionHandler = actionHandlers[action.type];

	return (actionHandler && actionHandler(state, action)) || state;
};
const store = createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function getAnswerStatus(answer, turnData) {
	let isCorrect = turnData.actor.movies.includes(answer);
	return isCorrect ? 'correct' : 'incorrect';
}

const HollywoodGameWrapper = () =>
<Provider store={store}>
	<HollywoodGame />
</Provider>;

const ActorFormWrapper = () =>
<Provider store={store}>
	<AddActorForm />
</Provider>

const app = <BrowserRouter>
	<React.Fragment>
		<Route exact path="/" component={HollywoodGameWrapper}/>
		<Route path="/add" component={ActorFormWrapper}/>
	</React.Fragment>
</BrowserRouter>

ReactDOM.render(app, document.getElementById('root'));

registerServiceWorker();
