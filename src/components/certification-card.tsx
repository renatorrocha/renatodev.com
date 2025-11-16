"use client";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ICertificationCard {
	logoUrl: string;
	altText: string;
	institution: string;
	course: string;
	href?: string;
	date: string;
	technologies?: readonly string[];
}

export function CertificationCard({
	logoUrl,
	altText,
	institution,
	course,
	href,
	date,
	technologies,
}: ICertificationCard) {
	return (
		<Link href={href || "#"} target="_blank" className="block cursor-pointer">
			<Card className="flex flex-col gap-4 p-4 transition-all duration-300 hover:shadow-md sm:flex-row sm:gap-4">
				<div className="flex flex-none items-start justify-center sm:justify-start">
					<Avatar className="bg-muted-background size-12 border-0 dark:bg-foreground sm:size-14">
						<AvatarImage
							src={logoUrl}
							alt={altText}
							className="object-contain"
						/>
						<AvatarFallback>{altText[0]}</AvatarFallback>
					</Avatar>
				</div>
				<div className="flex grow flex-col">
					<CardHeader className="space-y-2 p-0">
						<div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
							<div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-2">
								<div className="flex flex-col gap-1">
									<h3 className="text-sm font-semibold leading-tight sm:text-base">
										{course}
									</h3>
									<div className="font-sans text-xs text-muted-foreground sm:text-sm">
										{institution}
									</div>
								</div>
								{technologies && technologies.length > 0 && (
									<div className="flex flex-wrap gap-1.5 sm:inline-flex">
										{technologies.map((tech, index) => (
											<Badge
												variant="outline"
												className="text-[10px] sm:text-xs"
												key={index}
											>
												{tech}
											</Badge>
										))}
									</div>
								)}
							</div>
							<div className="text-left text-xs tabular-nums text-muted-foreground sm:text-right sm:text-sm">
								{date}
							</div>
						</div>
					</CardHeader>
				</div>
			</Card>
		</Link>
	);
}
