import { NAV_BAR_ITEMS } from 'utils';
import styles from './index.module.scss';

export const About = () => {
	return (
		<section id={NAV_BAR_ITEMS.ABOUT} className={styles.about}>
			<h2>About</h2>
		</section>
	);
};
