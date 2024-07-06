"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useRouter, useSearchParams } from "next/navigation";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { models } from "@/utils/constants";
import { Suspense } from "react";

const Order = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const gerb = searchParams.get("gerb");
	const flag = searchParams.get("flag");
	const text = searchParams.get("text");
	const table = searchParams.get("table");
	const symbol = searchParams.get("symbol");

	return (
		<MaxWidthWrapper>
			<h1 className="bg-black text-white rounded w-full flex items-center justify-center mt-10">
				Разгледайте поръчката преди да продължите към плащане
			</h1>
			<Card className="mt-4">
				<CardHeader className="w-full flex items-center justify-center">
					<Badge className="w-full">Преглед на поръчка</Badge>
				</CardHeader>
				<CardContent className="grid grid-cols-1 xl:grid-cols-2">
					{gerb !== "undefined" && (
						<div className="w-full h-[40px] flex items-center justify-center">
							Избрали сте герб - {gerb}
						</div>
					)}
					{flag !== "undefined" && (
						<div className="w-full h-[40px] flex items-center justify-center">
							Избрали сте флаг - {flag}
						</div>
					)}
					{text && (
						<div className="w-full h-[40px] flex items-center justify-center">
							Избрали сте текстов надпис - {text}
						</div>
					)}
					{table && (
						<div className="w-full h-[40px] flex items-center justify-center">
							Избрали сте надпис върху табелка - {table}
						</div>
					)}
					{symbol && (
						<div className="w-full h-[40px] flex items-center justify-center">
							Избрали сте символ върху калъфа - {symbol}
						</div>
					)}
				</CardContent>
				<CardFooter>
					{gerb === "undefined" &&
					flag === "undefined" &&
					!text &&
					!table &&
					!symbol ? (
						<div className="w-full h-[40px] flex flex-col items-center justify-center">
							Избрали сте поръчка без допълнителни детайли
							<Button
								onClick={() => {
									router.push("/cart/");
								}}
							>
								Върнете се обратно
							</Button>
						</div>
					) : (
						<div className="w-full flex flex-col gap-4">
							<Select>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Модел на телефона" />
								</SelectTrigger>
								<SelectContent>
									{models.map((s) => (
										<SelectItem key={s.id} value={s.name}>
											{s.name}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
							<Button variant="outline" className="w-full rounded-none">
								Плати
							</Button>
						</div>
					)}
				</CardFooter>
			</Card>
		</MaxWidthWrapper>
	);
};

const OrderPage = () => {
	return (
		<Suspense>
			<Order />
		</Suspense>
	);
};

export default OrderPage;
