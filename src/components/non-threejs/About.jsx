export default function About() {
	return (
		<div className="about">
			<h1>About</h1>
			<div className="content">
				<p>
					After graduating from The University of Manchester in 2019 I got to
					work as an Environmental Planner. I enjoyed aspects of the work but
					overall I didn't find it engaging or particularly rewarding. <br></br>
					<br></br> I noticed that the bits of the work I found most engaging
					were using technological tools to enhance and improve my workflow; I
					have always had an interest in computers and programming in general
					and have dabbled with a Raspberry Pi to emulate classic games (don't
					tell Nintendo), built computers for myself, friends and family, and
					just generally enjoy tinkering and problem solving, so I decided to
					have a career change! <br></br>
					<br></br>I began learning Ruby and Python with Codecademy and
					freecodecamp, and shortly began applying for various software
					development jobs to no avail. After six months of this I began to look
					into coding bootcamps, and fortunately got accepted by Northcoders to
					undertake a Software Development bootcamp with the backing of an
					Excellence Scholarship programme in late 2021.
					<br></br>
					<br></br>Since then I've really enjoyed getting stuck in with
					JavaScript, HTML, CSS, React, APIs, three.js, and quite frankly a huge
					amount of tech that the great tutors at Northcoders put us onto and
					I'm looking forwards to continuing to progress my personal knowledge.
				</p>
				<img
					src={require("../../images/liam-pic.jpg")}
					alt="liam-headshot"
					className="liam-headshot"
				></img>
			</div>
			<a
				href="https://drive.google.com/file/d/1PmISGsnBECadqG_JNU0IbN1QnBdKU1Hh/view?usp=sharing"
				target="_blank"
				rel="noopener noreferrer"
				className="button"
				alt="CV link"
			>
				CV
			</a>
		</div>
	);
}
