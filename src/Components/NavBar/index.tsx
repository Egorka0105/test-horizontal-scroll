'use client';

import { handleClickScroll, navBarList } from 'utils';
import styles from './index.module.scss';

export const NavBar = () => (
	<nav className={styles.navBar}>
		{navBarList.map(item => (
			<a key={item.key} href={`#${item.name}`}>
				<button onClick={event => handleClickScroll(event, `#${item.name}`)}>{item.name}</button>
			</a>
		))}
	</nav>
);
