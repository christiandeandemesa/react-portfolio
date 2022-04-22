import {Canvas} from '@react-three/fiber';
import Globe from '../components/Globe';
import Loader from 'react-loaders';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './About.module.scss';

function About() {
	// Styling for the notification pop-up.
	const notify = () =>
		toast('Left-click to rotate the canvas. ⭐ Right-click to move the earth. 🌎', {
			position: 'bottom-right',
			autoClose: 4000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: false,
			progress: undefined,
			theme: 'dark'
		});

	return (
		<>
			<div id={styles.about}>
				<p id={styles.title}>&lt;h1&gt; About &lt;/h1&gt;</p>

				<div id={styles.text_container}>
					<h3 id={styles.text_top}>
						Hello, I'm Christian Demesa, an up-and-coming React Developer!
					</h3>
					<h3 id={styles.text_mid}>
						I am a father of two wonderful boys, and my hobbies include playing piano,
						hiking, and fiddling around with React libraries. I have a B.A. in
						philosophy and transitioned over to React full-stack development.
					</h3>
					<h3 id={styles.text_bot}>
						My skills include HTML5, CSS3, JavaScript 8/11, Sass, Bootstrap, jQuery,
						Typescript, MERN, Redux, MySQL, and Git.
					</h3>
				</div>

				{/* The Canvas object defines the React Three Fiber scene. */}
				<Canvas>
					<Globe />
				</Canvas>

				{/* Button for notification. */}
				<button onClick={notify} id={styles.btn}>
					Click Me!
				</button>
				{/* Notification pop-up. */}
				<ToastContainer />
			</div>

			{/* Loading pacman screen. */}
			<Loader type='pacman' />
		</>
	);
}

export default About;
