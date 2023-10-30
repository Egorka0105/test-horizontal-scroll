import { NAV_BAR_ITEMS } from 'utils';
import styles from './index.module.scss';

export const Contact = () => {
	return (
		<section id={NAV_BAR_ITEMS.CONTACT} className={styles.contact}>
			<h2>Contact</h2>
		</section>
	);
};
