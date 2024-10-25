import { Outlet } from "react-router-dom";
import NavbarCustom from "./NavbarCustom";
import AnimatedCursor from "react-animated-cursor";
import FooterCustom from "./FooterCustom";

const MainLayout = () => {
	return (
		<section>
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
			<NavbarCustom />
			<Outlet />
			<FooterCustom />
		</section>
	);
};

export default MainLayout;
