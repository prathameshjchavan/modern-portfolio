"use client";

import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {
	socials: Social[];
};

const Header = ({ socials }: Props) => {
	return (
		<header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5">
			<motion.div
				initial={{ x: -500, opacity: 0, scale: 0.5 }}
				animate={{ x: 0, opacity: 1, scale: 1 }}
				transition={{
					duration: 1.5,
				}}
				className="flex items-center"
			>
				{socials.map((social) => (
					<SocialIcon
						key={social._id}
						url={social.url}
						fgColor="gray"
						bgColor="transparent"
					/>
				))}
			</motion.div>

			<motion.div
				initial={{ x: 500, opacity: 0, scale: 0.5 }}
				animate={{ x: 0, opacity: 1, scale: 1 }}
				transition={{
					duration: 1.5,
				}}
				className="flex items-center cursor-pointer"
			>
				<SocialIcon
					url="#contact"
					network="email"
					className="cursor-pointer"
					fgColor="gray"
					bgColor="transparent"
				/>
				<p className="uppercase hidden md:inline-flex text-sm text-gray-400">
					Get In Touch
				</p>
			</motion.div>
		</header>
	);
};

export default Header;
