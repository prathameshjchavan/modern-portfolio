"use client";

import useTWBreakpoints from "@/hooks/useTWBreakpoints";
import { urlFor } from "@/sanity";
import { motion, useMotionValue, useMotionValueEvent } from "framer-motion";
import { useMemo, useState } from "react";

type Props = {
	skill: Skill;
	directionLeft?: boolean;
};

const Skill = ({ skill, directionLeft }: Props) => {
	const motionValue = useMotionValue(0);
	const [animationComplete, setAnimationComplete] = useState(false);
	const imgSrc = useMemo(() => urlFor(skill.image).url(), [skill]);
	const { matchesSM, matchesMD, matchesLG, matchesXL } = useTWBreakpoints();

	const xValue = useMemo(
		() =>
			matchesSM
				? 80
				: matchesMD
				? 200
				: matchesLG
				? 300
				: matchesXL
				? 350
				: 400,
		[matchesSM, matchesMD, matchesLG, matchesXL]
	);

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
				initial={{
					x: directionLeft ? Number(`-${xValue}`) : xValue,
					opacity: 0,
				}}
				transition={{ duration: 1 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				src={imgSrc}
				style={{ x: motionValue }}
				className="rounded-full border border-gray-500 object-cover w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 filter group-hover:grayscale transition duration-300 ease-in-out"
			/>
			<div className="absolute opacity-0 group-hover:opacity-80 transition duration-200 ease-in-out group-hover:bg-white w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full z-0">
				<div className="flex items-center justify-center h-full">
					<p className="text-xl sm:text-2xl md:text-3xl font-bold text-black opacity-100">
						{skill.progress}%
					</p>
				</div>
			</div>
		</div>
	);
};

export default Skill;
