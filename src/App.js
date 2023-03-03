// Context API
import { ContextParent } from './context/context';
// Libraries
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';
// Components
import Home from './components/Home';
import Users from './components/Users';

function App() {
	return (
		<ContextParent>
			<div className="App">
				<Router>
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route path="/users" element={<Users />} />
					</Routes>
				</Router>
			</div>
		</ContextParent>
	);
}

export default App;
