import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import ScrollObserver from "@/utils/ScrollObserver";

export const metadata: Metadata = {
	title: "Prathamesh's Portfolio",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<ScrollObserver>
				<body className="bg-[rgb(36,36,36)] text-white z-0">{children}</body>
			</ScrollObserver>
			<Analytics />
		</html>
	);
}
