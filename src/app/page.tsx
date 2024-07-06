"use client";
import Example from "@/components/HorizontalScroll";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { motion } from "framer-motion";
import Image from "next/image";

import { buttonVariants } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import Link from "next/link";

export default function Home() {
	return (
		<div className="bg-slate-50 grainy-light">
			<section>
				<MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
					<div className="col-span-2 px-6 lg:px-0 lg:pt-4">
						<motion.div
							initial={{ opacity: 0, y: 100 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start"
						>
							<div className="absolute w-28 left-0 -top-20 hidden lg:block">
								<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t via-slate-50/50 from-slate-50 h-28" />
							</div>
							<h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-2xl md:text-6xl lg:text-7xl uppercase">
								<motion.div
									initial={{ opacity: 0, y: -200 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ ease: "linear", duration: 0.5, delay: 0.2 }}
									className="w-full flex justify-center"
								>
									<Image
										src="/logo-black.png"
										width={150}
										height={150}
										alt="customLuxx"
									/>
								</motion.div>
								ръчно създадени
							</h1>
							<p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
								Изберете вашият поръчков калъф,{" "}
								<span className="font-semibold">единствен по рода си.</span>{" "}
								<br />
								Customluxx дава неограничени възможности за използване.
							</p>
						</motion.div>
					</div>
				</MaxWidthWrapper>
				<motion.div
					initial={{ opacity: 0, y: -100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ ease: "linear", duration: 0.5, delay: 0.2 }}
				>
					<Example />
				</motion.div>
			</section>
		</div>
	);
}
