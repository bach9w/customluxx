"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Modal from "./orderModal/component";
import { useWindowScroll } from "@uidotdev/usehooks";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

const Experimental = () => {
	const isMounted = useRef(false);
	const [MODAL_STATUS, SETMODAL_STATUS] = useState(false);
	const [{ x, y }, scrollTo] = useWindowScroll();
	const products = useQuery(api.products.getProducts);
	const [expandedProducts, setExpandedProducts] = useState<{
		[key: string]: boolean;
	}>({});
	const [product, setProduct] = useState({
		id: "",
		image: "",
	});

	useEffect(() => {
		if (!isMounted.current) {
			isMounted.current = true;
			return;
		}
	}, []);

	const toggleExpand = (productId: string) => {
		setExpandedProducts((prevState) => ({
			...prevState,
			[productId]: !prevState[productId],
		}));
	};

	return (
		<AnimatePresence mode="wait">
			<div>
				{MODAL_STATUS && (
					<div>
						<Modal
							status={MODAL_STATUS}
							setStatus={SETMODAL_STATUS}
							products={product}
						/>
					</div>
				)}
			</div>

			<div className="w-full">
				<div className="min-h-screen h-full">
					<div className="header text-3xl font-bold uppercase text-white w-full flex items-center justify-center mt-4 mb-4">
						Продукти
					</div>
					<div className="h-full">
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 px-4">
							{products &&
								products.map((i) => (
									<motion.div
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										key={i._id}
									>
										<Card
											className="h-full sm:h-[250px] w-full z-50 md:h-full border-0 rounded-md"
											key={i._id}
										>
											<Image
												src={`/${i.img}.jpg`}
												alt=""
												className="object-cover w-full h-full object-bottom rounded-md"
												width={"200"}
												height={"200"}
											/>
											<div
												onClick={() => toggleExpand(i._id)}
												className="relative bottom-[20px] rounded-b-xl bg-red-500 text-white flex w-full1 z-50 hover:bg-white/40 uppercase font-bold justify-center"
											>
												ИЗБЕРИ
												<AnimatePresence mode="wait">
													{expandedProducts[i._id] && (
														<motion.div
															className="shadow-lg drop-shadow-lg absolute rounded-b-lg bg-black z-50 w-full h-[120px] flex items-center justify-center flex-col p-4 md:h-[150px] "
															initial={{ opacity: 0, y: 100 }}
															animate={{ opacity: 1, y: -95 }}
															exit={{
																opacity: 0,
																y: 100,
																transition: { duration: 0.5 },
															}}
														>
															<div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
																<div className="flex items-center gap-2 justify-center">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		className="h-6 w-6 text-red-500"
																		fill="none"
																		viewBox="0 0 24 24"
																		stroke="currentColor"
																	>
																		<path
																			strokeLinecap="round"
																			strokeLinejoin="round"
																			strokeWidth={2}
																			d="M12 8v4l3 3m-3-3V8m9 4a9 9 0 11-18 0 9 9 0 0118 0z"
																		/>
																	</svg>
																	<p className="text-lg font-bold text-white">
																		Изработка:{" "}
																		<span className="text-red-500">
																			до 2 дни
																		</span>
																	</p>
																</div>
																<div className="flex items-center gap-2 justify-center">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		className="h-6 w-6 text-red-500"
																		fill="none"
																		viewBox="0 0 24 24"
																		stroke="currentColor"
																	>
																		<path
																			strokeLinecap="round"
																			strokeLinejoin="round"
																			strokeWidth={2}
																			d="M8 12h12M8 12l4 4m-4-4l4-4"
																		/>
																	</svg>

																	<p className="text-lg font-bold text-white">
																		Цена:{" "}
																		<span className="text-red-500">45 лв.</span>
																	</p>
																</div>
															</div>
															<div className="grid grid-cols-1 w-full gap-2 mt-4">
																<Button
																	onClick={() => {
																		SETMODAL_STATUS(true);
																		setProduct({
																			id: i._id,
																			image: i.img,
																		});
																		scrollTo({
																			left: 0,
																			top: 0,
																			behavior: "smooth",
																		});
																	}}
																	className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
																>
																	<span className="flex items-center justify-center gap-2">
																		<svg
																			xmlns="http://www.w3.org/2000/svg"
																			className="h-5 w-5"
																			fill="none"
																			viewBox="0 0 24 24"
																			stroke="currentColor"
																		>
																			<path
																				strokeLinecap="round"
																				strokeLinejoin="round"
																				strokeWidth={2}
																				d="M12 4v16m8-8H4"
																			/>
																		</svg>
																		Изработи сега
																	</span>
																</Button>
															</div>
														</motion.div>
													)}
												</AnimatePresence>
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
