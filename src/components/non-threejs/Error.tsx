import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <section className="mx-auto flex h-[60vh] w-full max-w-4xl flex-col items-center justify-center gap-6 rounded-3xl border border-border bg-card/80 p-8 text-center shadow-sm">
      <p className="text-lg text-body/80">
        It looks like you took a wrong turn.
      </p>
      <Link to="/" className="retro-button">
        Return Home
      </Link>
    </section>
  );
};
