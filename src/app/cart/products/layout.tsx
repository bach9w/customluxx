import React from "react";
import ConvexClientProvider from "../../../../providers/ConvexCP";
export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<ConvexClientProvider>
				<div className="bg-black min-h-screen h-full w-full relative bottom-3 ">
					{children}
				</div>
			</ConvexClientProvider>
		</>
	);
}
