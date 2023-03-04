// React
import React, { useContext } from 'react';
// Context API
import { ContextProvider } from '../context/context';
// Libraries
import { Link } from 'react-router-dom';
// Data
import { dataStyles } from '../data/dataContainer';

const Home = () => {
	const { myInfo } = useContext(ContextProvider);

	const { first_name, last_name, email } = myInfo;

	return (
		<div className="container">
			<h3>Hi, {first_name + ' ' + last_name}!</h3>
			<p>{email}</p>
			<hr></hr>
			<Link to="/users" className={dataStyles.textDeco}>
				<p>Users</p>
				<img
					src={dataStyles.userBanner}
					alt={dataStyles.userBanner}
					style={{ height: '100px' }}
				/>
			</Link>
		</div>
	);
};

export default Home;
