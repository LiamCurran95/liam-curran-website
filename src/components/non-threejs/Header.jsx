import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import clsx from "clsx";
import { useTheme } from "../../context/theme-context.jsx";

const navLinks = [
	{ label: "Home", to: "/" },
	{ label: "Projects", to: "/projects" },
	{ label: "About & Contact", to: "/aboutandcontact" },
];

const socialLinks = [
	{
		label: "GitHub",
		href: "https://github.com/liamcurran95",
		img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
	},
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/liamcurran1995/",
		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png",
	},
	{
		label: "Résumé",
		href: "https://drive.google.com/file/d/1PmISGsnBECadqG_JNU0IbN1QnBdKU1Hh/view?usp=sharing",
		img: "https://cdn.iconscout.com/icon/free/png-256/resume-1956282-1650445.png",
	},
];

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { theme, toggleTheme } = useTheme();

	const renderNavLink = (link) => (
		<NavLink
			key={link.to}
			to={link.to}
			className={({ isActive }) =>
				clsx(
					"text-sm font-medium uppercase tracking-[0.2em] transition-colors",
					isActive ? "text-accent" : "text-body/80 hover:text-body"
				)
			}
			onClick={() => setIsMenuOpen(false)}
		>
			{link.label}
		</NavLink>
	);

	return (
		<header className="sticky top-0 z-50 border-b border-border bg-surface/80 backdrop-blur">
			<div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 lg:h-20">
				<Link
					to="/"
					className="font-display text-2xl uppercase tracking-[0.4em]"
					aria-label="Navigate home"
				>
					LC
				</Link>

				<nav className="hidden items-center gap-8 md:flex">
					{navLinks.map((link) => renderNavLink(link))}
				</nav>

				<div className="flex items-center gap-3">
					<button
						type="button"
						onClick={toggleTheme}
						className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-body transition-colors hover:bg-button focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
						aria-label="Toggle theme"
					>
						<span aria-hidden>{theme === "light" ? "☾" : "☼"}</span>
					</button>
					<button
						type="button"
						className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card text-2xl md:hidden"
						onClick={() => setIsMenuOpen((prev) => !prev)}
						aria-label="Toggle navigation menu"
					>
						{isMenuOpen ? "✕" : "☰"}
					</button>
				</div>
			</div>

			{isMenuOpen && (
				<nav className="border-t border-border bg-surface px-4 py-4 md:hidden">
					<div className="flex flex-col gap-4">{navLinks.map(renderNavLink)}</div>
					<div className="mt-6 flex items-center gap-4">
						{socialLinks.map((social) => (
							<a
								key={social.label}
								href={social.href}
								target="_blank"
								rel="noopener noreferrer"
								className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card"
								aria-label={social.label}
							>
								<img
									src={social.img}
									alt={`${social.label} icon`}
									className="h-6 w-6 object-contain"
								/>
							</a>
						))}
					</div>
				</nav>
			)}

			<div className="mx-auto hidden max-w-5xl items-center justify-end gap-4 px-4 py-3 md:flex">
				{socialLinks.map((social) => (
					<a
						key={social.label}
						href={social.href}
						target="_blank"
						rel="noopener noreferrer"
						className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card transition hover:-translate-y-0.5"
						aria-label={social.label}
					>
						<img
							src={social.img}
							alt={`${social.label} icon`}
							className="h-6 w-6 object-contain"
						/>
					</a>
				))}
			</div>
		</header>
	);
}
