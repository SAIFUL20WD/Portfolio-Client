import ParticlesCustom from "../Particles/ParticlesCustom";
import Typewriter from "typewriter-effect";
import banner from "../../assets/images/programming_banner.png";
import { FileDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";

const Hero = () => {
	return (
		<div className="max-w-7xl mx-auto flex max-md:flex-col max-md:mx-5 justify-center gap-10">
			<ParticlesCustom />
			<div className="lg:mt-40">
				<Slide direction="left" triggerOnce>
					<h1 className="text-5xl font-bold leading-tight">
						Hi, I'm <br /> Saiful Alam Fayez
					</h1>
					<div className="text-custom font-bold text-3xl my-3">
						<Typewriter
							options={{
								strings: [
									"FullStack Developer",
									"MERN Stack Developer",
									"Programmer",
									"JavaScript Enthusiast",
								],
								autoStart: true,
								loop: true,
							}}
						/>
					</div>
					<p className="text-[#c6c9d8]">
						A self-motivated and enthusiastic web developer. To gain
						confidence and fame using my potential in the field of
						web development and express my innovative creative
						skills for self and company growth. I always like to
						learn new things and have experience with new stuff.
					</p>

					<Link
						to="https://drive.google.com/file/d/1G26SKEHJJNZXtlaZy265DCLkF-AXhpoT/view?usp=sharing"
						target="_blank"
					>
						<button className="button-custom flex gap-1 my-3">
							<FileDown />
							Resume
						</button>
					</Link>
				</Slide>
			</div>
			<div className="max-w-[600px] mt-10">
				<Fade duration={2000}>
					<img src={banner} alt="banner" />
				</Fade>
			</div>
		</div>
	);
};

export default Hero;
