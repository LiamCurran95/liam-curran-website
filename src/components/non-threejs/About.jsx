const paragraphs = [
	"After graduating from The University of Manchester in 2019 I began my career as an Environmental Planner; I enjoyed aspects of the job but I could tell it wasn’t something I was truly passionate about.",
	"The elements of the job that I found most engaging were using technological tools to enhance and improve my workflow—automating Excel tasks with VBA, digging through planning portals more efficiently, or making interactive maps.",
	"I’ve always enjoyed tinkering with technology. From Raspberry Pi projects to building PCs for friends, I realised the curiosity that ads kept pointing at. I started learning Ruby and Python through Codecademy and freeCodeCamp and made a deal with myself: if I still enjoyed coding after long workdays, it was the right path.",
	"That commitment led me to Northcoders in 2021, where I sharpened my focus on JavaScript, React, APIs, and three.js. I’m still pursuing that curiosity by building experimental experiences like the one you’re viewing now.",
];

export default function About() {
	return (
		<section className="flex flex-col gap-5 rounded-3xl border border-border bg-card/90 p-6 shadow-sm sm:p-10">
			<h1 className="font-display text-3xl uppercase tracking-[0.2em] text-body">
				A Bit About Me
			</h1>
			<div className="space-y-4 text-base leading-relaxed text-body/80">
				{paragraphs.map((copy, index) => (
					<p key={index}>{copy}</p>
				))}
			</div>
			<div>
				<a
					href="https://drive.google.com/file/d/1PmISGsnBECadqG_JNU0IbN1QnBdKU1Hh/view?usp=sharing"
					target="_blank"
					rel="noopener noreferrer"
					className="retro-button"
					aria-label="View CV"
				>
					View CV
				</a>
			</div>
		</section>
	);
}
