import Example from "@/components/HorizontalScroll";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Check, Star } from "lucide-react";
import Link from "next/link";

export default function Home() {
	return (
		<div className="bg-slate-50 grainy-light">
			<section>
				<MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
					<div className="col-span-2 px-6 lg:px-0 lg:pt-4">
						<div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
							<div className="absolute w-28 left-0 -top-20 hidden lg:block">
								<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t via-slate-50/50 from-slate-50 h-28" />
							</div>
							<h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl uppercase">
								Калъфи
								<span className="bg-black px-2 text-white">
									CustomLuxx
								</span>{" "}
								ръчно създадени
							</h1>
							<p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
								Изберете вашият поръчков калъф,{" "}
								<span className="font-semibold">един-от-един</span>. Customluxx
								дава неограничени възможности за използване.
							</p>

							<ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
								<div className="space-y-2">
									<li className="flex gap-1.5 items-center text-left">
										<Check className="h-5 w-5 shrink-0 text-green-600" />
										Високо качество
									</li>
									<li className="flex gap-1.5 items-center text-left">
										<Check className="h-5 w-5 shrink-0 text-green-600" />2
										години гаранция
									</li>
									<li className="flex gap-1.5 items-center text-left">
										<Check className="h-5 w-5 shrink-0 text-green-600" />
										Голям асортимент от налични калъфи
									</li>
								</div>
							</ul>

							<div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
								<div className="flex flex-col justify-between items-center sm:items-start">
									<div className="flex gap-0.5 items-center justify-center w-full">
										<Star className="h-4 w-4 text-green-600 fill-green-600" />
										<Star className="h-4 w-4 text-green-600 fill-green-600" />
										<Star className="h-4 w-4 text-green-600 fill-green-600" />
										<Star className="h-4 w-4 text-green-600 fill-green-600" />
										<Star className="h-4 w-4 text-green-600 fill-green-600" />
									</div>

									<p className="w-full text-center">
										<span className="font-semibold">2500</span> доволни клиенти
									</p>
								</div>
							</div>
						</div>
					</div>
				</MaxWidthWrapper>
				<Example />
			</section>
		</div>
	);
}
