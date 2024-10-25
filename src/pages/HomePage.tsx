import About from "../components/Home/About";
import Blogs from "../components/Home/Blogs";
import Contact from "../components/Home/Contact";
import Education from "../components/Home/Education";
import Hero from "../components/Home/Hero";
import Projects from "../components/Home/Projects";
import Skills from "../components/Home/Skills";

const HomePage = () => {
	return (
		<>
			<Hero />
			<About />
			<Education />
			<Skills />
			<Projects />
			<Blogs />
			<Contact />
		</>
	);
};

export default HomePage;
