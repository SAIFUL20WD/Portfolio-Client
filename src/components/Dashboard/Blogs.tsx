import { useGetAllBlogQuery } from "../../redux/features/blog/blogApi";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import BlogTable from "./ManageBlogs/BlogTable";

const BlogList = () => {
	const { data } = useGetAllBlogQuery(undefined);

	return (
		<>
			<div className="block items-center justify-between border-b border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:flex">
				<div className="mb-1 w-full">
					<div className="mb-4">
						<h1 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
							All Blogs
						</h1>
					</div>
					<Link to="/dashboard/blogs/add">
						<Button className="bg-custom">Add Blog</Button>
					</Link>
				</div>
			</div>
			<div className="flex flex-col">
				<div className="overflow-x-auto">
					<div className="inline-block min-w-full align-middle">
						<div className="overflow-hidden shadow">
							{data?.data ? (
								<BlogTable data={data.data} />
							) : (
								<h3 className="text-3xl m-5">No Blogs Found</h3>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default BlogList;
