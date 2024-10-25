import { Rotate } from "react-awesome-reveal";
import { useGetAllSkillQuery } from "../../redux/features/skill/skillApi";

const Skills = () => {
	const { data } = useGetAllSkillQuery(undefined);

	return (
		<div className="bg-[#1c1b1b] my-10 py-10 -mt-10">
			<h3 className="text-3xl text-center font-bold py-5">
				<span className="border-b-4 border-[#f9004d]">
					Skills and Technologies
				</span>
			</h3>
			<p className="max-w-5xl mx-auto text-[#c6c9d8] text-xl max-md:mx-5">
				Using a combination of cutting-edge technologies and reliable
				open-source software I build user-focused, performant apps and
				websites for smartphones, tablets, and desktops.
			</p>
			<div className="max-w-5xl mx-auto max-md:mx-5">
				<div className="flex flex-wrap gap-10 my-10">
					{data?.data ? (
						data?.data?.map((skill) => (
							<div className="flex flex-col items-center gap-2 leading-8">
								<Rotate triggerOnce>
									<i
										className={skill.image + " text-5xl"}
									></i>
									<p className="text-xl font-bold">
										{skill.name}
									</p>
								</Rotate>
							</div>
						))
					) : (
						<p>No Skills Found</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default Skills;
