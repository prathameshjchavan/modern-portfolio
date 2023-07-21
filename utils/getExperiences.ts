import { clientFetch } from "@/sanity";
import { groq } from "next-sanity";

const query = groq`
    *[_type == "experience"] {
        ...,
        technologies[]->
    }
`;

const getExperiences = async () => {
	const experiences: Experience[] = await clientFetch(query);

	return experiences;
};

export default getExperiences;
