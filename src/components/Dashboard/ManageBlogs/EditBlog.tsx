import { useNavigate, useParams } from "react-router-dom";
import {
	useGetBlogByIdQuery,
	useUpdateBlogMutation,
} from "../../../redux/features/blog/blogApi";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import imageUploader from "../../../utils/imageUploder";
import { Upload } from "lucide-react";
import RichTextEditor from "../../RichTextEditor";
import { Button, Label, TextInput } from "flowbite-react";

const EditBlog = () => {
	const { id } = useParams();
	const { data } = useGetBlogByIdQuery(id);
	const navigate = useNavigate();
	const [updateBlog] = useUpdateBlogMutation();

	const formik = useFormik({
		initialValues: {
			image: data?.data?.image,
			title: data?.data?.title,
			content: data?.data?.content,
			category: data?.data?.category || "",
		},
		// validationSchema: Yup.object({
		// 	image: Yup.string().required("Required"),
		// 	title: Yup.string().required("Required"),
		// 	content: Yup.string().required("Required"),
		// 	category: Yup.string().optional(),
		// }),
		onSubmit: async (values) => {
			const toastId = toast("Processing...");
			try {
				const updatedData = { ...values, id: data.data._id };
				const res = await updateBlog(updatedData);
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
				navigate("/dashboard/blogs");
			} catch (err) {
				toast.error("Something went wrong!", {
					id: toastId,
					duration: 2000,
				});
			}
		},
	});
	const handleImageUpload = async (e: any) => {
		const toastId = toast.loading("Uploading");
		try {
			const res = await imageUploader(e);
			if (res.success) {
				formik.setFieldValue("image", res.data.url);
				toast.success("Image uploaded!", {
					id: toastId,
					duration: 2000,
				});
			} else {
				toast.error("Image upload failed!", {
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
	};

	const handleBlogDetailChange = (blogDetails: string) => {
		formik.setFieldValue("content", blogDetails);
	};

	if (data) {
		return (
			<div>
				<h1 className="text-4xl text-center text-custom my-5">
					Write A Blog
				</h1>
				<form onSubmit={formik.handleSubmit}>
					<div>
						<Label htmlFor="title">Blog Title</Label>
						<TextInput
							id="title"
							name="title"
							defaultValue={data?.data?.title}
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

					<div className="flex items-center justify-center w-full my-5">
						<div className="w-52 mx-5 border-dashed border-2 p-2">
							<img src={data?.data?.image} alt="" />
						</div>
						<label
							htmlFor="dropzone-file"
							className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
						>
							<div className="flex flex-col items-center justify-center pt-5 pb-6">
								<Upload className="text-4xl text-gray-300" />
								<p className="py-1 text-sm text-gray-600 dark:text-gray-500">
									<span className="font-semibold capitalize">
										Click to upload blog banner image
									</span>
								</p>
								<p className="text-xs text-gray-500 dark:text-gray-400">
									PNG, JPG, WEBP up to 10MB
								</p>
							</div>

							<input
								id="dropzone-file"
								type="file"
								className="hidden"
								accept=".png, .jpg, .jpeg, .webp"
								onChange={handleImageUpload}
							/>
						</label>
					</div>

					<div>
						<RichTextEditor
							content={data?.data?.content}
							onChange={handleBlogDetailChange}
						/>
					</div>

					<div className="flex justify-center">
						<Button type="submit" className="w-96 bg-custom mb-8">
							Update Blog
						</Button>
					</div>
				</form>
			</div>
		);
	} else {
		<p>Loading ...</p>;
	}
};

export default EditBlog;
