import { NAV_BAR_ITEMS } from 'utils';
import styles from './index.module.scss';

export const Team = () => {
	return (
		<section id={NAV_BAR_ITEMS.TEAM} className={styles.team}>
			<h2>Team</h2>
		</section>
	);
};
