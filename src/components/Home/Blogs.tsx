import { useGetAllBlogQuery } from "../../redux/features/blog/blogApi";
import BlogCard from "../Blog/BlogCard";

const Blogs = () => {
	const { data } = useGetAllBlogQuery(undefined);
	return (
		<div className="bg-[#262525] my-10 py-10 -mt-10">
			<h3 className="text-3xl text-center font-bold">
				<span className="border-b-4 border-[#f9004d]">My Blogs</span>
			</h3>
			<div className="max-w-7xl mx-auto grid grid-cols-12 gap-10 items-center my-20">
				{data?.data ? (
					data?.data?.map((blog) => (
						<BlogCard key={blog._id} post={blog} />
					))
				) : (
					<h3>No Blogs Found</h3>
				)}
			</div>
		</div>
	);
};

export default Blogs;
