import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { ArrowBigDown, ArrowRight } from "lucide-react";

const Navbar = async () => {
	const user = true;
	const isAdmin = true;

	return (
		<nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-red-700 bg-black backdrop-blur-lg transition-all text-white">
			<MaxWidthWrapper>
				<div className="flex h-14 items-center justify-between  ">
					<Link
						href="/"
						className="flex z-40 font-semibold items-center justify-center"
					>
						<img src="/logo.jpg" className="h-8 w-auto" />
						Custom<span className="text-red-600">luxx</span>
					</Link>

					<div className="h-full flex items-center space-x-4">
						{user ? (
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
						) : (
							<>
								<Link
									href="/api/auth/register"
									className={buttonVariants({
										size: "sm",
										variant: "ghost",
									})}
								>
									Sign up
								</Link>

								<Link
									href="/api/auth/login"
									className={buttonVariants({
										size: "sm",
										variant: "ghost",
									})}
								>
									Login
								</Link>

								<div className="h-8 w-px bg-zinc-200 hidden sm:block" />

								<Link
									href="/configure/upload"
									className={buttonVariants({
										size: "sm",
										className: "hidden sm:flex items-center gap-1",
									})}
								>
									Create case
									<ArrowRight className="ml-1.5 h-5 w-5" />
								</Link>
							</>
						)}
					</div>
				</div>
			</MaxWidthWrapper>
		</nav>
	);
};

export default Navbar;
