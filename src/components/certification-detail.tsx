"use client";

import Image from "next/image";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ICertificationDetail {
	id: string;
	institution: string;
	course: string;
	description: string;
	logoUrl: string;
	certificateImage?: string;
	href?: string;
	date: string;
	technologies?: readonly string[];
}

export function CertificationDetail({
	institution,
	course,
	description,
	logoUrl,
	certificateImage,
	href,
	date,
	technologies,
}: ICertificationDetail) {
	return (
		<Card className="flex h-full flex-col">
			<CardHeader className="space-y-4">
				<div className="flex items-start justify-between">
					<div className="flex items-center gap-3">
						<Avatar className="size-14 border-0 bg-muted-background dark:bg-foreground">
							<AvatarImage
								src={logoUrl}
								alt={institution}
								className="object-contain"
							/>
							<AvatarFallback>{institution[0]}</AvatarFallback>
						</Avatar>
						<div>
							<h2 className="text-xl font-bold">{course}</h2>
							<p className="text-sm text-muted-foreground">{institution}</p>
						</div>
					</div>
					<span className="text-sm tabular-nums text-muted-foreground">
						{date}
					</span>
				</div>

				{technologies && technologies.length > 0 && (
					<div className="flex flex-wrap gap-2">
						{technologies.map((tech, index) => (
							<Badge key={index} variant="secondary">
								{tech}
							</Badge>
						))}
					</div>
				)}
			</CardHeader>

			<CardContent className="flex flex-1 flex-col gap-4">
				<p className="text-sm leading-relaxed text-muted-foreground">
					{description}
				</p>

				{certificateImage && (
					<div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border bg-muted">
						<Image
							src={certificateImage}
							alt={`${course} certificate`}
							fill
							className="object-contain"
						/>
					</div>
				)}

				{href && (
					<Button asChild variant="outline" className="mt-auto w-full">
						<a href={href} target="_blank" rel="noopener noreferrer">
							<ExternalLinkIcon className="mr-2 size-4" />
							View Course
						</a>
					</Button>
				)}
			</CardContent>
		</Card>
	);
}
