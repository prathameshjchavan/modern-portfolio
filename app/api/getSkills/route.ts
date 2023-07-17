import { NextResponse } from "next/server";
import { groq } from "next-sanity";
import { clientFetch } from "@/sanity";

const query = groq`
    *[_type == "skill"]
`;

export async function GET(request: Request) {
	const skills: Skill[] = await clientFetch(query);

	return NextResponse.json({ skills }, { status: 200 });
}
