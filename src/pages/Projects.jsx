import {Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
// Swiper and swiper module styling.
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// Images
import Calculator from '../images/currency-calculator.png';
import Pokedex from '../images/pokedex.png';
import Youtube from '../images/youtube-video-search.png';
import Noteworthy from '../images/noteworthy.png';
import styles from './Projects.module.scss';

function Projects() {
	return (
		<div id={styles.projects}>
			<p id={styles.title}>&lt;h1&gt; Projects &lt;/h1&gt;</p>
			<Swiper
				// Swiper modules.
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				// Space between slides.
				spaceBetween={20}
				// Number of slides present at a time.
				slidesPerView={2}
				// Creates navigation arrows.
				navigation
				// Creates bullet points and makes them unclickable.
				pagination={{clickable: false}}
				// Creates scrollbar and makes it draggable.
				scrollbar={{draggable: true}}
			>
				{/* Each SwiperSlide component is a slide. */}
				<SwiperSlide>
					<img src={Calculator} alt='Currency Calculator' />
					<a
						href='https://google.com'
						target='_blank'
						rel='noreferrer'
						className={styles.demo}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img src={Pokedex} alt='Pokedex' />
					<a
						href='https://google.com'
						target='_blank'
						rel='noreferrer'
						className={styles.demo}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img src={Youtube} alt='Youtube Video Search' />
					<a
						href='https://google.com'
						target='_blank'
						rel='noreferrer'
						className={styles.demo}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img src={Noteworthy} alt='Noteworthy' />
					<a
						href='https://google.com'
						target='_blank'
						rel='noreferrer'
						className={styles.demo}
					/>
				</SwiperSlide>
				{/* Give space between the slides and bullet points. */}
				<br />
				<br />
			</Swiper>
		</div>
	);
}

export default Projects;
