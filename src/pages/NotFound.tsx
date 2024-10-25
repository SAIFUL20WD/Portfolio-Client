import { Link } from "react-router-dom";
import notFound from "../assets/images/not-found.png";
const NotFound = () => {
	return (
		<div className="max-w-5xl mx-auto text-center">
			<h1 className="text-5xl font-bold my-10">
				The Page You Are Looking For Does Not Exist!
			</h1>
			<Link to="/">
				<button className="button-custom">Go Home</button>
			</Link>
			<div>
				<img src={notFound} alt="Not Found" />
			</div>
		</div>
	);
};

export default NotFound;
