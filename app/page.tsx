import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
	return (
		<main className="snap-y snap-mandatory h-screen overflow-y-scroll">
			<Header />

			{/* Hero */}
			<section id="hero" className="snap-start">
				<Hero />
			</section>

			{/* About */}
			<section id="about" className="snap-center">
				<About />
			</section>

			{/* Experience */}

			{/* Skills */}

			{/* Projects */}

			{/* Contact Me */}
		</main>
	);
}
