import React from 'react';

const userInput = (props) => {
	return (
		<div>
			<input onChange={props.textUpdate} value={props.firstName} />
		</div>
	);
};

export default userInput;
