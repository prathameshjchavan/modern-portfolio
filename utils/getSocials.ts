import { clientFetch } from "@/sanity";
import { groq } from "next-sanity";

const query = groq`
    *[_type == "social"]
`;

const getSocials = async () => {
	const socials: Social[] = await clientFetch(query);

	return socials;
};

export default getSocials;
