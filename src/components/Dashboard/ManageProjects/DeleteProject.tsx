import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { CircleAlert, Trash } from "lucide-react";
import { useDeleteProjectMutation } from "../../../redux/features/project/projectApi";

const DeleteProjectModal = ({ id }) => {
	const [isOpen, setOpen] = useState(false);
	const [deleteProject] = useDeleteProjectMutation();

	const handleDeleteProject = async () => {
		const toastId = toast("Processing...");
		try {
			const res = await deleteProject(id);
			if (!res.error) {
				toast.success(res.data.message, {
					id: toastId,
					duration: 2000,
				});
			} else {
				toast.error(res.error.data.message, {
					id: toastId,
					duration: 2000,
				});
			}
		} catch (err) {
			toast.error("Something went wrong!", {
				id: toastId,
				duration: 2000,
			});
		}
		setOpen(false);
	};

	return (
		<>
			<Button className="bg-red-700" onClick={() => setOpen(!isOpen)}>
				<div className="flex items-center gap-x-2">
					<Trash />
					Delete
				</div>
			</Button>
			<Modal onClose={() => setOpen(false)} show={isOpen} size="md">
				<Modal.Header className="px-3 pt-3 pb-0">
					<span className="sr-only">Delete Skill</span>
				</Modal.Header>
				<Modal.Body className="px-6 pb-6 pt-0">
					<div className="flex flex-col items-center gap-y-6 text-center">
						<CircleAlert size={50} className="text-red-600" />
						<p className="text-lg text-gray-500 dark:text-gray-300">
							Are you sure you want to delete this project?
						</p>
						<div className="flex items-center gap-x-3">
							<Button
								color="failure"
								onClick={handleDeleteProject}
							>
								Yes, I'm sure
							</Button>
							<Button color="gray" onClick={() => setOpen(false)}>
								No, cancel
							</Button>
						</div>
					</div>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default DeleteProjectModal;
