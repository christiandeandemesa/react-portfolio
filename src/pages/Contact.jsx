import Loader from 'react-loaders';
import styles from './Contact.module.scss';

function Contact() {
	return (
		<>
			<div id={styles.contact}>
				<div id={styles.form}>
					<p id={styles.title}>&lt;h1&gt; Contact &lt;/h1&gt;</p>
				</div>
				<div id={styles.map}></div>
			</div>
			<Loader type='pacman' />
		</>
	);
}

export default Contact;
