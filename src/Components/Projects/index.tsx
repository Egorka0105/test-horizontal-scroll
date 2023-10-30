'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NAV_BAR_ITEMS } from 'utils';
import styles from './index.module.scss';

gsap.registerPlugin(ScrollTrigger);

export const Projects = () => {
	const sectionRef = useRef(null);
	const triggerRef = useRef(null);

	useEffect(() => {
		const pin = gsap.fromTo(
			sectionRef.current,
			{ translateX: 0 },
			{
				translateX: '-200vw',
				ease: 'none',
				duration: 1,
				scrollTrigger: {
					trigger: triggerRef.current,
					start: 'top top',
					scrub: 0.6,
					pin: true,
				},
			}
		);

		return () => {
			pin.kill();
		};
	}, []);

	return (
		<section id={NAV_BAR_ITEMS.PROJECTS} className={styles.projects}>
			<div ref={triggerRef}>
				<div ref={sectionRef} className={styles.inner}>
					<div className={styles.scroll}>
						<h2>section 1</h2>
					</div>

					<div className={styles.scroll}>
						<h2>section 2</h2>
					</div>

					<div className={styles.scroll}>
						<h2>section 3</h2>
					</div>
				</div>
			</div>
		</section>
	);
};
