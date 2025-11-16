"use client";

import { CodeIcon } from "@radix-ui/react-icons";
import { CloudIcon, LayoutDashboard, WrenchIcon } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { BLUR_FADE_DELAY, getSkillApiName, SKILLS } from "@/lib/constants";
import BlurFade from "../blur-fade";

function SkillIcon(idx: number): React.ReactNode {
	switch (idx) {
		case 0:
			return <CodeIcon className="size-5" />;
		case 1:
			return <LayoutDashboard className="size-5" />;
		case 2:
			return <CloudIcon className="size-5" />;
		case 3:
			return <WrenchIcon className="size-5" />;
		default:
			return <WrenchIcon className="size-5" />;
	}
}

const categoryTranslationKeys: Record<string, string> = {
	"Languages & Runtime": "categories.languages",
	"Frameworks & Libraries": "categories.frameworks",
	"Databases & Messaging": "categories.databases",
	"Cloud & DevOps": "categories.cloud",
	AI: "categories.ai",
	Tools: "categories.tools",
};

function SkillBadge({ skill }: { skill: string }) {
	const apiName = getSkillApiName(skill);
	const iconUrl = `https://go-skill-icons.vercel.app/api/icons?i=${apiName}`;

	return (
		<Badge className="transition-all duration-200 hover:scale-105 cursor-default flex items-center gap-1.5">
			<Image
				src={iconUrl}
				alt={skill}
				width={20}
				height={20}
				className="shrink-0 object-contain"
				unoptimized
			/>
			<span>{skill}</span>
		</Badge>
	);
}

export default function SkillsSection() {
	const t = useTranslations("Skills");

	return (
		<section id="skills" className="w-full">
			<div className="space-y-8">
				<BlurFade delay={BLUR_FADE_DELAY * 9} className="space-y-2">
					<h2 className="text-xl font-bold">{t("title")}</h2>
				</BlurFade>

				<div className="grid gap-6 md:grid-cols-2">
					{SKILLS.map((category, idx) => {
						const categoryKey =
							categoryTranslationKeys[category.category] || category.category;
						const categoryLabel = t(categoryKey, {
							defaultValue: category.category,
						});

						return (
							<Card
								key={category.category}
								className="group relative overflow-hidden border p-6 transition-all duration-300 hover:shadow-lg hover:ring-2 hover:ring-primary/20 hover:ring-offset-2"
							>
								<div className="space-y-4">
									<div className="flex items-center gap-2">
										<div className="flex size-8 items-center justify-center rounded-md bg-primary/10 text-sm font-bold text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
											{SkillIcon(idx)}
										</div>
										<h3 className="text-lg font-semibold">{categoryLabel}</h3>
									</div>

									<div className="flex flex-wrap gap-2">
										{category.skills.map((skill) => (
											<SkillBadge key={skill} skill={skill} />
										))}
									</div>
								</div>

								<div className="pointer-events-none absolute -right-8 -top-8 size-24 rounded-full bg-primary/5 blur-2xl transition-all duration-500 group-hover:bg-primary/10" />
							</Card>
						);
					})}
				</div>
			</div>
		</section>
	);
}
