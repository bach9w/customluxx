import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={montserrat.className}>
				<Navbar />

				<main className="flex grainy-light flex-col min-h-[calc(100vh-3.5rem-1px)]">
					<div className="flex-1 flex flex-col h-full">{children}</div>
				</main>
			</body>
		</html>
	);
}
