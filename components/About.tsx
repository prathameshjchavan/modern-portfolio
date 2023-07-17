"use client";

import { motion } from "framer-motion";

const About = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				About
			</h3>

			<motion.img
				initial={{ x: -200, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				transition={{ duration: 1.2 }}
				viewport={{ once: true }}
				src="/portrait.jpg"
				className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
			/>

			<div className="space-y-10 px-0 md:px-10">
				<h4 className="text-4xl font-semibold">
					Here is a{" "}
					<span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
					background
				</h4>
				<p className="text-base">
					I'm Prathamesh. 💯 I specialize in creating high-converting websites
					with ReactJS that help your business grow. I know how frustrating it
					could be to have your ideas in place, but don’t know the correct
					roadmap and getting the right expertise to implement it. Development
					can sometimes become very challenging if you don’t have the right
					people working on it. This is where I come in. I help people like
					yours build the perfect website for business. I've been focusing on
					building top-rated websites with ReactJS that meets the consumer
					demands and can bring in an additional ROI to your business. I’ve
					worked with several companies around the world building 10+ successful
					websites with satisfied client reviews till date. I would love to do
					the same for you.
				</p>
			</div>
		</motion.div>
	);
};

export default About;
