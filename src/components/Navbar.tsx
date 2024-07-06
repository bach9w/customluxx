"use client";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { ArrowBigDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const Navbar = () => {
	const user = true;
	const isAdmin = true;

	return (
		<motion.nav
			initial={{ opacity: 0, y: -100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ ease: "linear", duration: 0.5, delay: 0.2 }}
			className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-red-700 bg-black backdrop-blur-lg transition-all text-white"
		>
			<MaxWidthWrapper>
				<div className="flex h-14 items-center justify-between  ">
					<Link
						href="/"
						className="flex z-40  items-center justify-center text-white text-xl font-bold"
					>
						<Image alt="logo" width={30} height={30} src="/logo.png" />
						Custom<span className="text-red-600">luxx</span>
					</Link>

					<div className="h-full flex items-center space-x-4">
						<>
							<Link
								href="/"
								className={buttonVariants({
									size: "sm",
									variant: "ghost",
								})}
							>
								Начало
							</Link>
							{isAdmin ? (
								<Link
									href="/"
									className={buttonVariants({
										size: "sm",
										variant: "ghost",
									})}
								>
									Продукти
								</Link>
							) : null}
							<Link
								href="/configure/upload"
								className={buttonVariants({
									size: "sm",
									className: "hidden sm:flex items-center gap-1",
								})}
							>
								Поръчай сега
								<ArrowBigDown className="ml-1.5 h-5 w-5" />
							</Link>
						</>
					</div>
				</div>
			</MaxWidthWrapper>
		</motion.nav>
	);
};

export default Navbar;
