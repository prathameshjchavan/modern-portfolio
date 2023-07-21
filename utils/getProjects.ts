import { clientFetch } from "@/sanity";
import { groq } from "next-sanity";

const query = groq`
    *[_type == "project"] {
        ...,
        technologies[]->
    }
`;

const getProjects = async () => {
	const projects: Project[] = await clientFetch(query);

	return projects;
};

export default getProjects;
