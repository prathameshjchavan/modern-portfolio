type Content = "socials" | "skills" | "projects" | "pageInfo" | "experiences";

const fetchContent = async (content: Content) => {
	const res = await fetch(
		`${
			process.env.NEXT_PUBLIC_BASE_URL
		}/api/get${content[0].toUpperCase()}${content.slice(1)}`,
		{ next: { revalidate: 10 } }
	);

	const data = await res.json();
	const contents: any = data[content];

	return contents;
};

export default fetchContent;
