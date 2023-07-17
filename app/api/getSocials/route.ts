import { NextResponse } from "next/server";
import { groq } from "next-sanity";
import { clientFetch } from "@/sanity";

const query = groq`
    *[_type == "social"]
`;

export async function GET(request: Request) {
	const socials: Social[] = await clientFetch(query);

	return NextResponse.json({ socials }, { status: 200 });
}
