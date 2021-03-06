import {Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
// Swiper and swiper module styling.
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Loader from 'react-loaders';
// Images
import Calculator from '../images/currency-calculator.png';
import Pokedex from '../images/pokedex.png';
import Youtube from '../images/youtube-video-search.png';
import Noteworthy from '../images/noteworthy.png';
import styles from './Projects.module.scss';

function Projects() {
	return (
		<>
			<div id={styles.projects}>
				<p id={styles.title}>
					<span id={styles.title_one}>&lt;</span>
					<span id={styles.title_two}>h</span>
					<span id={styles.title_three}>1</span>
					<span id={styles.title_four}>&gt;</span>
					<span id={styles.title_five}> </span>
					<span id={styles.title_six}>P</span>
					<span id={styles.title_seven}>r</span>
					<span id={styles.title_eight}>o</span>
					<span id={styles.title_nine}>j</span>
					<span id={styles.title_ten}>e</span>
					<span id={styles.title_eleven}>c</span>
					<span id={styles.title_twelve}>t</span>
					<span id={styles.title_thirteen}>s</span>
					<span id={styles.title_fourteen}> </span>
					<span id={styles.title_fifteen}>&lt;</span>
					<span id={styles.title_sixteen}>/</span>
					<span id={styles.title_seventeen}>h</span>
					<span id={styles.title_eighteen}>1</span>
					<span id={styles.title_nineteen}>&gt;</span>
				</p>
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
					id={styles.swiper}
				>
					{/* Each SwiperSlide component is a slide. */}
					<SwiperSlide>
						<img src={Calculator} alt='Currency Calculator' />
						<a
							href='https://github.com/christiandeandemesa/currency-calculator'
							target='_blank'
							rel='noreferrer'
							className={styles.demo}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img src={Pokedex} alt='Pokedex' />
						<a
							href='https://github.com/christiandeandemesa/pokedex'
							target='_blank'
							rel='noreferrer'
							className={styles.demo}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img src={Youtube} alt='Youtube Video Search' />
						<a
							href='https://github.com/christiandeandemesa/youtube-video-search'
							target='_blank'
							rel='noreferrer'
							className={styles.demo}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img src={Noteworthy} alt='Noteworthy' />
						<a
							href='https://github.com/christiandeandemesa/noteworthy'
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
			<Loader type='pacman' />
		</>
	);
}

export default Projects;
