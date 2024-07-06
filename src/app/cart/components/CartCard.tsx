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

export function CartCard() {
	const router = useRouter();
	const [ready, setReady] = useState(false);
	const [gerb, setGerb] = useState();
	const [flag, setFlag] = useState();
	const [order, setOrder] = useState({
		text: "",
		table: "",
		symbol: "",
		model: "",
	});

	const handleChange = (e: any) => {
		setOrder({
			...order,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<>
			<Card className="mx-auto max-w-xl">
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
							className="w-full flex justify-center items-center flex-col"
						>
							<TabsList className="bg-black text-white grid grid-cols-3 h-20 sm:h-10 sm:grid-cols-6 grid-flow-row mb-10">
								<TabsTrigger className="" value="gerb">
									Гербове
								</TabsTrigger>
								<TabsTrigger value="flag">Знамена</TabsTrigger>
								<TabsTrigger value="text">Надпис</TabsTrigger>
								<TabsTrigger value="table">Табелка</TabsTrigger>
								<TabsTrigger value="symbol">Символ</TabsTrigger>
								<TabsTrigger value="model">Модел</TabsTrigger>
							</TabsList>
							<TabsContent value="gerb">
								<CarouselShower state={gerb} setState={setGerb} />
							</TabsContent>
							<TabsContent value="flag">
								<CarouselShower state={flag} setState={setFlag} />
							</TabsContent>
							<TabsContent value="text" className="">
								<Label>Надпис върху калъфа</Label>
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
										{symbols.map((s) => (
											<SelectItem key={s.id} value={s.name}>
												{s.name}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</TabsContent>
							<TabsContent value="model">
								<Label>Модел на калъфа</Label>
								<Select
									onValueChange={(value) => {
										setOrder({
											...order,
											model: value,
										});
										console.log(value);
									}}
								>
									<SelectTrigger className="w-[180px]">
										<SelectValue placeholder="Модел" />
									</SelectTrigger>
									<SelectContent>
										{models.map((s) => (
											<SelectItem key={s.id} value={s.name}>
												{s.name}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
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
							`/cart/order?gerb=${gerb}&flag=${flag}&text=${order.text}&table=${order.table}&symbol=${order.symbol}&model=${order.model}`,
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
