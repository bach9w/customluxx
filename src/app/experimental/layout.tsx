import React from "react";
export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div className="bg-black min-h-screen w-full ">{children}</div>
		</>
	);
}
