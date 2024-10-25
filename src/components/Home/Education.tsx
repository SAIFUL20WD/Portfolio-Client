import { Bounce, Fade } from "react-awesome-reveal";
import graduation from "../../assets/images/graduation.png";
const Education = () => {
	return (
		<div className="bg-[#101010] my-10 py-10">
			<h3 className="text-3xl text-center font-bold">
				<span className="border-b-4 border-[#f9004d]">Education</span>
			</h3>
			<div className="max-w-7xl mx-auto flex max-md:flex-col gap-10 items-center my-10">
				<div className="w-1/2">
					<Fade>
						<img src={graduation} alt="Graduation" />
					</Fade>
				</div>
				<div>
					<Bounce>
						<div className="p-10 bg-[#f9004d] my-5 rounded">
							<h4 className="text-xl">
								Islami Bank Institute of Technology
							</h4>
							<p className="text-lg">
								Diploma in Computer Engineering
							</p>
							<p>2020-2024</p>
							<p className="font-semibold">GPA: 3.62/4.00</p>
						</div>
						<div className="p-10 bg-[#f9004d] rounded">
							<h4 className="text-xl">
								Chittagong Laboratory School
							</h4>
							<p className="text-lg">Seconday School</p>
							<p>2015-2017</p>
							<p className="font-semibold">GPA: 4.82/5.00</p>
						</div>
					</Bounce>
				</div>
			</div>
		</div>
	);
};

export default Education;
