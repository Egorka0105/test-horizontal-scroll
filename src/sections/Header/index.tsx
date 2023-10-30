import { NavBar } from 'Components';
import styles from './index.module.scss';

export const Header = () => {
	return (
		<header className={styles.header}>
			<NavBar />
		</header>
	);
};
