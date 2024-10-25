import { format, parseISO } from "date-fns";
import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
	return (
		<div className="max-md:col-span-12 max-md:mx-5 col-span-4 bg-[#2f2e2e] p-5 rounded flex flex-col justify-between">
			<div>
				<img
					src={post.image}
					alt={post.title}
					className="mb-5" // Added margin to separate image from title
				/>
				<h3 className="text-2xl font-bold my-5 line-clamp-2">
					{post.title}
				</h3>
				<p>
					{format(
						parseISO(post.createdAt as string),
						"dd MMMM, yyyy"
					)}
				</p>
			</div>
			<Link
				to={`/blog/${post._id}`}
				className="hover:underline hover:text-[#f9004d] mt-5"
			>
				<button className="button-custom">Blog Details</button>
			</Link>
		</div>
	);
};

export default BlogCard;
