import {useState, useRef} from 'react';
import emailjs from '@emailjs/browser';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'react-loaders';
import Profile from '../images/profile.jpg';
import styles from './Contact.module.scss';

function Contact() {
	// Initial state of all of the form's inputs are empty strings.
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	// Since the form is changing whenever we change any of its input values, we use useRef to avoid re-rendering whenever the form value is mutated.
	const form = useRef();

	const success = () =>
		toast('Email was sent 📬', {
			position: 'bottom-right',
			autoClose: 4000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: false,
			progress: undefined,
			theme: 'dark'
		});

	const fail = () =>
		toast('Email was not sent 🛑', {
			position: 'bottom-right',
			autoClose: 4000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: false,
			progress: undefined,
			theme: 'dark'
		});

	// sendEmail is an arrow function that sends the form to emailjs, then resets the form.
	const sendEmail = e => {
		// Stops the component from re-rendering and refreshing the page.
		e.preventDefault();

		emailjs
			// sendForm takes your serviceID, templateID, and publicKey from your emailjs account, and the form object's current value which has the user's form data.
			.sendForm(
				// Uses a .env file to keep the strings a secret.
				process.env.REACT_APP_SERVICE_ID,
				process.env.REACT_APP_TEMPLATE_ID,
				form.current,
				process.env.REACT_APP_PUBLIC_KEY
			)
			.then(
				// then if the result passes, it logs OK (result.text) and resets the form's inputs to empty strings.
				result => {
					console.log(result.text);
					// success toast function.
					success();
					setName('');
					setEmail('');
					setMessage('');
				},
				// then if the result fails, it logs error.text and resets the form's inputs to empty strings.
				error => {
					console.log(error.text);
					// fail toast function.
					fail();
					setName('');
					setEmail('');
					setMessage('');
				}
			);
	};

	return (
		<>
			<div id={styles.contact}>
				<p id={styles.title}>&lt;h1&gt; Contact &lt;/h1&gt;</p>

				{/* Our from references the form connected to useRef, and when the Send button is clicked it runs the sendEmail function. */}
				<form ref={form} onSubmit={sendEmail} id={styles.form}>
					{/* input defines an input field. */}
					<input
						type='text'
						// Reflects the word used in your emailjs template.
						name='user_name'
						placeholder='Name'
						// value and onChange are used to update the state for the user.
						value={name}
						onChange={e => setName(e.target.value)}
						// required is used to avoid submitting a form with an empty input.
						required
					/>
					<input
						// Used with required.
						type='email'
						name='user_email'
						placeholder='Email'
						value={email}
						onChange={e => setEmail(e.target.value)}
						// required is used avoid submitting a form with a string not in an email format.
						required
					/>
					{/* textarea defines a textarea field. */}
					<textarea
						name='message'
						placeholder='Please leave me a message'
						value={message}
						onChange={e => setMessage(e.target.value)}
						required
					/>
					{/* Send button. */}
					<input type='submit' value='Send' id={styles.btn} />
				</form>

				<img src={Profile} alt='Profile' id={styles.img} />

				<ToastContainer />
			</div>
			<Loader type='pacman' />
		</>
	);
}

export default Contact;
