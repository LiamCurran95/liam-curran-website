import { Link } from "react-router-dom";

export default function Error() {
	return (
		<div className="error">
			<p>It looks like you took a wrong turn!</p>
			<button type="button" className="button">
				<Link to={`/`}>Return to the homepage</Link>
			</button>
		</div>
	);
}
