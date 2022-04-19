import {NavLink} from 'react-router-dom';
// Image.
import Logo from '../images/logo.png';
// React-icons.
import {RiHome2Fill} from 'react-icons/ri';
import {GoPerson} from 'react-icons/go';
import {FaLaptopCode, FaEnvelope} from 'react-icons/fa';
import {BsGithub, BsLinkedin} from 'react-icons/bs';
import styles from './Sidebar.module.scss';

function Sidebar() {
	return (
		<div id={styles.sidebar}>
			{/* Image. */}
			<img src={Logo} alt='Logo' />

			{/* Portfolio links. */}
			<nav id={styles.page_links}>
				<NavLink
					to='/home'
					id={styles.home}
					// Add style to NavLink so icon is colored if the user is on that page.
					style={({isActive}) => {
						return {color: isActive ? '#fba541' : ''};
					}}
				>
					<RiHome2Fill />
				</NavLink>
				<NavLink
					to='/about'
					id={styles.about}
					style={({isActive}) => {
						return {color: isActive ? '#fba541' : ''};
					}}
				>
					<GoPerson />
				</NavLink>
				<NavLink
					to='/projects'
					id={styles.projects}
					style={({isActive}) => {
						return {color: isActive ? '#fba541' : ''};
					}}
				>
					<FaLaptopCode />
				</NavLink>
				<NavLink
					to='/contact'
					id={styles.contact}
					style={({isActive}) => {
						return {color: isActive ? '#fba541' : ''};
					}}
				>
					<FaEnvelope />
				</NavLink>
			</nav>

			{/* Github and LinkedIn links. */}
			<nav id={styles.web_links}>
				<a
					href='https://github.com/christiandeandemesa'
					target='_blank'
					rel='noreferrer'
					id={styles.github}
				>
					<BsGithub />
				</a>

				<a
					href='https://www.linkedin.com/in/christian-demesa-learning-new-things/'
					target='_blank'
					rel='noreferrer'
					id={styles.linkedin}
				>
					<BsLinkedin />
				</a>
			</nav>
		</div>
	);
}

export default Sidebar;
