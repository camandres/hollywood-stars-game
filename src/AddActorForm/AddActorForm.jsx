import { omit } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './AddActorForm.css';

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'Vikram Chandra',
			imageUrl: 'https://flavorwire.files.wordpress.com/2014/09/chandra.jpg',
			movies: ['Sacred Games'],
			movieTemp: ''
		}
	}

	onFieldChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	onFormSubmit = (event) => {
		event.preventDefault();
		this.props.onAddActor(omit(this.state, ['movieTemp']));
	}

	onAddStar = (event) => {
		event.preventDefault();
		let movies = this.state.movies.concat(this.state.movieTemp);
		this.setState({
			movies,
			movieTemp: ''
		});
	}

	render() {
		return <form onSubmit={this.onFormSubmit}>
			<div className="text-input">
				<label htmlFor="name">Name</label>
				<input
					type="text"
					name="name"
					value={this.state.name}
					onChange={this.onFieldChange}
				/>
			</div>
			<div className="text-input">
				<label htmlFor="imageUrl">Image URL</label>
				<input
					type="text"
					name="imageUrl"
					value={this.state.imageUrl}
					onChange={this.onFieldChange}
				/>
			</div>
			<div className="text-input">
				<label htmlFor="movieTemp">Star</label>
				{this.state.movies.map((movie, i) => <p key={i}>{movie}</p>)}
				<input 
					type="text" 
					name="movieTemp"
					value={this.state.movieTemp}
					onChange={this.onFieldChange}
				/>
				<button
					className="btn btn-info"
					onClick={this.onAddStar}
				>+</button>
			</div>
<div id="button-wrapper">
			<button role="submit" className="btn btn-success">Add Actor</button>
			</div>
		</form>;
	}
}

function AddActorForm({ onAddActor }) {
	return <div className="add-actor-form">
		<h1>Add Actor</h1>
		<Form onAddActor={onAddActor}/>
	</div>;
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		onAddActor: (actor) => {
			dispatch({ type: 'ADD_ACTOR', actor });
			props.history.push('/');
		}
	};
};

export default withRouter(connect(() => Object.assign({}), mapDispatchToProps)(AddActorForm));
