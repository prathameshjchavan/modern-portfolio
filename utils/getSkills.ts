import { clientFetch } from "@/sanity";
import { groq } from "next-sanity";

const query = groq`
    *[_type == "skill"]
`;

const getSkills = async () => {
	const skills: Skill[] = await clientFetch(query);

	return skills;
};

export default getSkills;
