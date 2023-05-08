import ExtensionCard from './ExtensionCard';
import chromeLogo from '../images/logo-chrome.svg';
import firefoxLogo from '../images/logo-firefox.svg';
import operaLogo from '../images/logo-opera.svg';

const Extensions = () => {
	const browsers = [
		{
			logo: chromeLogo,
			title: 'Add to Chrome',
			description: 'Minimum version 62',
		},
		{
			logo: firefoxLogo,
			title: 'Add to Firefox',
			description: 'Minimum version 55',
		},
		{
			logo: operaLogo,
			title: 'Add to Opera',
			description: 'Minimum version 46',
		},
	];
	return (
		<section className="extensions">
			<article className="extensions-intro">
				<h2 className="section-title">Download the extension</h2>
				<p className="section-description">
					We’ve got more browsers in the pipeline. Please do let us know if
					you’ve got a favourite you’d like us to prioritize.
				</p>
			</article>
			<article className="extension-cards">
				{browsers.map((browser, index) => {
					return (
						<div key={index} className="extension-card">
							<ExtensionCard browser={browser} />
						</div>
					);
				})}
			</article>
		</section>
	);
};
export default Extensions;
