import {NavLink} from 'react-router-dom';
import Logo from '../images/logo.png';
import {RiHome2Fill} from 'react-icons/ri';
import {GoPerson} from 'react-icons/go';
import {FaLaptopCode, FaEnvelope} from 'react-icons/fa';
import {BsGithub, BsLinkedin} from 'react-icons/bs';
import styles from './Sidebar.module.scss';

function Sidebar() {
	return (
		<div id={styles.sidebar}>
			<img src={Logo} alt='Logo' />

			<nav id={styles.page_links}>
				<NavLink to='/' id={styles.home}>
					<RiHome2Fill />
				</NavLink>
				<NavLink to='/about' id={styles.about}>
					<GoPerson />
				</NavLink>
				<NavLink to='/projects' id={styles.projects}>
					<FaLaptopCode />
				</NavLink>
				<NavLink to='/contact' id={styles.contact}>
					<FaEnvelope />
				</NavLink>
			</nav>

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
