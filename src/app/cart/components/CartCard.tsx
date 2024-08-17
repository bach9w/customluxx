"use client";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import { symbols, models } from "@/utils/constants";

import CarouselShower from "./Modal";
import { createContext, useContext, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

export function CartCard() {
	const router = useRouter();
	const [ready, setReady] = useState(false);
	const [gerb, setGerb] = useState();
	const [flag, setFlag] = useState();
	const [order, setOrder] = useState({
		text: "",
		text2: "",
		table: "",
		symbol: "",
		model: "",
	});

	const convexSymbols = useQuery(api.symbols.getAllSymbols);

	const handleChange = (e: any) => {
		setOrder({
			...order,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<>
			<Card className="mx-auto border-0 max-w-xl">
				<CardHeader>
					<CardTitle className="text-2xl">Поръчка</CardTitle>
					<CardDescription>
						Добави желаните детайли за поръчката.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="grid items-center justify-center gap-4">
						<Tabs
							defaultValue="gerb"
							className="min-w-[100vw] md:min-w-full flex justify-center  items-center flex-col"
						>
							<TabsList className="bg-red-500/80 rounded-none w-full relative  text-white grid grid-cols-3 h-30 sm:h-20 sm:grid-cols-6 grid-flow-row mb-10">
								<TabsTrigger className="" value="gerb">
									Гербове
								</TabsTrigger>
								<TabsTrigger value="text">Надпис</TabsTrigger>

								<TabsTrigger value="flag">Знамена</TabsTrigger>
								<TabsTrigger value="text2">Надпис</TabsTrigger>

								<TabsTrigger value="table">Табелка</TabsTrigger>
								<TabsTrigger value="symbol">Символ</TabsTrigger>
								<TabsTrigger value="model">Модел</TabsTrigger>
							</TabsList>
							<TabsContent value="gerb">
								<CarouselShower
									state={gerb}
									setState={setGerb}
									option="gerbs"
								/>
							</TabsContent>
							<TabsContent value="flag">
								<CarouselShower
									state={flag}
									setState={setFlag}
									option="flags"
								/>
							</TabsContent>
							<TabsContent value="text" className="">
								<Label>Надпис под герб</Label>
								<Input
									type="text"
									name="text2"
									placeholder="примерен текст"
									onChange={handleChange}
								/>
							</TabsContent>
							<TabsContent value="text2" className="">
								<Label>Надпис под знаме</Label>
								<Input
									type="text"
									name="text"
									placeholder="примерен текст"
									onChange={handleChange}
								/>
							</TabsContent>
							<TabsContent value="table">
								<Label>Надпис върху табелка</Label>

								<Input
									type="text"
									placeholder="примерен текст"
									name="table"
									onChange={handleChange}
								/>
							</TabsContent>
							<TabsContent value="symbol">
								<Label>Символ върху калъфа</Label>
								<Select
									onValueChange={(value) => {
										setOrder({
											...order,
											symbol: value,
										});
										console.log(value);
									}}
								>
									<SelectTrigger className="w-[180px]">
										<SelectValue placeholder="Символ" />
									</SelectTrigger>
									<SelectContent>
										{convexSymbols &&
											convexSymbols.map((s) => (
												<SelectItem key={s._id} value={s.name}>
													{s.name}
												</SelectItem>
											))}
									</SelectContent>
								</Select>
							</TabsContent>
							<TabsContent value="model">
								<Label>Модел на телефона</Label>

								<Input
									value={order.model}
									onChange={(e) => {
										setOrder({ ...order, model: e.target.value });
									}}
								/>
							</TabsContent>
						</Tabs>
					</div>
				</CardContent>
				<Button variant="outline" className="w-full rounded-none">
					Разгледай продуктите
				</Button>
				<Button
					onClick={() => {
						router.push(
							`/cart/order?gerb=${gerb}&flag=${flag}&text=${order.text}&table=${order.table}&symbol=${order.symbol}&model=${order.model}&text2=${order.text2}`,
						);
					}}
					variant={"destructive"}
					className="w-full rounded-t-none"
				>
					Премини към поръчка
				</Button>
			</Card>
		</>
	);
}
