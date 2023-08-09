import dynamic from "next/dynamic";

const Skill = dynamic(() => import("./Skill"), { ssr: false });

type Props = {
	skills: Skill[];
};

const Skills = ({ skills }: Props) => {
	return (
		<div className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 h-screen justify-center items-center">
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				Skills
			</h3>

			<h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
				Hover over a skill for currency proficiency
			</h3>

			<div className="mt-20 grid grid-cols-4 gap-5">
				{skills.slice(0, skills.length / 2).map((skill) => (
					<Skill key={skill._id} skill={skill} directionLeft />
				))}

				{skills.slice(skills.length / 2).map((skill) => (
					<Skill key={skill._id} skill={skill} />
				))}
			</div>
		</div>
	);
};

export default Skills;
