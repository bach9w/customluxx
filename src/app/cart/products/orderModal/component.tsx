"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { MdCheck } from "react-icons/md";
import { motion } from "framer-motion";
import { useCallback } from "react";

type Product = {
	id: string;
	image: string;
};

interface ModalProps {
	status: boolean;
	setStatus: (value: boolean) => void;
	products: Product;
}

const Modal = ({ status, setStatus, products }: ModalProps) => {
	const { id, image } = products;

	const handleClose = useCallback(() => {
		setStatus(!status);
	}, [status, setStatus]);

	const handleOrder = useCallback(() => {
		// Логика за поръчка
		setStatus(!status);
	}, [status, setStatus]);

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.7 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ ease: "easeOut", duration: 0.2 }}
			className="h-screen bg-white w-full"
		>
			{id && image && (
				<div className="flex flex-col items-center h-full w-full gap-6 p-4">
					<Badge className="w-full h-20 rounded-none text-xl md:text-3xl flex justify-center items-center">
						ПОРЪЧАЙ СЕГА ЗА 45 ЛВ
					</Badge>
					<div className="uppercase">
						<Label className="text-md">Добави своето име</Label>
						<Input placeholder={"Иван"} className="min-w-[80vw] text-[17px]" />
						<Label className="text-md">Текст под символи</Label>
						<Input placeholder={"Иван"} className="min-w-[80vw] text-[17px]" />
					</div>
					<Image
						className="rounded-xl"
						src={`/${image}.jpg`}
						alt="Product image"
						width={300}
						height={300}
						objectFit="cover"
						blurDataURL={`blur(5px ${image}.jpg)`}
					/>
				</div>
			)}
			<div className="fixed grid grid-cols-2 bottom-0 h-20 w-full bg-black">
				<Button
					aria-label="Закриване"
					className="w-full h-full rounded-none hover:bg-red-800"
					onClick={handleClose}
				>
					Закриване
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</Button>
				<Button
					aria-label="Поръчай сега"
					className="w-full h-full rounded-none hover:bg-sky-500"
					onClick={handleOrder}
				>
					Поръчай сега
					<MdCheck size={20} />
				</Button>
			</div>
		</motion.div>
	);
};

export default Modal;
