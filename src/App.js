import React, { Component } from 'react';

import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';

class App extends Component {
	state = {
		users : [
			{ userFirst: 'Ethan', userLast: 'Drake' },
			{ userFirst: 'Noah', userLast: 'Shen' }
		]
	};

	editFirstNameHandler = (event) => {
		this.setState({
			users : [
				{ userFirst: event.target.value, userLast: 'Drake' },
				{ userFirst: 'Noah', userLast: 'Shen' }
			]
		});
	};

	render() {
		const style = {
			backgroundColor : 'white',
			font            : 'inherit',
			border          : '1px solid blue',
			padding         : '8px'
		};

		return (
			<div className='App'>
				<button style={style} />
				<UserInput
					textUpdate={this.editFirstNameHandler.bind(this)}
					firstName={this.state.users[0].userFirst}
				/>
				<UserOutput userName={this.state.users[0].userFirst + ' ' + this.state.users[0].userLast} />
				<UserOutput userName={this.state.users[1].userFirst + ' ' + this.state.users[1].userLast} />
			</div>
		);
	}
}

export default App;
