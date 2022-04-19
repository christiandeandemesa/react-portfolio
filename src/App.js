import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.scss';

function App() {
	return (
		// BrowserRouter is for client side routing with URL segments.
		<BrowserRouter>
			{/* Routes holds all Route components. */}
			<Routes>
				{/* Route is a path appended to the URL, and element is what is rendered on that URL. */}
				<Route path='/' element={<Layout />}>
					{/* index will take on the parent Route's path (e.g. path='/'). 
						Navigate redirects by replacing the index or path. */}
					<Route index element={<Navigate replace to='home' />} />
					{/* Nested routes take on the path of their parent Route (e.g. path='/about'). */}
					<Route path='about' element={<About />} />
					<Route path='projects' element={<Projects />} />
					<Route path='contact' element={<Contact />} />
				</Route>
				{/* This route path uses a relative link which inherits the path of the closest sibling Route (e.g. path='/home'). */}
				<Route path='home' element={<Home />} />
				{/* Using a star signifies any path not outlined in the other Routes. */}
				<Route path='*' element={<Navigate replace to='home' />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
