import { NextResponse } from "next/server";
import { groq } from "next-sanity";
import { clientFetch } from "@/sanity";

const query = groq`
    *[_type == "experience"] {
        ...,
        technologies[]->
    }
`;

export async function GET(request: Request) {
	const experiences: Experience[] = await clientFetch(query);

	return NextResponse.json({ experiences }, { status: 200 });
}
