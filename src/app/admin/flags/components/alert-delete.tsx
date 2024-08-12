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

import { MdDelete } from "react-icons/md";
import { Id } from "../../../../../convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { api } from "../../../../../convex/_generated/api";

const AlertDelete = ({ id }: { id: Id<"flags"> }) => {
	const deleteFlag = useMutation(api.flags.deleteFlag);
	return (
		<AlertDialog>
			<AlertDialogTrigger>
				<Button className="w-14">
					<MdDelete size="40px" />
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>
						Сигурен ли си, че искаш да изтриеш?
					</AlertDialogTitle>
					<AlertDialogDescription>
						Това действие не може да бъде отменено.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Откажи</AlertDialogCancel>
					<AlertDialogAction
						onClick={() => {
							deleteFlag({
								id: id,
							});
						}}
					>
						Изтриване
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};

export default AlertDelete;
