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
import AlertEdit from "./components/alert-edit";
import AlertDelete from "./components/alert-delete";
import { Id } from "../../../../convex/_generated/dataModel";
import { ConvexImage } from "../components/ConvexImage";

export default function Dashboard() {
	const [edited, setEdited] = useState(false);
	const [image, setImage] = useState<Id<"_storage">>();
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");

	const generateUploadUrl = useMutation(api.files.generateUploadUrl);
	const saveStorageId = useMutation(api.files.saveStorageId);
	const saveAfterUpload = async (uploaded: UploadFileResponse[]) => {
		setImage((uploaded[0].response as any).storageId);
	};

	const flags = useQuery(api.flags.getFlags);
	const create = useMutation(api.flags.createFlag);
	function onEvent() {
		create({
			user: "j57cyqepg0d47msq00s41g91eh6ykhj3",
			image: image || undefined,
			description: description,
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
			<div className=" p-4 min-h-full flex w-full  items-start justify-center">
				<div className="w-full flex ">
					<div className="w-full h-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 text-white">
						{flags?.map((flag) => (
							<div key={flag._id}>
								<Card className="min-h-[150px] max-h-[350px] min-w-[150px] flex items-center justify-center flex-col gap-2">
									<CardHeader className="w-full flex items-center justify-center ">
										<div className="gap-2 space-x-2">
											<AlertDelete id={flag._id} />
											<AlertEdit id={flag._id} />
										</div>
										<CardTitle>
											<span className="text-xl font-semibold">
												<Badge className="text-[27px]">{flag.name}</Badge>
											</span>
										</CardTitle>
									</CardHeader>

									<ConvexImage imageId={flag.image} />
									{flag.status === true ? "Активен" : "Неактивен"}
								</Card>
							</div>
						))}
					</div>
				</div>
				<div></div>
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
									<Button onClick={onEvent} size="sm">
										Запази 2
									</Button>
								</div>
							</div>
							<div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
								<div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
									<Card x-chunk="dashboard-07-chunk-0">
										<CardHeader>
											<CardTitle>Знамена</CardTitle>
											<CardDescription>
												Добавяне, промяна и изтриване на знамена.
											</CardDescription>
										</CardHeader>
										<CardContent>
											<div className="grid gap-6">
												<div className="grid gap-3">
													<Label htmlFor="name">Текст на знаме</Label>
													<Input
														id="name"
														value={name}
														onChange={(e) => setName(e.target.value)}
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
														value={description}
														onChange={(e) => setDescription(e.target.value)}
													/>
												</div>
												<div>
													Снимка
													<UploadButton
														uploadUrl={generateUploadUrl}
														fileTypes={["image/*"]}
														onUploadComplete={saveAfterUpload}
														onUploadError={(error: unknown) => {
															alert(`ERROR! ${error}`);
														}}
													/>
													{image && <ConvexImage imageId={image} />}
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
								<Button onClick={onEvent} size="sm">
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
