import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import getExperiences from "@/utils/getExperiences";
import getPageInfo from "@/utils/getPageInfo";
import getProjects from "@/utils/getProjects";
import getSkills from "@/utils/getSkills";
import getSocials from "@/utils/getSocials";
import dynamic from "next/dynamic";
import Link from "next/link";

const getData = async () => {
	const pageInfo = await getPageInfo();
	const experiences = await getExperiences();
	const skills = await getSkills();
	const projects = await getProjects();
	const socials = await getSocials();

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
	const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

	return (
		<main className="snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin sm:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
			<Header socials={socials} />
			<section id="hero" className="snap-start">
				<Hero pageInfo={pageInfo} />
			</section>

			<section id="about" className="snap-center">
				<About pageInfo={pageInfo} />
			</section>

			<section id="experience" className="snap-start">
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
				<Footer heroImage={pageInfo.heroImage} />
			</Link>
		</main>
	);
}
