import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { useUpdateSkillMutation } from "../../../redux/features/skill/skillApi";
import { FilePenLine } from "lucide-react";

const EditSkillModal = ({ data }) => {
	const [isOpen, setOpen] = useState(false);

	const [updateSkill] = useUpdateSkillMutation();

	const formik = useFormik({
		initialValues: {
			name: data.name,
			image: data.image,
		},
		validationSchema: Yup.object({
			name: Yup.string().required("Required"),
			image: Yup.string().required("Required"),
		}),
		onSubmit: async (values) => {
			setOpen(false);
			const toastId = toast("Processing...");
			try {
				const updatedData = { ...values, id: data._id };
				const res = await updateSkill(updatedData);
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
		},
	});

	return (
		<>
			<Button className="bg-sky-500" onClick={() => setOpen(!isOpen)}>
				<div className="flex items-center gap-x-2">
					<FilePenLine />
					Edit
				</div>
			</Button>
			<Modal onClose={() => setOpen(false)} show={isOpen}>
				<form onSubmit={formik.handleSubmit}>
					<Modal.Header className="border-b border-gray-200 !p-6 dark:border-gray-700">
						<strong>Edit Skill</strong>
					</Modal.Header>
					<Modal.Body>
						<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
							<div>
								<Label htmlFor="name">Name</Label>
								<TextInput
									id="name"
									name="name"
									defaultValue={data.name}
									className="mt-1"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									helperText={
										formik.touched.name &&
										formik.errors.name ? (
											<span className="text-red-500">
												{formik.errors.name}
											</span>
										) : null
									}
								/>
							</div>
							<div>
								<Label htmlFor="image">Icon</Label>
								<TextInput
									id="image"
									name="image"
									defaultValue={data.image}
									className="mt-1"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									helperText={
										formik.touched.image &&
										formik.errors.image ? (
											<span className="text-red-500">
												{formik.errors.image}
											</span>
										) : null
									}
								/>
							</div>
						</div>
					</Modal.Body>
					<Modal.Footer>
						<Button type="submit" className="button-custom">
							Update Skill
						</Button>
					</Modal.Footer>
				</form>
			</Modal>
		</>
	);
};

export default EditSkillModal;
