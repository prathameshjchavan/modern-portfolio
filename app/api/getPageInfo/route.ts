import { NextResponse } from "next/server";
import { groq } from "next-sanity";
import { clientFetch } from "@/sanity";

const query = groq`
    *[_type == "pageInfo"][0] {
        ...,
        socials[]->
    }
`;

export async function GET(request: Request) {
	const pageInfo: PageInfo = await clientFetch(query);

	return NextResponse.json({ pageInfo }, { status: 200 });
}
