import { Link, useParams } from "react-router-dom";
import { useGetProjectByIdQuery } from "../redux/features/project/projectApi";
import parse from "html-react-parser";

const ProjectDetailPage = () => {
	const { id } = useParams();
	const { data } = useGetProjectByIdQuery(id);

	return (
		<div className="max-w-5xl mx-auto my-10 max-md:mx-5">
			{data?.data && (
				<div className="mb-32">
					<h1 className="text-4xl text-center font-bold my-10">
						{data.data?.title}
					</h1>
					<div className="mt-5 mb-8">
						<img
							src={data.data?.image}
							alt="Banner Image"
							width={1000}
							height={500}
							className="rounded-lg"
						/>
					</div>
					<div className="tiptap">
						{parse(data.data?.description)}
					</div>
					<div className="flex gap-5 my-5">
						<Link to={data?.data?.liveLink}>
							<button className="button-custom">Live Link</button>
						</Link>
						<Link to={data?.data?.githubLink?.client}>
							<button className="button-custom">
								Client Code
							</button>
						</Link>
						{data?.data?.githubLink?.server && (
							<Link to={data?.data?.githubLink?.server}>
								<button className="button-custom">
									Server Code
								</button>
							</Link>
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default ProjectDetailPage;
