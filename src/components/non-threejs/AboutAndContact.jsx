export default function AboutandContact() {
	return (
		<>
			<div className="about">
				<h1>A Bit About Me</h1>
				<div className="content">
					<p>
						After graduating from The University of Manchester in 2019 I began
						my career as an Environmental Planner; I enjoyed aspects of the job
						but I could tell that it wasn't something I was truly passionate
						about.
						<br></br>
						<br></br> The elements of the job that I did find most engaging were
						using technological tools to enhance and improve my workflow, be it
						automating Excel tasks with VBA, finding more efficient ways to
						trawl through the unorganised mess that is local government planning
						portals, or making interactive digital maps.
						<br></br> <br></br>I have always had an interest in computers and
						programming in general and have dabbled with a Raspberry Pi to
						emulate classic games (don't tell Nintendo), built computers for
						myself, friends and family, and just generally enjoy tinkering and
						problem solving - which seemed to tie up with the skills mentioned
						in the targeted ads I seemed to constantly get telling me I should
						'Join a Software Development bootcamp', so I started looking!{" "}
						<br></br>
						<br></br>I began learning Ruby and Python with Codecademy and
						freecodecamp, not wanting to commit to a career change without
						knowing that I was going to be invested I said that if I could still
						be interested in learning to programme after working my regular job
						then it was the right thing for me. After a few months of learning I
						began to research coding bootcamps, and by December 2021 I got
						accepted by Northcoders to undertake a Software Development bootcamp
						with the backing of an Excellence Scholarship.
						<br></br>
						<br></br>Since then I've really enjoyed getting stuck in with
						JavaScript, HTML, CSS, React, APIs, three.js, and quite frankly a
						huge amount of other tech that the great tutors at Northcoders
						directed us towards, as well as the tools that I've discovered for
						myself in that time period, and I'm looking forwards to continuing
						to improve my personal knowledge.
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
			<div className="contact">
				<h1>Contact</h1>
				<p>If you would like to get in touch, please reach out via LinkedIn!</p>
				<a
					href={"https://www.linkedin.com/in/liamcurran1995/"}
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png"
						className="linkedin-icon"
						alt="linkedin link"
					/>
				</a>
			</div>
		</>
	);
}
