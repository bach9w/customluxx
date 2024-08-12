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
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { ConvexImage } from "@/app/admin/flags/page";

function CarouselShower({
	state,
	setState,
	option,
}: {
	state: any;
	setState: Dispatch<SetStateAction<any>>;
	option: string;
}) {
	const flags = useQuery(api.flags.getFlags);
	const gerbs = useQuery(api.gerbs.getGerbs);
	const [provider, setProvider] = useState<string>();
	const [apiC, setApiC] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);
	const [count, setCount] = useState(0);

	useEffect(() => {
		if (!apiC) {
			return;
		}

		setCount(apiC.scrollSnapList().length);
		setCurrent(apiC.selectedScrollSnap() + 1);

		apiC.on("select", () => {
			setCurrent(apiC.selectedScrollSnap() + 1);
		});
	}, [apiC]);

	useEffect(() => {
		if (apiC && typeof state === "number" && state >= 0 && state < count) {
			apiC.scrollTo(state - 1, true);
		}
	}, [apiC, state, count]);

	useEffect(() => {
		if (option === "gerb") {
			setProvider("gerbs");
		} else if (option === "flag") {
			setProvider("flags");
		}
	}, [option]);

	return (
		<Carousel setApi={setApiC} className="w-full max-w-xs text-black">
			<CarouselContent>
				{option === "gerbs" &&
					gerbs &&
					gerbs.map((gerb) => (
						<CarouselItem key={gerb._id}>
							<div className="p-1">
								<Card>
									<CardContent className="flex aspect-square items-center justify-center p-6">
										<ConvexImage imageId={gerb.image} />
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					))}
				{option === "flags" &&
					flags &&
					flags.map((flag) => (
						<CarouselItem key={flag._id}>
							<div className="p-1">
								<Card>
									<CardContent className="flex aspect-square items-center justify-center p-6">
										<ConvexImage imageId={flag.image} />
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
