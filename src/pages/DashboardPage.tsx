import { Outlet } from "react-router-dom";
import DashboardNavbar from "../components/Layouts/DashboardNavbar";
import DashboardSidebar from "../components/Layouts/DashboardSidebar";
import AnimatedCursor from "react-animated-cursor";
import { Toaster } from "react-hot-toast";

const DashboardPage = () => {
	return (
		<>
			<DashboardNavbar />
			<AnimatedCursor
				innerSize={15}
				outerSize={8}
				color="193, 11, 111"
				outerAlpha={0.2}
				innerScale={0.7}
				outerScale={5}
				clickables={[
					"a",
					'input[type="text"]',
					'input[type="email"]',
					'input[type="number"]',
					'input[type="submit"]',
					'input[type="image"]',
					"label[for]",
					"select",
					"textarea",
					"button",
					".link",
				]}
				innerStyle={{
					backgroundColor: "var(--primary)",
				}}
				outerStyle={{
					border: "3px solid var(--primary)",
				}}
			/>
			<div className="flex items-start pt-16">
				<Toaster />
				<DashboardSidebar />
				<main className="relative min-h-screen w-full overflow-y-auto bg-gray-50 dark:bg-gray-900 lg:ml-64">
					<section className="px-4 pt-6 text-black">
						<Outlet />
					</section>
				</main>
			</div>
		</>
	);
};

export default DashboardPage;
