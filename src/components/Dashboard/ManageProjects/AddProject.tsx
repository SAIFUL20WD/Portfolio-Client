import { Button, Label, Textarea, TextInput } from "flowbite-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { useAddProjectMutation } from "../../../redux/features/project/projectApi";
import RichTextEditor from "../../RichTextEditor";
import { useNavigate } from "react-router-dom";

const AddProject = () => {
	const navigate = useNavigate();
	const [addProject] = useAddProjectMutation();

	const formik = useFormik({
		initialValues: {
			image: "",
			title: "",
			description: "",
			shortDescription: "",
			liveLink: "",
			clientCode: "",
			serverCode: "",
		},
		validationSchema: Yup.object({
			image: Yup.string().required("Required"),
			title: Yup.string().required("Required"),
			description: Yup.string().required("Required"),
			shortDescription: Yup.string().required("Required"),
			liveLink: Yup.string().required("Required"),
			clientCode: Yup.string().required("Required"),
			serverCode: Yup.string().optional(),
		}),
		onSubmit: async (values) => {
			const toastId = toast("Processing...");
			try {
				const data = {
					...values,
					githubLink: {
						client: values.clientCode,
						server: values.serverCode || "",
					},
				};
				const res = await addProject(data);
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
				navigate("/dashboard/projects");
			} catch (err) {
				toast.error("Something went wrong!", {
					id: toastId,
					duration: 2000,
				});
			}
		},
	});

	const handleBlogDetailChange = (description: string) => {
		formik.setFieldValue("description", description);
	};

	return (
		<div className="mx-10">
			<h1 className="text-4xl text-center text-custom my-5">
				Add Project
			</h1>
			<form onSubmit={formik.handleSubmit}>
				<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
					<div>
						<Label htmlFor="image">Project Thumbnail</Label>
						<TextInput
							id="image"
							name="image"
							placeholder="Image URL"
							className="mt-1"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							helperText={
								formik.touched.image && formik.errors.image ? (
									<span className="text-red-500">
										{formik.errors.image}
									</span>
								) : null
							}
						/>
					</div>
					<div>
						<Label htmlFor="title">Project Title</Label>
						<TextInput
							id="title"
							name="title"
							placeholder="Project Title"
							className="mt-1"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							helperText={
								formik.touched.title && formik.errors.title ? (
									<span className="text-red-500">
										{formik.errors.title}
									</span>
								) : null
							}
						/>
					</div>
					<div>
						<Label htmlFor="liveLink">Project Live Link</Label>
						<TextInput
							id="liveLink"
							name="liveLink"
							placeholder="Project Live Link"
							className="mt-1"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							helperText={
								formik.touched.liveLink &&
								formik.errors.liveLink ? (
									<span className="text-red-500">
										{formik.errors.liveLink}
									</span>
								) : null
							}
						/>
					</div>
					<div>
						<Label htmlFor="clientCode">Project Client Code</Label>
						<TextInput
							id="clientCode"
							name="clientCode"
							placeholder="Project Client Code"
							className="mt-1"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							helperText={
								formik.touched.clientCode &&
								formik.errors.clientCode ? (
									<span className="text-red-500">
										{formik.errors.clientCode}
									</span>
								) : null
							}
						/>
					</div>
					<div>
						<Label htmlFor="serverCode">Project Server Code</Label>
						<TextInput
							id="serverCode"
							name="serverCode"
							placeholder="Project Server Code"
							className="mt-1"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							helperText={
								formik.touched.serverCode &&
								formik.errors.serverCode ? (
									<span className="text-red-500">
										{formik.errors.serverCode}
									</span>
								) : null
							}
						/>
					</div>
					<div className="lg:col-span-2">
						<Label htmlFor="shortDescription">
							Project Short Description
						</Label>
						<Textarea
							id="shortDescription"
							name="shortDescription"
							placeholder="Project Short Description..."
							rows={6}
							className="mt-1"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							helperText={
								formik.touched.shortDescription &&
								formik.errors.shortDescription ? (
									<span className="text-red-500">
										{formik.errors.shortDescription}
									</span>
								) : null
							}
						/>
					</div>
					<div className="lg:col-span-2">
						<Label htmlFor="description">Project Description</Label>
						<div>
							<RichTextEditor
								content="<p>Write Project Description Here...</p>"
								onChange={handleBlogDetailChange}
							/>
						</div>
					</div>
				</div>

				<Button type="submit" className="bg-custom mb-5">
					Add Project
				</Button>
			</form>
		</div>
	);
};

export default AddProject;
