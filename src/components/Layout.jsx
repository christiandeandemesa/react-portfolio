import {Outlet} from 'react-router-dom';
import Sidebar from './Sidebar';
import styles from './Layout.module.scss';

function Layout() {
	return (
		<div>
			<Sidebar />

			<div id={styles.page}>
				<span id={styles.top_tags}>
					<span>return &#40;</span>
					<span>&lt;div&gt;</span>
				</span>

				<Outlet />

				<span id={styles.bot_tags}>
					<span>&lt;/div&gt;</span>
					<span>&#41;;</span>
				</span>
			</div>
		</div>
	);
}

export default Layout;
