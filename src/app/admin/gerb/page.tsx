"use client";
import Image from "next/image";
import Link from "next/link";
import {
	ChevronLeft,
	Flag,
	GalleryThumbnails,
	Home,
	LineChart,
	Package,
	Package2,
	PanelLeft,
	PlusCircle,
	Search,
	Settings,
	ShoppingCart,
	Upload,
	Users2,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";

export default function Dashboard() {
	const [edited, setEdited] = useState(false);
	return (
		<div className="flex min-h-screen w-full flex-col bg-muted/40">
			<aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
				<nav className="flex flex-col items-center gap-4 px-2 py-4">
					<Link
						href="#"
						className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
					>
						<Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
						<span className="sr-only">CustomLuxx</span>
					</Link>
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Link
									href="#"
									className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
								>
									<Home className="h-5 w-5" />
									<span className="sr-only">Начало</span>
								</Link>
							</TooltipTrigger>
							<TooltipContent side="right">Начало</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger asChild>
								<Link
									href="/admin/flags"
									className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
								>
									<Flag className="h-5 w-5" />
									<span className="sr-only">Знамена</span>
								</Link>
							</TooltipTrigger>
							<TooltipContent side="right">Знамена</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger asChild>
								<Link
									href="/admin/gerb"
									className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
								>
									<GalleryThumbnails className="h-5 w-5" />
									<span className="sr-only">Гербове</span>
								</Link>
							</TooltipTrigger>
							<TooltipContent side="right">Гербове</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger asChild>
								<Link
									href="#"
									className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
								>
									<ShoppingCart className="h-5 w-5" />
									<span className="sr-only">Продукти</span>
								</Link>
							</TooltipTrigger>
							<TooltipContent side="right">Продукти</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</nav>
				<nav className="mt-auto flex flex-col items-center gap-4 px-2 py-4">
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Link
									href="#"
									className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
								>
									<Settings className="h-5 w-5" />
									<span className="sr-only">Settings</span>
								</Link>
							</TooltipTrigger>
							<TooltipContent side="right">Settings</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</nav>
			</aside>
			<div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
				<header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
					<Sheet>
						<SheetTrigger asChild>
							<Button size="icon" variant="outline" className="sm:hidden">
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
									href="/admin/products"
									className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
								>
									<ShoppingCart className="h-5 w-5" />
									Продукти
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
								<Button size="sm">Запази</Button>
							</div>
						</div>
						<div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
							<div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
								<Card x-chunk="dashboard-07-chunk-0">
									<CardHeader>
										<CardTitle>Гербове</CardTitle>
										<CardDescription>
											Добавяне, промяна и изтриване на гербове.
										</CardDescription>
									</CardHeader>
									<CardContent>
										<div className="grid gap-6">
											<div className="grid gap-3">
												<Label htmlFor="name">Текст на герб</Label>
												<Input
													id="name"
													type="text"
													className="w-full"
													placeholder="Петолъчка"
												/>
											</div>
											<div className="grid gap-3">
												<Label htmlFor="description">Описание</Label>
												<Textarea
													id="description"
													placeholder="Метален символ"
													className="min-h-32"
												/>
											</div>
											<div>
												Снимки
												<div className="grid gap-2">
													<button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
														<Upload className="h-[300px] w-[300px] text-muted-foreground" />
														<span className="sr-only">Upload</span>
													</button>
													<div className="grid grid-cols-3 gap-2"></div>
												</div>
											</div>
										</div>
										<div className="w-full grid grid-cols-2 gap-2 p-2">
											<Button disabled={edited ? false : true}>Откажи</Button>
											<Button>Запази</Button>
										</div>
									</CardContent>
								</Card>
							</div>
							<div className="grid auto-rows-max items-start gap-4 lg:gap-8">
								<Card x-chunk="dashboard-07-chunk-4">
									<CardHeader>
										<CardTitle>Състояние на продукта</CardTitle>
									</CardHeader>
									<CardContent>
										<div className="grid gap-6">
											<div className="grid gap-3">
												<Label htmlFor="status">Състояние</Label>
												<Select>
													<SelectTrigger
														id="status"
														aria-label="избери състояние"
													>
														<SelectValue placeholder="избери състояние" />
													</SelectTrigger>
													<SelectContent>
														<SelectItem value="draft">Налично</SelectItem>
														<SelectItem value="published">Изчерпано</SelectItem>
														<SelectItem value="archived">Архивирано</SelectItem>
													</SelectContent>
												</Select>
											</div>
										</div>
									</CardContent>
								</Card>

								<Card x-chunk="dashboard-07-chunk-4">
									<CardHeader>
										<CardTitle>Архивирай продукта</CardTitle>
										<CardDescription>
											При желанието да бъде временно отстранен.
										</CardDescription>
									</CardHeader>
									<CardContent>
										<div></div>
										<Button size="sm" variant="secondary">
											Архивирай сега
										</Button>
									</CardContent>
								</Card>
							</div>
						</div>
						<div className="flex items-center justify-center gap-2 md:hidden">
							<Button variant="outline" size="sm">
								Отказ
							</Button>
							<Button size="sm">Запази</Button>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}
