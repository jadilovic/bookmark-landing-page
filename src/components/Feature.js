import { useEffect, useState, useRef } from 'react';
import featureIllustration1 from '../images/illustration-features-tab-1.svg';
import featureIllustration2 from '../images/illustration-features-tab-2.svg';
import featureIllustration3 from '../images/illustration-features-tab-3.svg';

const Feature = ({ activeTab }) => {
	const [elementWidth, setElementWidth] = useState(null);
	const [elementHeight, setElementHeight] = useState(null);
	const elementRef = useRef(null);

	useEffect(() => {
		const resizeObserver = new ResizeObserver((entries) => {
			const { width, height } = entries[0].contentRect;
			setElementWidth(width);
			setElementHeight(height);
		});

		if (elementRef.current) {
			resizeObserver.observe(elementRef.current);
		}

		return () => {
			if (elementRef.current) {
				resizeObserver.unobserve(elementRef.current);
			}
		};
	}, []);

	const featuresData = [
		{
			title: 'Bookmark in one click',
			description:
				'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
			illustration: featureIllustration1,
			button: 'More info',
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

	return (
		<section className="feature">
			<div className="image-decoration-container">
				<img
					ref={elementRef}
					id="feature-illustration"
					src={featuresData[activeTab].illustration}
					alt="feature illustration"
				/>
				<div
					className="feature-decoration"
					style={{
						height: `${activeTab > 0 ? elementHeight - 50 : elementHeight}px`,
						width: `${
							activeTab > 0 ? elementWidth - 100 : elementWidth - 50
						}px`,
					}}
				></div>
			</div>
			<article>
				<h2 className="section-title">{featuresData[activeTab].title}</h2>
				<p className="section-description">
					{featuresData[activeTab].description}
				</p>
				<button id="more-info-btn">{featuresData[activeTab]?.button}</button>
			</article>
		</section>
	);
};

export default Feature;
