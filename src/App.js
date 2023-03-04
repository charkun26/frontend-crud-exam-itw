// Context API
import { ContextParent } from './context/context';
// Libraries
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';
// Components
import { Home, Users, User, Nav } from './components/index';

function App() {
	return (
		<ContextParent>
			<div className="App">
				<Router>
					<Nav />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/users" element={<Users />} />
						<Route path="/user/:id" element={<User />} />
					</Routes>
				</Router>
			</div>
		</ContextParent>
	);
}

export default App;
