import React from "react";
export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div className="bg-black min-h-screen h-full w-full relative bottom-3 ">
				{children}
			</div>
		</>
	);
}
