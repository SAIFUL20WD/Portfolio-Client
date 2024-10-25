import { Navigate } from "react-router-dom";
import { verifyToken } from "../utils/verifyToken";
import { ReactNode } from "react";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
	const token = localStorage.getItem("token");
	if (!token) {
		return <Navigate to="/login" replace={true} />;
	}

	const user = verifyToken(token);

	if (user?.email === "saiful2076af@gmail.com") {
		return children;
	}

	return <Navigate to="/login" replace={true} />;
};

export default ProtectedRoute;
