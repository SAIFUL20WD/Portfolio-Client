import { Link } from "react-router-dom";
import { useGetAllProjectQuery } from "../../redux/features/project/projectApi";
import { Slide } from "react-awesome-reveal";

const Projects = () => {
	const { data: projects } = useGetAllProjectQuery(undefined);

	return (
		<div className="bg-[#101010] my-10 py-10 -mt-10">
			<h3 className="text-3xl text-center font-bold">
				<span className="border-b-4 border-[#f9004d]">Projects</span>
			</h3>
			<div className="max-w-7xl mx-auto grid grid-cols-12 gap-10 items-center my-10">
				{projects &&
					projects?.data?.map((project, index) => (
						<div
							className="max-md:col-span-12 max-md:mx-5 col-span-4 h-[500px] bg-[#2f2e2e] p-5 rounded flex flex-col justify-between"
							key={index}
						>
							<Slide direction="left" triggerOnce>
								<div>
									<img
										src={project.image}
										alt={project.title}
										className="mb-5"
									/>
									<h3 className="text-2xl font-bold my-5">
										{project.title}
									</h3>
									<p className="text-sm text-[#c6c9d8]">
										{project.shortDescription}
									</p>
								</div>
								<div className="flex gap-5 mt-auto place-items-end">
									<Link to={project.liveLink} target="_blank">
										<button className="button-custom">
											Live
										</button>
									</Link>
									<Link to={`/project/${project._id}`}>
										<button className="button-custom">
											Project Details
										</button>
									</Link>
								</div>
							</Slide>
						</div>
					))}
			</div>
		</div>
	);
};

export default Projects;
