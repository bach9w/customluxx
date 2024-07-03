"use client";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import CarouselShower from "./Modal";
import { createContext, useContext, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const GerbContext = createContext({
	gerb: null,
	setGerb: (value: any) => {},
	flag: null,
	setFlag: (value: any) => {},
});

const TabsProvider = ({ children }: { children: React.ReactNode }) => {
	const [gerb, setGerb] = useState(null);
	const [flag, setFlag] = useState(null);
	return (
		<GerbContext.Provider value={{ gerb, setGerb, flag, setFlag }}>
			{children}
		</GerbContext.Provider>
	);
};

const GerbTabContent = () => {
	const { gerb, setGerb } = useContext(GerbContext);

	return (
		<>
			Избери един от наличните гербове.
			<CarouselShower state={gerb} setState={setGerb} />
		</>
	);
};

const FlagTabContent = () => {
	const { flag, setFlag } = useContext(GerbContext);
	return (
		<>
			Избери едно от наличните знамена.
			<CarouselShower state={flag} setState={setFlag} />
		</>
	);
};

const TextInput = () => {
	return (
		<>
			<Label>Надпис по избор</Label>
			<Input type="text" placeholder="Надпис по избор" />
		</>
	);
};

const TableInput = () => {
	return (
		<>
			<Label>Надпис върху табелка по избор</Label>
			<Input type="text" placeholder="Надпис по избор" />
		</>
	);
};

export function CartCard() {
	return (
		<TabsProvider>
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
							<TabsList>
								<TabsTrigger value="gerb">Гербове</TabsTrigger>
								<TabsTrigger value="flag">Знамена</TabsTrigger>
								<TabsTrigger value="text">Надпис</TabsTrigger>
								<TabsTrigger value="table">Табелка</TabsTrigger>
							</TabsList>
							<TabsContent value="gerb">
								<GerbTabContent />
							</TabsContent>
							<TabsContent value="flag">
								<FlagTabContent />
							</TabsContent>
							<TabsContent value="text">
								<TextInput />
							</TabsContent>
							<TabsContent value="table">
								<TableInput />
							</TabsContent>
						</Tabs>

						<Button variant="outline" className="w-full">
							Разгледай продуктите
						</Button>
						<Button variant={"destructive"} className="w-full">
							Премини към поръчка
						</Button>
					</div>
				</CardContent>
			</Card>
		</TabsProvider>
	);
}
