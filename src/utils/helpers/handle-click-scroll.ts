import { SyntheticEvent } from 'react';

export const handleClickScroll = (event: SyntheticEvent, href: string): void => {
	event.preventDefault();
	const doc = document.querySelector(href);

	if (doc) {
		doc.scrollIntoView({
			behavior: 'smooth',
		});
	}
};
