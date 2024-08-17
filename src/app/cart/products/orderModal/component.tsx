"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { MdCheck, MdCheckCircle } from "react-icons/md";
import { motion } from "framer-motion";

const Modal = ({
	status,
	setStatus,
	products,
}: {
	status: boolean;
	setStatus: (value: boolean) => void;
	products: any;
}) => {
	const { id, image } = products;
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.7 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ ease: "easeOut", duration: 0.2 }}
			className="h-screen bg-white min-w-[100vw] w-full"
		>
			{id && image && (
				<div className="w-full h-full ">
					<div className="flex justify-start gap-10 flex-col items-center h-full w-full">
						<Badge className="w-full h-20 rounded-none text-xl md:text-3xl flex justify-center">
							ПОРЪЧАЙ СЕГА ЗА 45 ЛВ
						</Badge>
						<div className="uppercase">
							<Label className="text-md">Добави своето име</Label>
							<Input
								placeholder={"Иван"}
								className="min-w-[80vw] text-[17px]"
							/>
							<Label className="text-md">Текст под символи</Label>
							<Input
								placeholder={"Иван"}
								className="min-w-[80vw] text-[17px]"
							/>
						</div>
						<Image
							className="rounded-xl"
							src={`/${image}.jpg`}
							alt=""
							width={300}
							height={300}
						/>
					</div>
				</div>
			)}
			<div className="fixed grid grid-cols-2 bottom-0 h-20 w-full bg-black ">
				<Button
					className="w-full h-full rounded-none hover:bg-red-800"
					onClick={() => {
						setStatus(!status);
					}}
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
					className="w-full h-full rounded-none hover:bg-sky-500"
					onClick={() => {
						setStatus(!status);
					}}
				>
					Поръчай сега
					<MdCheck size={20} />
				</Button>
			</div>
		</motion.div>
	);
};

export default Modal;
