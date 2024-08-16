"use client";
import { Card, CardDescription } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
const Cart = () => {
	const router = useRouter();
	return (
		<div className="h-screen w-full flex items-center justify-center">
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-10 ">
				<motion.div
					initial={{ opacity: 1 }}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 1.05 }}
				>
					<Card
						className=" w-[200px] h-[200px] bg-red-500 text-white flex items-center justify-center"
						onClick={() => {
							router.push("/cart/custom");
						}}
					>
						<CardDescription className="bg-red-500 text-xl uppercase text-center text-white">
							Генерирай СЕГА
						</CardDescription>
					</Card>
				</motion.div>
				<motion.div
					initial={{ opacity: 1 }}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 1.05 }}
				>
					<Card
						className=" w-[200px] h-[200px] bg-red-500 text-white flex items-center justify-center"
						onClick={() => {
							router.push("/cart/products");
						}}
					>
						<CardDescription className="bg-red-500 text-xl uppercase text-center text-white">
							Готови предложения
						</CardDescription>
					</Card>
				</motion.div>
			</div>
		</div>
	);
};

export default Cart;
