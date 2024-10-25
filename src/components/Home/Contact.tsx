import { Mail, MapPin, Phone } from "lucide-react";
import { Button, Label, Textarea, TextInput } from "flowbite-react";
import { useFormik } from "formik";
import contact from "../../assets/images/contact.png";
import * as Yup from "yup";
import { useSendMessageMutation } from "../../redux/features/auth/authApi";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
	const [sendMessage] = useSendMessageMutation();

	const formik = useFormik({
		initialValues: { name: "", email: "", message: "" },
		validationSchema: Yup.object({
			name: Yup.string().required("Name is required"),
			email: Yup.string()
				.email("Invalid email address")
				.required("Email is required"),
			message: Yup.string().required("Message is required"),
		}),
		onSubmit: async (values) => {
			const toastId = toast("Processing...");
			try {
				const res = await sendMessage(values);
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
				formik.resetForm();
			} catch (err) {
				toast.error("Something went wrong!", {
					id: toastId,
					duration: 2000,
				});
			}
		},
	});
	return (
		<div className="bg-[#1c1b1b] pt-5 -mt-20">
			<Toaster />
			<h3 className="text-3xl text-center font-bold py-5 my-10">
				<span className="border-b-4 border-[#f9004d]">
					Get In Touch
				</span>
			</h3>
			<div className="max-w-7xl mx-auto grid grid-cols-12 gap-10 text-[#c6c9d8]">
				<div className="max-md:col-span-12 max-md:mx-5 col-span-4 flex flex-col items-center leading-8">
					<Phone size={50} className="text-custom mb-1" />
					<p className="text-xl font-bold">Call Me</p>
					<p>+8801647579998</p>
				</div>
				<div className="max-md:col-span-12 max-md:mx-5 col-span-4 flex flex-col items-center leading-8">
					<MapPin size={50} className="text-custom mb-1" />
					<p className="text-xl font-bold">Location</p>
					<p>Chattogram, Bangladesh</p>
				</div>
				<div className="max-md:col-span-12 max-md:mx-5 col-span-4 flex flex-col items-center leading-8">
					<Mail size={50} className="text-custom mb-1" />
					<p className="text-xl font-bold">Email</p>
					<p>saiful2076af@gmail.com</p>
				</div>
			</div>
			<div className="max-w-7xl mx-auto flex max-md:flex-col gap-10 my-16">
				<form
					className="lg:min-w-[600px] lg:ml-[50px] max-md:mx-5"
					onSubmit={formik.handleSubmit}
				>
					<p className="text-[#c6c9d8]">
						I'd Love to hear from you. Whether you have a question
						or just want to say Hi, feel free to drop a message.
						I'll try my best to get back to you!
					</p>
					<div>
						<div className="mb-2 block">
							<Label htmlFor="name" value="Name" />
						</div>
						<TextInput
							id="name"
							type="text"
							placeholder="Your Name"
							value={formik.values.name}
							required
							className="custom-input"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							helperText={
								formik.touched.name && formik.errors.name ? (
									<span className="text-red-500">
										{formik.errors.name}
									</span>
								) : null
							}
						/>
					</div>
					<div>
						<div className="mb-2 block">
							<Label htmlFor="email" value="Email" />
						</div>
						<TextInput
							id="email"
							type="email"
							placeholder="Your Email"
							value={formik.values.email}
							required
							className="custom-input"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							helperText={
								formik.touched.email && formik.errors.email ? (
									<span className="text-red-500">
										{formik.errors.email}
									</span>
								) : null
							}
						/>
					</div>
					<div>
						<div className="mb-2 block">
							<Label htmlFor="message" value="Message" />
						</div>
						<Textarea
							id="message"
							placeholder="Your Message..."
							value={formik.values.message}
							required
							rows={5}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							helperText={
								formik.touched.message &&
								formik.errors.message ? (
									<span className="text-red-500">
										{formik.errors.message}
									</span>
								) : null
							}
						/>
					</div>
					<Button type="submit" className="w-full bg-custom mt-5">
						Send Message
					</Button>
				</form>
				<div className="min-w-[400px]">
					<img src={contact} alt="contact" />
				</div>
			</div>
		</div>
	);
};

export default Contact;
