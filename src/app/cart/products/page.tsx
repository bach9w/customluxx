"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

const Experimental = () => {
	const isMounted = useRef(false);
	const [isExpanded, setIsExpanded] = useState(false);

	useEffect(() => {
		if (!isMounted.current) {
			isMounted.current = true;
			return;
		}
	}, []);
	return (
		<AnimatePresence>
			<div className="w-full">
				<div className="min-h-screen h-full ">
					<div className="header text-3xl font-bold uppercase text-white w-full flex items-center justify-center">
						Products
					</div>
					<div className="h-full">
						<div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 px-4">
							{Array.from({ length: 5 }).map((_, i) => (
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									key={i}
								>
									<Card className="h-full sm:h-[250px] w-full  z-50 md:h-full border-0  rounded-md ">
										<Image
											src={`/image${i + 1}.jpg`}
											alt=""
											className="object-cover w-full h-full object-bottom rounded-md "
											width={"200"}
											height={"200"}
										/>
										<div
											onClick={() => setIsExpanded(!isExpanded)}
											className="relative bottom-[30px] w-full1 z-50 hover:bg-white/40  uppercase font-bold  justify-center   "
										>
											<ArrowDown />
											{isExpanded && (
												<motion.div
													key="modal"
													className="shadow-md drop-shadow-md absolute rounded-b-lg bg-white z-50 w-full h-[100px] flex items-center justify-center flex-col"
													initial={{ opacity: 0, y: 100 }}
													animate={{ opacity: 1, y: 0 }}
													exit={{
														opacity: 0,
														y: -100,
														transition: { duration: 0.5 },
													}}
												>
													<div className="grid grid-cols-2">
														<p>Цена - 45 лв.</p>
														<p>Изработка - до 2 дни</p>
													</div>
													<div className="grid grid-cols-1 w-full gap-2 p-1">
														<Link href={"/cart/custom"}>
															<Button className="w-full ">Изработи сега</Button>
														</Link>
													</div>
												</motion.div>
											)}
										</div>
									</Card>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>
		</AnimatePresence>
	);
};

export default Experimental;
