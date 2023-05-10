import { useState } from 'react';
import errorIcon from '../images/icon-error.svg';

const Contact = () => {
	const [email, setEmail] = useState('');
	const [emailError, setEmailError] = useState('');

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const validateEmail = (email) => {
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return re.test(email);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!validateEmail(email)) {
			setEmailError("Whoops, make sure it's an email");
			return;
		}
		console.log('Email:', email);
		setEmail('');
		setEmailError('');
	};

	return (
		<section className="footer-contact-container">
			<h4>35,000+ already joined</h4>
			<h5>Stay up-to-date with what we’re doing</h5>
			<form onSubmit={handleSubmit}>
				<div
					className={`footer-contact-input${emailError ? ' error-align' : ''}`}
				>
					<div className="input-container">
						<input
							type="text"
							id="email"
							className={emailError && 'error'}
							placeholder="Enter your email address"
							value={email}
							onChange={handleEmailChange}
						/>
						{emailError && (
							<img className="error-icon" src={errorIcon} alt="error icon" />
						)}
						{emailError && <p className="error-message">{emailError}</p>}
					</div>
					<button id="contact-btn" type="submit">
						Contact Us
					</button>
				</div>
			</form>
		</section>
	);
};
export default Contact;
