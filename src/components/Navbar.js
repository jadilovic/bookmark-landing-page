import { useState } from 'react';
import '../styles/Navbar.css';
import bookmarkLogo from '../images/logo-bookmark.svg';
import bookmarkLogoDark from '../images/logo-bookmark-dark.svg';
import hamburgerIcon from '../images/icon-hamburger.svg';
import closeIcon from '../images/icon-close.svg';
import closeIconRed from '../images/icon-close-red.svg';
import SocialLinks from './SocialLinks';

const Navbar = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const [isHovered, setIsHovered] = useState(false);

	return (
		<nav className="main-nav">
			<ul className="navbar">
				<li>
					<img src={bookmarkLogo} alt="bookmark logo" />
				</li>
				<li className="mobile-screen">
					<img
						id="hamburger"
						onClick={() => setOpenMenu(true)}
						src={hamburgerIcon}
						alt="hamburger icon"
					/>
				</li>
			</ul>
			<ul className="navbar-desktop">
				<li className="navbar-desktop-link">Features</li>
				<li className="navbar-desktop-link">Pricing</li>
				<li className="navbar-desktop-link">Contact</li>
				<li className="navbar-desktop-link">
					<button id="nav-login-btn">Login</button>
				</li>
			</ul>
			<ul className={`navbar-mobile ${openMenu ? 'active' : ''} `}>
				<li className="navbar-mobile-header">
					<img src={bookmarkLogoDark} alt="bookmark logo dark" />
					<img
						id="close"
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
						onClick={() => setOpenMenu(false)}
						src={isHovered ? closeIconRed : closeIcon}
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
					<SocialLinks />
				</li>
			</ul>
		</nav>
	);
};
export default Navbar;
