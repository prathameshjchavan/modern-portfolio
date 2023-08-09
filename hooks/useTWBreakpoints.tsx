import { useEffect, useState } from "react";

const useTWBreakpoints = () => {
	const [width, setWidth] = useState<number>(window.innerWidth);
	const matchesSM = width <= 640;
	const matchesMD = width <= 768;
	const matchesLG = width <= 1024;
	const matchesXL = width <= 1280;
	const matches2XL = width <= 1536;

	useEffect(() => {
		const updateWidth = () => {
			setWidth(window.innerWidth);
		};

		window.addEventListener("resize", updateWidth, true);

		return () => window.removeEventListener("resize", updateWidth);
	}, []);

	return {
		matchesSM,
		matchesMD,
		matchesLG,
		matchesXL,
		matches2XL,
	};
};

export default useTWBreakpoints;
