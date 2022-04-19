import About from "./About";
import Contact from "./Contact";

export default function AboutandContact() {
	return (
		<div className="about-and-contact">
			<About />
			<img
				src={require("../../resources/liam-pic.jpg")}
				alt="liam-headshot"
				className="liam-headshot"
			></img>
			<Contact />
		</div>
	);
}
