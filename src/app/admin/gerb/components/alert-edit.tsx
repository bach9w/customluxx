"use client";
import {
	AlertDialog,
	AlertDialogTrigger,
	AlertDialogContent,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogCancel,
	AlertDialogAction,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";
import { EditIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Id } from "../../../../../convex/_generated/dataModel";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const AlertEdit = ({ id }: { id: Id<"gerbs"> }) => {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");

	const flag = useQuery(api.gerbs.getGerbById, { id });
	const edit = useMutation(api.gerbs.editGerb);
	const onEdit = () => {
		edit({
			id: id,
			name: name,
			description: description,
		});
	};
	return (
		<AlertDialog>
			<AlertDialogTrigger>
				<Button className="w-14">
					<EditIcon size="40px" />
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Промени</AlertDialogTitle>
					<AlertDialogDescription className="space-y-2">
						Направи промени от тук
						<br />
						<Label>Име: </Label>
						<Input
							value={name}
							onChange={(e) => {
								setName(e.target.value);
							}}
							placeholder={flag?.name}
						/>
						<Label>Описание: </Label>
						<Textarea
							value={description}
							onChange={(e) => {
								setDescription(e.target.value);
							}}
							placeholder={flag?.description}
						/>
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Откажи</AlertDialogCancel>
					<AlertDialogAction onClick={onEdit}>Запази</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};

export default AlertEdit;
