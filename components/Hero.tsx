"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";

const Hero = () => {
	const [text, count] = useTypewriter({
		words: [
			"Hi, The Name's Sonny Sangha",
			"Guy-who-loves-Coffee.tsx",
			"<ButLovesToCodeMore />",
		],
		loop: true,
		delaySpeed: 2000,
	});

	return (
		<div>
			<h1>
				<span>{text}</span>
				<Cursor cursorColor="#F7AB0A" />
			</h1>
		</div>
	);
};

export default Hero;
