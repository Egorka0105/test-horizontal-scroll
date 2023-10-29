import { About, Contact, Projects, Team } from 'Components';
import styles from './page.module.css';

export default function Home() {
	return (
		<main className={styles.main}>
			<About />
			<Team />
			<Projects />
			<Contact />
		</main>
	);
}
