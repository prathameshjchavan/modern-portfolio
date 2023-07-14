import { SocialIcon } from "react-social-icons";

const Header = () => {
	return (
		<header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5">
			<div className="flex items-center">
				{/* Social Icons */}
				<SocialIcon
					url="https://youtube.com/sonnysangha"
					fgColor="gray"
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://youtube.com/sonnysangha"
					fgColor="gray"
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://youtube.com/sonnysangha"
					fgColor="gray"
					bgColor="transparent"
				/>
			</div>

			<div className="flex items-center cursor-pointer">
				<SocialIcon
					className="cursor-pointer"
					network="email"
					fgColor="gray"
					bgColor="transparent"
				/>
				<p className="uppercase hidden md:inline-flex text-sm text-gray-400">
					Get In Touch
				</p>
			</div>
		</header>
	);
};

export default Header;
