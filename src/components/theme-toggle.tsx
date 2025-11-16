"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export default function ThemeToggle() {
	const { theme, setTheme } = useTheme();

	return (
		<Button
			variant="ghost"
			type="button"
			size="icon"
			className="px-2 cursor-pointer"
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
		>
			<SunIcon className="size-4 text-primary/70 hover:text-secondary dark:hidden" />
			<MoonIcon className="hidden size-4 text-primary/70 hover:text-secondary dark:block" />
		</Button>
	);
}
