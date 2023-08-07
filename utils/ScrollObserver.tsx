"use client";

import { createContext, useCallback, useEffect, useState } from "react";

type ScrollValue = {
	scrollY: number;
};

type Props = {
	children: React.ReactNode;
};

export const ScrollContext = createContext<ScrollValue>({ scrollY: 0 });

const ScrollObserver = ({ children }: Props) => {
	const [scrollY, setScrollY] = useState(0);
	const handleScroll = useCallback(() => {
		setScrollY(document.getElementsByTagName("main")[0].scrollTop);
	}, []);

	useEffect(() => {
		document.addEventListener("scroll", handleScroll, true);

		return () => document.removeEventListener("scroll", handleScroll);
	}, [handleScroll]);

	return (
		<ScrollContext.Provider value={{ scrollY }}>
			{children}
		</ScrollContext.Provider>
	);
};

export default ScrollObserver;
