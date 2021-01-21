import React from 'react';

import './UserOutput.css';

const userOutput = (props) => {
	return (
		<div className='UserOutput'>
			<p>
				{props.userName} Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsum consectetur
				laborum sapiente corporis perspiciatis fuga mollitia saepe deleniti sed!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsum consectetur laborum sapiente
				corporis perspiciatis fuga mollitia saepe deleniti sed!
			</p>
		</div>
	);
};

export default userOutput;
