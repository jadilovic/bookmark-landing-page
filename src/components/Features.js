import { useState } from 'react';
import '../styles/Features.css';
import Feature from './Feature';

const Features = () => {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<main>
			<section className="features">
				<h2 className="section-title">Features</h2>
				<p className="section-description">
					Our aim is to make it quick and easy for you to access your favourite
					websites. Your bookmarks sync between your devices so you can access
					them on the go.
				</p>
			</section>
			<ul className="features-tabs">
				<li onClick={() => setActiveTab(0)} className="feature-tab">
					<span className={`${activeTab === 0 ? 'active-feature' : ''}`}>
						Simple Bookmarking
					</span>
				</li>
				<li onClick={() => setActiveTab(1)} className="feature-tab">
					<span className={`${activeTab === 1 ? 'active-feature' : ''}`}>
						Speedy Searching
					</span>
				</li>
				<li onClick={() => setActiveTab(2)} className="feature-tab">
					<span className={`${activeTab === 2 ? 'active-feature' : ''}`}>
						Easy Sharing
					</span>
				</li>
			</ul>
			<Feature activeTab={activeTab} />
		</main>
	);
};
export default Features;
