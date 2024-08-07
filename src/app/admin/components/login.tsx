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
import { useRouter } from "next/navigation";
import { useState } from "react";

export function LoginForm() {
	const router = useRouter();
	const [username, setUsername] = useState<string>();
	const [password, setPassword] = useState<string>();

	function onSubmit() {
		if (username === "Mitko" && password === "Mitko") {
			router.push("/admin/flags");
		}
	}
	return (
		<Card className="w-full max-w-sm">
			<CardHeader>
				<CardTitle className="text-2xl">Вход</CardTitle>
				<CardDescription>Въведете потребителско име</CardDescription>
			</CardHeader>
			<CardContent className="grid gap-4">
				<div className="grid gap-2">
					<Label htmlFor="name">Име</Label>
					<Input
						onChange={(e) => {
							setUsername(e.target.value);
						}}
						id="email"
						type="email"
						value={username}
						placeholder="Mitko"
						required
					/>
				</div>
				<div className="grid gap-2">
					<Label htmlFor="password">Парола</Label>
					<Input
						onChange={(e) => {
							setPassword(e.target.value);
						}}
						value={password}
						id="password"
						placeholder="Mitko"
						type="password"
						required
					/>
				</div>
			</CardContent>
			<CardFooter>
				<Button onClick={onSubmit} className="w-full">
					Sign in
				</Button>
			</CardFooter>
		</Card>
	);
}
