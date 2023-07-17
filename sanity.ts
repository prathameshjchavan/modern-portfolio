import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { cache } from "react";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

const client = createClient({
	projectId,
	dataset,
	apiVersion,
	useCdn: true,
});

const builder = imageUrlBuilder(client);

export const clientFetch = cache(client.fetch.bind(client));

export const urlFor = (source: Image) => builder.image(source);
