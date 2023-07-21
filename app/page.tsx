import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import { urlFor } from "@/sanity";
import fetchContent from "@/utils/fetchContent";
import Image from "next/image";
import Link from "next/link";

const getData = async () => {
	const pageInfo: PageInfo = await fetchContent("pageInfo");
	const experiences: Experience[] = await fetchContent("experiences");
	const skills: Skill[] = await fetchContent("skills");
	const projects: Project[] = await fetchContent("projects");
	const socials: Social[] = await fetchContent("socials");

	return {
		pageInfo,
		experiences,
		skills,
		projects,
		socials,
	};
};

export default async function Home() {
	const { pageInfo, experiences, skills, projects, socials } = await getData();

	return (
		<main className="snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
			<Header socials={socials} />

			<section id="hero" className="snap-start">
				<Hero pageInfo={pageInfo} />
			</section>

			<section id="about" className="snap-center">
				<About pageInfo={pageInfo} />
			</section>

			<section id="experience" className="snap-center">
				<WorkExperience experiences={experiences} />
			</section>

			<section id="skills" className="snap-start">
				<Skills skills={skills} />
			</section>

			{/* Projects */}
			<section id="projects" className="snap-start">
				<Projects projects={projects} />
			</section>

			{/* Contact Me */}
			<section id="contact" className="snap-start">
				<ContactMe />
			</section>

			<Link href="#hero">
				<footer className="sticky bottom-5 w-full cursor-pointer">
					<div className="flex items-center justify-center">
						<Image
							width={400}
							height={400}
							className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
							src={urlFor(pageInfo.heroImage).url()}
							alt="go to hero section"
						/>
					</div>
				</footer>
			</Link>
		</main>
	);
}
