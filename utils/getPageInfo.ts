import { clientFetch } from "@/sanity";
import { groq } from "next-sanity";

const query = groq`
    *[_type == "pageInfo"][0] {
        ...,
        socials[]->
    }
`;

const getPageInfo = async () => {
	const pageInfo: PageInfo = await clientFetch(query);

	return pageInfo;
};

export default getPageInfo;
