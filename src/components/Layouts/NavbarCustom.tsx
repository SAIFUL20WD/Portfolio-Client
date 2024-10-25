import { Navbar } from "flowbite-react";

import { Link, NavLink } from "react-router-dom";

const NavbarCustom = () => {
	return (
		<Navbar fluid rounded className="max-w-7xl mx-auto z-50">
			<Navbar.Brand>
				<NavLink to="/">
					<span className="logo text-4xl">&lt;Saiful&#47;&gt;</span>
				</NavLink>
			</Navbar.Brand>
			<Navbar.Toggle />
			<Navbar.Collapse>
				<Navbar.Link as="span">
					<NavLink
						to="/"
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						Home
					</NavLink>
				</Navbar.Link>
				<Navbar.Link as="span">
					<NavLink
						to="/projects"
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						Projects
					</NavLink>
				</Navbar.Link>
				<Navbar.Link as="span">
					<NavLink
						to="/blogs"
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						Blog
					</NavLink>
				</Navbar.Link>
				<Navbar.Link as="span">
					<NavLink
						to="/contact"
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						Contact
					</NavLink>
				</Navbar.Link>
				<Navbar.Link as="span">
					<Link
						to="https://drive.google.com/file/d/1G26SKEHJJNZXtlaZy265DCLkF-AXhpoT/view?usp=sharing"
						target="_blank"
						className="bg-custom py-2 px-4 rounded"
					>
						Resume
					</Link>
				</Navbar.Link>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavbarCustom;
