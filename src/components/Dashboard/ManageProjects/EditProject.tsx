import { Button, Label, Textarea, TextInput } from "flowbite-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import {
	useGetProjectByIdQuery,
	useUpdateProjectMutation,
} from "../../../redux/features/project/projectApi";
import { useNavigate, useParams } from "react-router-dom";
import RichTextEditor from "../../RichTextEditor";

const EditProject = () => {
	const { id } = useParams();
	const { data } = useGetProjectByIdQuery(id);
	const navigate = useNavigate();

	const [updateProject] = useUpdateProjectMutation();

	const formik = useFormik({
		initialValues: {
			image: data?.data?.image,
			title: data?.data?.title,
			description: data?.data?.description,
			shortDescription: data?.data?.shortDescription,
			liveLink: data?.data?.liveLink,
			clientCode: data?.data?.githubLink.client,
			serverCode: data?.data?.githubLink.server || "",
		},
		// validationSchema: Yup.object({
		// 	image: Yup.string().required("Required"),
		// 	title: Yup.string().required("Required"),
		// 	description: Yup.string().required("Required"),
		// 	shortDescription: Yup.string().required("Required"),
		// 	liveLink: Yup.string().required("Required"),
		// 	clientCode: Yup.string().required("Required"),
		// 	serverCode: Yup.string().optional(),
		// }),
		onSubmit: async (values) => {
			const toastId = toast("Processing...");
			try {
				const updatedData = {
					...values,
					githubLink: {
						client: values.clientCode,
						server: values.serverCode || "",
					},
					id: data.data._id,
				};
				const res = await updateProject(updatedData);
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

	if (data) {
		return (
			<div className="mx-10">
				<h1 className="text-4xl text-center text-custom my-5">
					Edit Project
				</h1>
				<form onSubmit={formik.handleSubmit}>
					<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
						<div>
							<Label htmlFor="image">Project Thumbnail</Label>
							<TextInput
								id="image"
								name="image"
								defaultValue={data?.data?.image}
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
						<div>
							<Label htmlFor="title">Project Title</Label>
							<TextInput
								id="title"
								name="title"
								defaultValue={data?.data?.title}
								className="mt-1"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								helperText={
									formik.touched.title &&
									formik.errors.title ? (
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
								defaultValue={data?.data?.liveLink}
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
							<Label htmlFor="clientCode">
								Project Client Code
							</Label>
							<TextInput
								id="clientCode"
								name="clientCode"
								defaultValue={data?.data?.githubLink.client}
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
							<Label htmlFor="serverCode">
								Project Server Code
							</Label>
							<TextInput
								id="serverCode"
								name="serverCode"
								defaultValue={
									data?.data?.githubLink.server || ""
								}
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
								defaultValue={data?.data?.shortDescription}
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
							<Label htmlFor="description">
								Project Description
							</Label>
							<div>
								<RichTextEditor
									content={data?.data?.description}
									onChange={handleBlogDetailChange}
								/>
							</div>
						</div>
					</div>

					<Button type="submit" className="bg-custom mb-5">
						Update Project
					</Button>
				</form>
			</div>
		);
	} else {
		return <div>Loading...</div>;
	}
};

export default EditProject;
