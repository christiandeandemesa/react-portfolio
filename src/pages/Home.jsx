import TypeWriterEffect from 'react-typewriter-effect';
import Particles from 'react-tsparticles';
import {loadFull} from 'tsparticles';
import Loader from 'react-loaders';
import Sidebar from '../components/Sidebar';
import styles from './Home.module.scss';

function Home() {
	// Needed for Particles component's init props.
	const particlesInit = async main => {
		console.log(main);
		await loadFull(main);
	};

	// Needed for Particles component's loaded props.
	const particlesLoaded = container => {
		console.log(container);
	};

	return (
		<div>
			<Sidebar />
			<div id={styles.home}>
				<div id={styles.home_text}>
					<h1>
						Hello, <br />
						I'm Christian Demesa
					</h1>

					<TypeWriterEffect
						// Styles the multiple texts.
						textStyle={{
							fontFamily: 'Merriweather, serif',
							color: '#000000',
							fontWeight: 'bold',
							fontSize: '2em'
						}}
						// Delay before first text is typed in milliseconds.
						startDelay={1000}
						// Color of cursor.
						cursorColor='#000000'
						// Multiple texts that will be typed out.
						multiText={[
							'a Blank Slate',
							'Father',
							'Philosopher',
							'Pianist',
							'Hiker',
							'and React Developer'
						]}
						// Delay between multiple texts in milliseconds.
						multiTextDelay={2000}
						// Loops through the multiple texts indefinitely.
						multiTextLoop={true}
						// How quickly texts is typed in milliseconds.
						typeSpeed={90}
					/>
				</div>
			</div>
			<Particles
				id='tsparticles'
				init={particlesInit}
				loaded={particlesLoaded}
				// The options object holds the tsParticles options.
				options={{
					// The background canvas.
					background: {
						// Image of the background canvas.
						image: "url('https://particles.js.org/images/background3.jpg')",
						// Background canvas position.
						position: 'center',
						// Background canvas repeat.
						repeat: 'no-repeat',
						// Background canvas size.
						size: 'cover'
					},

					// The foreground canvas covering the background canvas.
					backgroundMask: {
						// Enables the backgroundMask object.
						enable: true,
						// Styling the foreground canvas.
						cover: {
							// Color of the foreground canvas.
							color: '#ffffff'
						}
					},

					// Enables the device's retina detection setting.
					detectRetina: true,

					// Frame per second limit for particle animations.
					fpsLimit: 120,

					// Mouse interactivity with particles.
					interactivity: {
						// Mouse interaction works on the entire screen.
						detectsOn: 'window',
						// Mouse events.
						events: {
							// On-click mouse effect.
							onclick: {
								// Enables this onclick object.
								enable: true,
								// Particles avoid the mouse.
								mode: 'repulse'
							},
							// On-hover mouse effect.
							onhover: {
								// Enables this onhover object.
								enable: true,
								// Generates a trail of particles under the mouse.
								mode: 'trail'
							}
						},
						// Styles the mode keys in the events object.
						modes: {
							// The repulse mode.
							repulse: {
								// Distance particles are from the mouse.
								distance: 200
							},
							// The trail mode.
							trail: {
								// Delay between each generation of particles.
								delay: 0.01,
								// How many particles are generated at a time.
								quantity: 2
							}
						}
					},

					// Styles the particles.
					particles: {
						// Movement of particles.
						move: {
							// Enables this move object.
							enable: true,
							// Particles disappear when moving past the screen's border.
							outModes: 'destroy',
							// How quickly particles move.
							speed: 5
						},
						// Number of particles.
						number: {
							// How many particles on the screen when first rendered.
							value: 0
						},
						// Transparency of the particles.
						opacity: {
							// How transparent particles are.
							value: 0.9
						},
						// Shape of the particles.
						shape: {
							// Shape type.
							type: 'circle'
						},
						// Size of the particles.
						size: {
							// How large particles are.
							value: {min: 10, max: 50},
							// Animation if the value has a min and max.
							animation: {
								// At what size particles disappear.
								destroy: 'max',
								// Enables this animation object.
								enable: true,
								// How quickly particles move from the startValue to the opposite value.
								speed: 6,
								// Starting size of particles.
								startValue: 'min',
								// All particles change size at the same rate.
								sync: true
							}
						}
					}
				}}
			/>
			;
		</div>
	);
}

export default Home;
