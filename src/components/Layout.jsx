import {Outlet} from 'react-router-dom';
import Sidebar from './Sidebar';
import styles from './Layout.module.scss';
import '../App.scss';

function Layout() {
	return (
		<div>
			<Sidebar />

			<div id={styles.page}>
				{/* Top text. */}
				<span id={styles.top_tags}>
					<span id={styles.top_tags_one}>return &#40;</span>
					<span id={styles.top_tags_two}>&lt;div&gt;</span>
				</span>

				{/* Outlet renders all the direct nested Route elements in App. */}
				<Outlet />

				{/* Bottom text. */}
				<span id={styles.bot_tags}>
					<span id={styles.bot_tags_one}>&lt;/div&gt;</span>
					<span id={styles.bot_tags_two}>&#41;;</span>
				</span>
			</div>
		</div>
	);
}

export default Layout;
