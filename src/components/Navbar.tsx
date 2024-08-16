"use client";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button, buttonVariants } from "./ui/button";
import { ArrowBigDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const Navbar = () => {
	const user = true;
	const isAdmin = true;

	return (
		<motion.nav
			initial={{ opacity: 0, y: -100 }}
			animate={{ opacity: 1, y: -30 }}
			transition={{ ease: "linear", duration: 0.5, delay: 0.2 }}
			className="sticky z-[100] h-32 items-center justify-center top-5 flex inset-x-0  w-full border-b border-red-700 bg-black backdrop-blur-lg transition-all text-white"
		>
			<div className="flex h-4 items-center justify-between space-x-4 hover:bg-indigo-500/20">
				<Link
					href="/"
					className="flex z-40  items-center justify-center text-white text-xl font-bold"
				>
					<Image alt="logo" width={30} height={30} src="/logo.png" />
					Custom<span className="text-red-600">luxx</span>
				</Link>

				<div className="h-full flex items-center space-x-4">
					<Link
						href="/"
						className={buttonVariants({
							size: "sm",
							variant: "ghost",
							className: "bg-red-600/30",
						})}
					>
						Начало
					</Link>
					{isAdmin ? (
						<Link
							href="/cart/products"
							className={buttonVariants({
								size: "sm",
								variant: "ghost",
								className: "bg-red-600/30 transition-opacity text-white",
							})}
						>
							Продукти
						</Link>
					) : null}
					<Link href="/cart/">
						<Button className=" absolute right-5  sm:flex items-center gap-2 mt-10 hover:bg-red-600">
							Поръчай сега
							<ArrowBigDown className="ml-1.5 h-5 w-5" />
						</Button>
					</Link>
				</div>
			</div>
		</motion.nav>
	);
};

export default Navbar;
