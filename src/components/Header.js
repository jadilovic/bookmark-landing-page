import '../styles/Header.css';
import heroIllustration from '../images/illustration-hero.svg';

const Header = () => {
	return (
		<header>
			<section className="intro">
				<h1>A Simple Bookmark Manager</h1>
				<p className="intro-header">
					A clean and simple interface to organize your favourite websites. Open
					a new browser tab and see your sites load instantly. Try it for free.
				</p>
				<article className="intro-navigation">
					<button id="chrome-btn">Get it on Chrome</button>
					<button id="firefox-btn">Get it on Firefox</button>
				</article>
			</section>
			<secttion className="hero">
				<img
					id="hero-illustration"
					src={heroIllustration}
					alt="hero illustration"
				/>
			</secttion>
			<div className="hero-decoration"></div>
		</header>
	);
};
export default Header;
