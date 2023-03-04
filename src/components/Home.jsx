// React
import React, { useContext } from 'react';
// Context API
import { ContextProvider } from '../context/context';
// Libraries
import { Link } from 'react-router-dom';

const Home = () => {
	const { myInfo } = useContext(ContextProvider);

	return (
		<div className="container">
			Home Hi! <br></br>
			{myInfo.name}
			{myInfo.email}
			<Link to="/users">
				<p>Users</p>
			</Link>
		</div>
	);
};

export default Home;
