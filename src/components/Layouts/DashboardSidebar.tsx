import { Sidebar } from "flowbite-react";
import { BicepsFlexed, FolderGit2, House, Notebook } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const sideBarItems = [
	{ path: "/dashboard", icon: <House />, name: "Home" },
	{ path: "/dashboard/skills", icon: <BicepsFlexed />, name: "Skills" },
	{ path: "/dashboard/projects", icon: <FolderGit2 />, name: "Projects" },
	{ path: "/dashboard/blogs", icon: <Notebook />, name: "Blogs" },
];

const DashboardSidebar = () => {
	const [currentPage, setCurrentPage] = useState("");
	const naviagte = useNavigate();

	const handleSidebarNaviagtion = (e: any, url: string) => {
		e.preventDefault();
		naviagte(url);
		setCurrentPage(url);
	};

	useEffect(() => {
		const newPage = window.location.pathname;
		setCurrentPage(newPage);
	}, [currentPage]);

	return (
		<Sidebar
			aria-label="Sidebar with multi-level dropdown example"
			className="flex fixed top-0 left-0 z-20 flex-col flex-shrink-0 pt-20 h-full duration-75 border-r border-gray-200 lg:flex transition-width dark:border-gray-700"
		>
			<div className="flex h-full flex-col justify-between py-2">
				<div>
					<Sidebar.Items>
						<Sidebar.ItemGroup>
							{sideBarItems.map((item) => {
								return (
									<Sidebar.Item
										key={item.name}
										href={item.path}
										// icon={item.icon}
										onClick={(e: any) =>
											handleSidebarNaviagtion(
												e,
												item.path
											)
										}
										className={
											item.path === currentPage
												? "bg-gray-100 dark:bg-gray-700"
												: ""
										}
									>
										{item.name}
									</Sidebar.Item>
								);
							})}
						</Sidebar.ItemGroup>
					</Sidebar.Items>
				</div>
			</div>
		</Sidebar>
	);
};

export default DashboardSidebar;
