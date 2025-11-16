"use client";

import { ChevronRightIcon } from "@radix-ui/react-icons";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import type React from "react";
import { useState } from "react";
import Markdown from "react-markdown";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface IResumeCard {
	logoUrl: string;
	altText: string;
	title: string;
	subtitle?: string;
	href?: string;
	badges?: readonly string[];
	period: string;
	description?: string;
}

export function ResumeCard({
	logoUrl,
	altText,
	title,
	subtitle,
	href,
	badges,
	period,
	description,
}: IResumeCard) {
	const [isExpanded, setIsExpanded] = useState(false);

	const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		if (description) {
			e.preventDefault();
			setIsExpanded(!isExpanded);
		}
	};

	return (
		<Link
			href={href || "#"}
			target="_blank"
			className="block cursor-pointer"
			onClick={handleClick}
		>
			<Card className="flex flex-col gap-3 p-3 transition-all duration-300 hover:shadow-md hover:ring-2 hover:ring-muted-foreground md:flex-row md:gap-4 md:p-4">
				<div className="flex flex-none items-center md:items-start">
					<Avatar className="bg-muted-background size-10 border-0 dark:bg-foreground md:size-12">
						<AvatarImage
							src={logoUrl || "/placeholder.svg"}
							alt={altText}
							className="object-contain"
						/>
						<AvatarFallback>{altText?.[0] || "?"}</AvatarFallback>
					</Avatar>
				</div>

				<div className="group flex min-w-0 grow flex-col gap-2">
					<CardHeader className="space-y-2 p-0">
						<div className="flex flex-col gap-1.5">
							<div className="flex items-start justify-between gap-2">
								<h3 className="inline-flex items-start gap-1.5 text-base font-semibold leading-tight md:text-base">
									<span className="wrap-break-word">{title}</span>
									{description && (
										<ChevronRightIcon
											className={cn(
												"mt-0.5 size-4 shrink-0 translate-x-0 transform opacity-70 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
												isExpanded ? "rotate-90 opacity-100" : "rotate-0",
											)}
										/>
									)}
								</h3>
								<div className="shrink-0 text-right text-xs tabular-nums text-muted-foreground md:text-sm">
									{period}
								</div>
							</div>

							{subtitle && (
								<div className="font-sans text-sm text-muted-foreground md:text-sm">
									{subtitle}
								</div>
							)}

							{badges && badges.length > 0 && (
								<div className="flex flex-wrap gap-1">
									{badges.map((badge) => (
										<Badge
											variant="outline"
											className="px-1.5 py-0.5 text-[10px] md:text-xs"
											key={badge}
										>
											{badge}
										</Badge>
									))}
								</div>
							)}
						</div>
					</CardHeader>

					<AnimatePresence initial={false}>
						{isExpanded && description && (
							<motion.div
								key="content"
								initial="collapsed"
								animate="open"
								exit="collapsed"
								variants={{
									open: { opacity: 1, height: "auto" },
									collapsed: { opacity: 0, height: 0 },
								}}
								transition={{ duration: 0.2 }}
								className="overflow-hidden text-sm leading-relaxed text-muted-foreground"
							>
								<Markdown className="prose prose-sm dark:prose-invert max-w-none [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
									{description}
								</Markdown>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</Card>
		</Link>
	);
}
