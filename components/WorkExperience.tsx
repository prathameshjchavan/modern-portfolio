"use client";

import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {
	experiences: Experience[];
};

const WorkExperience = ({ experiences }: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="h-screen flex relative overflow-hidden text-left max-w-full mx-2 sm:mx-10 justify-evenly items-center"
		>
			<h3 className="absolute top-14 text-xl uppercase tracking-[20px] -mr-[20px] text-gray-500">
				Experience
			</h3>

			<div className="mt-24 w-full flex space-x-5 overflow-x-auto p-2 scrollbar-track-gray-400/20 snap-x snap-center snap-mandatory scrollbar-thin sm:scrollbar scrollbar-thumb-[#F7AB0A]/80">
				{experiences.map((experience) => (
					<ExperienceCard key={experience._id} experience={experience} />
				))}
			</div>
		</motion.div>
	);
};

export default WorkExperience;
