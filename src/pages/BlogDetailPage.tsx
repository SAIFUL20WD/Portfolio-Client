import parse from "html-react-parser";
import { useParams } from "react-router-dom";
import { useGetBlogByIdQuery } from "../redux/features/blog/blogApi";

const BlogDetailPage = () => {
	const { id } = useParams();
	const { data } = useGetBlogByIdQuery(id);

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
					<div className="tiptap">{parse(data.data?.content)}</div>
				</div>
			)}
		</div>
	);
};

export default BlogDetailPage;
