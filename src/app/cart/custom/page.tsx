import MaxWidthWrapper from "@/components/MaxWidthWrapper";

import { CartCard } from "../components/CartCard";
import ConvexClientProvider from "../../../../providers/ConvexCP";

const Cart = () => {
	return (
		<MaxWidthWrapper className="pb-24 pt-10  sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52 ">
			<ConvexClientProvider>
				<CartCard />
			</ConvexClientProvider>
		</MaxWidthWrapper>
	);
};

export default Cart;

/*
Ред/таб за Герб
Таб за надпис
таб за знаме
таб за надпис
табелка/надпис за име
Символ*/
