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
		<AnimatePresence>
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
					<div className="header text-3xl font-bold uppercase text-white w-full flex items-center justify-center">
						Products
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
												className="relative bottom-[30px] w-full1 z-50 hover:bg-white/40 uppercase font-bold justify-center"
											>
												<ArrowDown />
												{expandedProducts[i._id] && (
													<motion.div
														className="shadow-md drop-shadow-md absolute rounded-b-lg bg-white z-50 w-full h-[100px] flex items-center justify-center flex-col"
														initial={{ opacity: 0, y: 100 }}
														animate={{ opacity: 1, y: 0 }}
														exit={{
															opacity: 0,
															y: -100,
															transition: { duration: 0.5 },
														}}
													>
														<div className="grid grid-cols-1 md:grid-cols-2">
															<p>Цена - 45 лв.</p>
															<p>Изработка - до 2 дни</p>
														</div>
														<div className="grid grid-cols-1 w-full gap-2 p-1">
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
																className="w-full"
															>
																Изработи сега
															</Button>
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
