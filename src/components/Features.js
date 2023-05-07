import '../styles/Features.css';
import Feature from './Feature';

const Features = () => {
	return (
		<main>
			<section className="features">
				<h2 className="features-title">Features</h2>
				<p className="features-description">
					Our aim is to make it quick and easy for you to access your favourite
					websites. Your bookmarks sync between your devices so you can access
					them on the go.
				</p>
			</section>
			<ul className="features-tabs">
				<li className="feature-tab">
					<span>Simple Bookmarking</span>
				</li>
				<li className="feature-tab">
					<span>Speedy Searching</span>
				</li>
				<li className="feature-tab">
					<span>Easy Sharing</span>
				</li>
			</ul>
			<Feature />
		</main>
	);
};
export default Features;
