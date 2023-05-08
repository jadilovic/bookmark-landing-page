import featureIllustration1 from '../images/illustration-features-tab-1.svg';
import featureIllustration2 from '../images/illustration-features-tab-2.svg';
import featureIllustration3 from '../images/illustration-features-tab-3.svg';

const Feature = ({ activeTab }) => {
	const featuresData = [
		{
			title: 'Bookmark in one click',
			description:
				'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
			illustration: featureIllustration1,
		},
		{
			title: 'Intelligent search',
			description:
				'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
			button: 'More info',
			illustration: featureIllustration2,
		},
		{
			title: 'Share your bookmarks',
			description:
				'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
			button: 'More info',
			illustration: featureIllustration3,
		},
	];

	const getFeatureDecorationHeight = (tabValue) => {
		switch (tabValue) {
			case 1:
				return '65vw';
			case 2:
				return '70vw';
			default:
				return '50vw';
		}
	};

	return (
		<section className="feature">
			<img
				id="feature-illustration"
				src={featuresData[activeTab].illustration}
				alt="feature illustration"
			/>
			<article>
				<h2 className="section-title">{featuresData[activeTab].title}</h2>
				<p className="section-description">
					{featuresData[activeTab].description}
				</p>
			</article>
			{featuresData[activeTab]?.button ? (
				<button id="more-info-btn">{featuresData[activeTab]?.button}</button>
			) : null}
			<div
				className="feature-decoration"
				style={{ height: getFeatureDecorationHeight(activeTab) }}
			></div>
		</section>
	);
};

export default Feature;
