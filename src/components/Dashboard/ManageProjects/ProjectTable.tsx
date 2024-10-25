import { Button, Table } from "flowbite-react";
import DeleteProjectModal from "./DeleteProject";
import { Link } from "react-router-dom";

const ProjectTable = ({ data }) => {
	return (
		<Table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
			<Table.Head className="bg-gray-100 dark:bg-gray-700">
				<Table.HeadCell>No</Table.HeadCell>
				<Table.HeadCell>Image</Table.HeadCell>
				<Table.HeadCell>Title</Table.HeadCell>
				<Table.HeadCell>Live Link</Table.HeadCell>
				<Table.HeadCell>Action</Table.HeadCell>
			</Table.Head>
			<Table.Body className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
				{data.map((item, idx) => {
					return (
						<Table.Row
							className="hover:bg-gray-100 dark:hover:bg-gray-700"
							key={item._id}
						>
							<Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
								{idx + 1}
							</Table.Cell>
							<Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
								<img
									src={item.image}
									alt={item.title}
									className="w-20"
								/>
							</Table.Cell>
							<Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
								{item.title}
							</Table.Cell>
							<Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
								{item.liveLink}
							</Table.Cell>
							<Table.Cell className="space-x-2 whitespace-nowrap p-4">
								<div className="flex items-center gap-x-3">
									<Link
										to={`/dashboard/projects/edit/${item._id}`}
									>
										<Button className="bg-sky-500">
											Edit Project
										</Button>
									</Link>
									<DeleteProjectModal id={item._id} />
								</div>
							</Table.Cell>
						</Table.Row>
					);
				})}
			</Table.Body>
		</Table>
	);
};
export default ProjectTable;
