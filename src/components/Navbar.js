import { useState } from 'react';
import '../styles/Navbar.css';
import bookmarkLogo from '../images/logo-bookmark.svg';
import bookmarkLogoDark from '../images/logo-bookmark-dark.svg';
import hamburgerIcon from '../images/icon-hamburger.svg';
import closeIcon from '../images/icon-close.svg';
import facebookIcon from '../images/icon-facebook.svg';
import twitterIcon from '../images/icon-twitter.svg';

const Navbar = () => {
	const [openMenu, setOpenMenu] = useState(false);

	return (
		<nav>
			<ul className="navbar">
				<li>
					<img src={bookmarkLogo} alt="bookmark logo" />
				</li>
				<li>
					<img
						id="hamburger"
						onClick={() => setOpenMenu(true)}
						src={hamburgerIcon}
						alt="hamburger icon"
					/>
				</li>
			</ul>
			<ul className={`navbar-mobile ${openMenu ? 'active' : ''} `}>
				<li className="navbar-mobile-header">
					<img src={bookmarkLogoDark} alt="bookmark logo dark" />
					<img
						id="close"
						onClick={() => setOpenMenu(false)}
						src={closeIcon}
						alt="close icon"
					/>
				</li>
				<li className="navbar-mobile-links">Features</li>
				<li className="navbar-mobile-links">Pricing</li>
				<li className="navbar-mobile-links">Contact</li>
				<li className="navbar-mobile-links">
					<button id="login-btn">Login</button>
				</li>
				<li className="social-mobile-links">
					<img id="facebook" src={facebookIcon} alt="facebook icon" />
					<img id="twitter" src={twitterIcon} alt="twitter icon" />
				</li>
			</ul>
		</nav>
	);
};
export default Navbar;
