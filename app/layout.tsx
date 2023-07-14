import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";

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
			<body className="bg-[rgb(36,36,36)] text-white">
				<Header />

				{children}
			</body>
		</html>
	);
}
