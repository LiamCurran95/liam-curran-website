import About from "./About.jsx";
import Contact from "./Contact.jsx";
import headshot from "../../resources/liam-pic.jpg";

export default function AboutandContact() {
	return (
		<section className="mx-auto flex w-full max-w-6xl flex-col gap-10 py-10">
			<div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
				<About />
				<div className="flex flex-col gap-8">
					<div className="flex flex-col items-center rounded-3xl border border-border bg-card/90 p-6 text-center shadow-sm sm:p-10">
						<img
							src={headshot}
							alt="Liam Curran headshot"
							className="h-64 w-64 rounded-full border-4 border-border/40 object-cover"
							loading="lazy"
						/>
						<p className="mt-4 text-sm uppercase tracking-[0.3em] text-body/60">
							Manchester, UK
						</p>
					</div>
					<Contact />
				</div>
			</div>
		</section>
	);
}
