"use client";
import Image from "next/image";
import Link from "next/link";
import {
	ChevronLeft,
	DeleteIcon,
	EditIcon,
	Flag,
	GalleryThumbnails,
	Home,
	Package2,
	PanelLeft,
	Settings,
	ShoppingCart,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

import { UploadButton, UploadFileResponse } from "@xixixao/uploadstuff/react";
import "@xixixao/uploadstuff/react/styles.css";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Textarea } from "@/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { FiDelete } from "react-icons/fi";

import { Id } from "../../../../convex/_generated/dataModel";

export default function Dashboard() {
	const [name, setName] = useState("");
	const add = useMutation(api.symbols.createSymbol);
	const symbols = useQuery(api.symbols.getAllSymbols);

	function onClick() {
		add({
			user: "j57cyqepg0d47msq00s41g91eh6ykhj3",
			name: name,
		});
	}
	return (
		<>
			<header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
				<Sheet>
					<SheetTrigger asChild>
						<Button size="icon" variant="outline" className="">
							<PanelLeft className="h-5 w-5" />
							<span className="sr-only">Toggle Menu</span>
						</Button>
					</SheetTrigger>
					<SheetContent side="right" className="sm:max-w-xs">
						<nav className="grid gap-6 text-lg font-medium">
							<Link
								href="#"
								className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
							>
								<Home className="h-5 w-5" />
							</Link>
							<Link
								href="/admin/"
								className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
							>
								<Home className="h-5 w-5" />
								Начало
							</Link>
							<Link
								href="/admin/flags"
								className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
							>
								<Flag className="h-5 w-5" />
								Флагове
							</Link>
							<Link
								href="/admin/gerb"
								className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
							>
								<GalleryThumbnails className="h-5 w-5" />
								Гербове
							</Link>
							<Link
								href="/admin/symbols"
								className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
							>
								<ShoppingCart className="h-5 w-5" />
								Символи
							</Link>
							<Link
								href="/admin/settings"
								className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
							>
								<Settings className="h-5 w-5" />
								Настройки
							</Link>
						</nav>
					</SheetContent>
				</Sheet>
			</header>
			<div>Налични символи</div>
			<div className="grid grid-cols-2 ">
				{symbols &&
					symbols.map((symbol) => (
						<Card key={symbol._id}>
							<CardHeader>
								<CardTitle>
									{symbol.name}
									<Button size="sm" variant="outline">
										<EditIcon />
									</Button>
								</CardTitle>
							</CardHeader>
						</Card>
					))}
			</div>

			<div className="flex min-h-screen w-full flex-col bg-muted/40">
				<div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
					<main className="grid flex-1 items-start gap-4 p-2 sm:px-6 sm:py-0 md:gap-8">
						<div className="mx-1 grid max-w-[59rem] flex-1 auto-rows-max gap-4">
							<div className="flex items-center gap-4">
								<Button variant="outline" size="icon" className="h-7 w-7">
									<ChevronLeft className="h-4 w-4" />
									<span className="sr-only">Назад</span>
								</Button>
								<h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
									Админ панел
								</h1>
								<Badge
									variant="outline"
									className="bg-green-500 text-white ml-auto sm:ml-0"
								>
									online
								</Badge>
								<div className="hidden items-center gap-2 md:ml-auto md:flex">
									<Button variant="outline" size="sm">
										Откажи
									</Button>
									<Button size="sm">Запази 2</Button>
								</div>
							</div>
							<div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
								<div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
									<Card x-chunk="dashboard-07-chunk-0">
										<CardHeader>
											<CardTitle>Символи</CardTitle>
											<CardDescription>
												Добавяне, промяна и изтриване на символи.
											</CardDescription>
										</CardHeader>
										<CardContent>
											<div className="grid gap-6">
												<div className="grid gap-3">
													<Label htmlFor="name">Текст на символ</Label>
													<Input
														id="name"
														value={name}
														onChange={(e) => setName(e.target.value)}
														type="text"
														className="w-full"
														placeholder="Петолъчка"
													/>
												</div>
											</div>
										</CardContent>
									</Card>
								</div>
							</div>
							<div className="flex items-center justify-center gap-2 md:hidden">
								<Button variant="outline" size="sm">
									Отказ
								</Button>
								<Button onClick={onClick} size="sm">
									Запази
								</Button>
							</div>
						</div>
					</main>
				</div>
			</div>
		</>
	);
}
