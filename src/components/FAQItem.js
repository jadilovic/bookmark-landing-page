import { useState } from 'react';
import arrowIcon from '../images/icon-arrow.svg';
import arrowIconRed from '../images/icon-arrow-red.svg';

const FAQItem = ({ item }) => {
	const [activeAnswer, setActiveAnswer] = useState(item.active);

	return (
		<>
			<div
				onClick={() => setActiveAnswer(!activeAnswer)}
				className="question-container"
			>
				<span className={`question`}>{item.question}</span>
				<img
					src={activeAnswer ? arrowIconRed : arrowIcon}
					alt="arrow icon"
					className={`arrow${activeAnswer ? ' rotate-arrow' : ''}`}
				/>
			</div>
			<p className={`answer${activeAnswer ? ' show-answer' : ''}`}>
				{item.answer}
			</p>
		</>
	);
};
export default FAQItem;
