"use client";

import { urlFor } from "@/sanity";
import { motion, useMotionValue, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

type Props = {
	skill: Skill;
	directionLeft?: boolean;
};

const Skill = ({ skill, directionLeft }: Props) => {
	const motionValue = useMotionValue(0);
	const [animationComplete, setAnimationComplete] = useState(false);

	useMotionValueEvent(motionValue, "animationStart", () => {
		setAnimationComplete(false);
	});

	useMotionValueEvent(motionValue, "animationComplete", () => {
		setAnimationComplete(true);
	});

	return (
		<div
			className={`${
				animationComplete ? "group" : ""
			} relative flex cursor-pointer`}
		>
			<motion.img
				initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
				transition={{ duration: 1 }}
				whileInView={{ opacity: 1, x: 0 }}
				src={urlFor(skill.image).url()}
				style={{ x: motionValue }}
				className="rounded-full border border-gray-500 object-cover w-20 h-20 filter group-hover:grayscale transition duration-300 ease-in-out"
			/>
			<div className="absolute opacity-0 group-hover:opacity-80 transition duration-200 ease-in-out group-hover:bg-white h-20 w-20 rounded-full z-0">
				<div className="flex items-center justify-center h-full">
					<p className="text-2xl md:text-3xl font-bold text-black opacity-100">
						{skill.progress}%
					</p>
				</div>
			</div>
		</div>
	);
};

export default Skill;
