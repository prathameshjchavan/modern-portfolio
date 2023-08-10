"use client";

import { urlFor } from "@/sanity";
import Image from "next/image";
import { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
	heroImage: Image;
};

const Footer = ({ heroImage }: Props) => {
	const url = useMemo(() => urlFor(heroImage).url(), [urlFor, heroImage]);

	return (
		<AnimatePresence>
			<motion.footer
				key="footer"
				initial={{ y: 100 }}
				animate={{ y: 0 }}
				exit={{ y: 100 }}
				transition={{ duration: 1.5 }}
				className="sticky bottom-5 w-fit mx-auto cursor-pointer"
			>
				<div className="flex items-center justify-center">
					<Image
						width={400}
						height={400}
						className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
						src={url}
						alt="go to hero section"
					/>
				</div>
			</motion.footer>
		</AnimatePresence>
	);
};

export default Footer;
