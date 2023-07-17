import { NextResponse } from "next/server";
import { groq } from "next-sanity";
import { clientFetch } from "@/sanity";

const query = groq`
    *[_type == "project"] {
        ...,
        technologies[]->
    }
`;

export async function GET(request: Request) {
	const projects: Project[] = await clientFetch(query);

	return NextResponse.json({ projects }, { status: 200 });
}
