export default function Contact() {
	return (
		<section className="flex flex-col items-center gap-4 rounded-3xl border border-border bg-card/90 p-6 text-center shadow-sm sm:p-10">
			<h2 className="font-display text-3xl uppercase tracking-[0.2em] text-body">Contact</h2>
			<p className="text-base leading-relaxed text-body/80">
				Let’s talk about opportunities, collaborations, or the latest three.js tricks.
				LinkedIn is the best place to reach me.
			</p>
			<a
				href="https://www.linkedin.com/in/liamcurran1995/"
				target="_blank"
				rel="noopener noreferrer"
				className="inline-flex h-16 w-16 items-center justify-center rounded-full border-2 border-border bg-surface transition hover:-translate-y-0.5"
				aria-label="Visit LinkedIn profile"
			>
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png"
					alt="LinkedIn icon"
					className="h-8 w-8"
					loading="lazy"
				/>
			</a>
		</section>
	);
}
