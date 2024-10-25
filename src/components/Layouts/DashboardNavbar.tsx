import { Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";

const DashboardNavbar = () => {
	return (
		<Navbar
			fluid
			className="fixed z-30 w-full bg-white border-b border-gray-200"
		>
			<div className="w-full p-3 lg:px-5 lg:pl-3">
				<div className="flex items-center justify-between">
					<div className="flex items-center">
						<Navbar.Brand as="div">
							<NavLink to="/">
								<span className="logo text-4xl">
									&lt;Saiful&#47;&gt;
								</span>
							</NavLink>
						</Navbar.Brand>
					</div>
				</div>
			</div>
		</Navbar>
	);
};

export default DashboardNavbar;
