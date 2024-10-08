"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import ButtonExample from "./CustomButton";
import { Check, Star } from "lucide-react";

const Example = () => {
	return (
		<div className="bg-neutral-800">
			<div className="flex h-48 items-center justify-center">
				<span className="font-semibold uppercase text-neutral-500 animate-bounce">
					Плъзни надолу
				</span>
			</div>
			<HorizontalScrollCarousel />
			<div className="flex flex-col text-white">
				<ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
					<div className="space-y-2">
						<li className="flex gap-1.5 items-center text-left">
							<Check className="h-5 w-5 shrink-0 text-green-600" />
							Високо качество
						</li>
						<li className="flex gap-1.5 items-center text-left">
							<Check className="h-5 w-5 shrink-0 text-green-600" />
							20 години гаранция
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
							<span className="font-semibold">25 000</span> доволни клиенти
						</p>
					</div>
				</div>
			</div>
			<div className="flex h-48 items-center justify-center">
				<span className="font-semibold uppercase text-neutral-700">
					<ButtonExample link="/cart" />
				</span>
			</div>
		</div>
	);
};

const HorizontalScrollCarousel = () => {
	const targetRef = useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
	});

	const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

	return (
		<section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
			<div className="sticky top-0 flex h-screen items-center overflow-hidden">
				<motion.div style={{ x }} className="flex gap-4">
					{cards.map((card) => {
						return <Card card={card} key={card.id} />;
					})}
				</motion.div>
			</div>
		</section>
	);
};

const Card = ({ card }: { card: CardType }) => {
	return (
		<div
			key={card.id}
			className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
		>
			<div
				style={{
					backgroundImage: `url(${card.url})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
				className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
			></div>
			<div className="absolute inset-0 z-10 grid place-content-center">
				<p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
					{card.title}
				</p>
			</div>
		</div>
	);
};

export default Example;

type CardType = {
	url: string;
	title: string;
	id: number;
};

const cards: CardType[] = [
	{
		url: "/image1.jpg",
		title: "Печат",
		id: 1,
	},
	{
		url: "/image2.jpg",
		title: "Калъфи 2",
		id: 2,
	},
	{
		url: "/image3.jpg",
		title: "Калъфи 3",
		id: 3,
	},
	{
		url: "/image4.jpg",
		title: "Калъфи 4",
		id: 4,
	},
	{
		url: "/image5.jpg",
		title: "Калъфи 5",
		id: 5,
	},
	{
		url: "/image1.jpg",
		title: "Калъфи 6",
		id: 6,
	},
	{
		url: "/image2.jpg",
		title: "Калъфи 7",
		id: 7,
	},
];
