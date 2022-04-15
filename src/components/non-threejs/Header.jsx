import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
	const [navClicked, setNavClicked] = useState(false);

	return (
		<header>
			<div className="Navbar" alt="Navigation menu">
				<button
					className="button"
					onMouseEnter={() => {
						navClicked ? setNavClicked(false) : setNavClicked(true);
					}}
					onClick={() => {
						navClicked ? setNavClicked(false) : setNavClicked(true);
					}}
				>
					☰
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
					>
						Projects
					</Link>
					<Link
						to="/about"
						style={{ textDecoration: "none" }}
						id={navClicked ? "show" : "hide"}
						onClick={() => {
							setNavClicked(false);
						}}
					>
						About
					</Link>
					<Link
						to="/contact"
						style={{ textDecoration: "none" }}
						id={navClicked ? "show" : "hide"}
						onClick={() => {
							setNavClicked(false);
						}}
					>
						Contact
					</Link>
				</section>
				<div className="navbar-icons">
					<a
						href={"https://github.com/liamcurran95"}
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
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
							src="https://freepngimg.com/download/resume/9-2-resume-picture.png"
							className="CV-icon-header"
							alt="CV link"
						/>
					</a>
				</div>
			</div>
		</header>
	);
}
