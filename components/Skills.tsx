"use client";

import useTWBreakpoints from "@/hooks/useTWBreakpoints";
import SkillsRow from "./SkillsRow";
import { useMemo } from "react";

type Props = {
	skills: Skill[];
};

const Skills = ({ skills }: Props) => {
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

	return (
		<div className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 h-screen justify-center items-center">
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				Skills
			</h3>

			<h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
				Hover over a skill for currency proficiency
			</h3>

			<div className="mt-20 space-y-5">
				<SkillsRow
					skills={skills.slice(0, skills.length / 2)}
					xValue={Number(`-${xValue}`)}
				/>
				<SkillsRow skills={skills.slice(skills.length / 2)} xValue={xValue} />
			</div>
		</div>
	);
};

export default Skills;
