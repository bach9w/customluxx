"use client";
import { Card, CardDescription } from "@/components/ui/card";
import { useRouter } from "next/navigation";
const Cart = () => {
	const router = useRouter();
	return (
		<div className="h-screen w-full flex items-center justify-center">
			<div className="grid grid-cols-2 gap-2 ">
				<Card
					className="w-[200px] h-[200px] flex items-center justify-center"
					onClick={() => {
						router.push("/cart/custom");
					}}
				>
					<CardDescription>Генерирай калъф</CardDescription>
				</Card>
				<Card
					className="w-[200px] h-[200px] flex items-center justify-center text-center"
					onClick={() => {
						router.push("/experimental");
					}}
				>
					<CardDescription>Разгледай готови предложения</CardDescription>
				</Card>
			</div>
		</div>
	);
};

export default Cart;
