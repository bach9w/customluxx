"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

function CarouselShower({
	state,
	setState,
}: {
	state: any;
	setState: Dispatch<SetStateAction<any>>;
}) {
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);
	const [count, setCount] = useState(0);

	useEffect(() => {
		if (!api) {
			return;
		}

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap() + 1);

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);

	useEffect(() => {
		if (api && typeof state === "number" && state >= 0 && state < count) {
			api.scrollTo(state - 1, true);
		}
	}, [api, state, count]);

	return (
		<Carousel setApi={setApi} className="w-full max-w-xs text-black">
			<CarouselContent>
				{Array.from({ length: 5 }).map((_, index) => (
					<CarouselItem key={index}>
						<div className="p-1">
							<Card>
								<CardContent className="flex aspect-square items-center justify-center p-6">
									<span className="text-4xl font-semibold">{index + 1}</span>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
			<Button
				className="w-full"
				onClick={() => {
					setState(current);
				}}
			>
				Избери
			</Button>
		</Carousel>
	);
}

export default CarouselShower;
