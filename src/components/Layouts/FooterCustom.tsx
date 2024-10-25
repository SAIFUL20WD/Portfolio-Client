import { Github, Linkedin, Mail } from "lucide-react";

const FooterCustom = () => {
	return (
		<div className="bg-[#1e1e1e] text-center p-5 -mt-20 text-[#c6c9d8]">
			<div className="flex justify-center gap-3 my-5">
				<Github
					size={30}
					className="p-1 border rounded-lg hover:bg-[#f9004d] hover:scale-110 duration-200"
				/>
				<Linkedin
					size={30}
					className="p-1 border rounded-lg hover:bg-[#f9004d] hover:scale-110 duration-200"
				/>
				<Mail
					size={30}
					className="p-1 border rounded-lg hover:bg-[#f9004d] hover:scale-110 duration-200"
				/>
			</div>
			<h3>
				Developed By{" "}
				<span className="text-custom font-bold">Saiful Alam Fayez</span>
			</h3>
			<p>Copyright © {new Date().getFullYear()}, All Rights Reserved</p>
		</div>
	);
};

export default FooterCustom;
