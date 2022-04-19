import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { ThemeContext } from "../../context/themeContext";

export default function Header() {
	const [navClicked, setNavClicked] = useState(false);
	const { toggle, toggleFunction } = useContext(ThemeContext);

	return (
		<header className="header">
			<nav className="navbar" alt="Navigation menu">
				<button
					className="button"
					onMouseEnter={() => {
						navClicked ? setNavClicked(false) : setNavClicked(true);
					}}
				>
					☰
				</button>
				<button id="theme-button" onClick={toggleFunction}>
					{toggle ? " ☾ " : " ☼ "}
				</button>

				<section
					className="hamburger-menu-content"
					onMouseLeave={() => {
						setNavClicked(false);
					}}
				>
					<Link
						to="/"
						style={{ textDecoration: "none" }}
						id={navClicked ? "show" : "hide"}
						onClick={() => {
							setNavClicked(false);
						}}
						className="dropdown-link"
					>
						Home
					</Link>
					<Link
						to="/projects"
						style={{ textDecoration: "none" }}
						id={navClicked ? "show" : "hide"}
						onClick={() => {
							setNavClicked(false);
						}}
						className="dropdown-link"
					>
						Projects
					</Link>
					<Link
						to="/aboutandcontact"
						style={{ textDecoration: "none" }}
						id={navClicked ? "show" : "hide"}
						onClick={() => {
							setNavClicked(false);
						}}
						className="dropdown-link"
					>
						About and Contact
					</Link>
				</section>
			</nav>
			<div className="header-icons">
				<a
					href={"https://github.com/liamcurran95"}
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={
							toggle
								? "https://img.icons8.com/ios-glyphs/30/ffffff/github.png"
								: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
						}
						className="github-icon-header"
						alt="github link"
					/>
				</a>
				<a
					href={"https://www.linkedin.com/in/liamcurran1995/"}
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png"
						className="linkedin-icon-header"
						alt="linkedin link"
					/>
				</a>
				<a
					href={
						"https://drive.google.com/file/d/1PmISGsnBECadqG_JNU0IbN1QnBdKU1Hh/view?usp=sharing"
					}
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src="https://cdn.iconscout.com/icon/free/png-256/resume-1956282-1650445.png"
						className="CV-icon-header"
						alt="CV link"
					/>
				</a>
			</div>
		</header>
	);
}
