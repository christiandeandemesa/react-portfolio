import {Canvas} from '@react-three/fiber';
import Globe from '../components/Globe';
import styles from './About.module.scss';

function About() {
	return (
		<div id={styles.about}>
			<p id={styles.title}>&lt;h1&gt; About &lt;/h1&gt;</p>

			<div id={styles.text}>
				<h3>
					Hello, I'm Christian Demesa, an up-and-coming React Devloper! I am a father of
					two wonderful boys, and my hobbies include playing piano, hiking, and fiddling
					around with React libraries. I have a B.A. in philosophy and transitioned over
					to React full-stack development. My skills include HTML5, CSS3, JavaScript 8/11,
					Sass, Bootstrap, jQuery, Typescript, MERN, Redux, MySQL, and Git.
				</h3>
			</div>

			{/* The Canvas object defines the React Three Fiber scene. */}
			<Canvas>
				<Globe />
			</Canvas>
		</div>
	);
}

export default About;
