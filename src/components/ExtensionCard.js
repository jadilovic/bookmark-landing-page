import '../styles/Extensions.css';
import bgDots from '../images/bg-dots.svg';

const ExtensionCard = ({ browser }) => {
	return (
		<>
			<img src={browser.logo} alt="browser logo" className="card-image" />
			<h3 className="card-title">{browser.title}</h3>
			<p className="card-description">{browser.description}</p>
			<img className="card-dots" src={bgDots} alt="background dots" />
			<button className="card-btn">Add & Install Extension</button>
		</>
	);
};
export default ExtensionCard;
