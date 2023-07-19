import { urlFor } from "@/sanity";
import { motion } from "framer-motion";

type Props = { experience: Experience };

const ExperienceCard = ({ experience }: Props) => {
	return (
		<article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] sm:w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-5 xl:p-8 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
			<motion.img
				initial={{
					y: -100,
					opacity: 0,
				}}
				transition={{ duration: 1.2 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className="w-20 h-20 rounded-full xl:w-32 xl:h-32 object-cover object-center"
				src={urlFor(experience.companyImage).url()}
			/>

			<div className="px-0 md:px-10">
				<h4 className="text-xl sm:text-2xl md:text-3xl font-light">
					{experience.jobTitle}
				</h4>
				<p className="font-bold text-base md:text-xl sm:text-base mt-1">
					{experience.company}
				</p>
				<div className="flex space-x-2 my-2">
					{experience.technologies.map((technology) => (
						<img
							key={technology._id}
							className="h-8 w-8 sm:h-10 sm:w-10 lg:w-12 lg:h-12 rounded-full"
							src={urlFor(technology.image).url()}
							alt=""
						/>
					))}
				</div>
				<p className="uppercase py-5 text-sm md:text-base text-gray-300">
					{new Date(experience.dateStarted).toDateString()} -{" "}
					{experience.isCurrentlyWorkingHere
						? "Present"
						: new Date(experience.dateEnded).toDateString()}
				</p>

				<ul className="list-disc list-outside text-xs md:text-sm space-y-4 max-h-96 pr-5 overflow-y-auto scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80">
					{experience.points.map((point, i) => (
						<li key={i}>{point}</li>
					))}
				</ul>
			</div>
		</article>
	);
};

export default ExperienceCard;
