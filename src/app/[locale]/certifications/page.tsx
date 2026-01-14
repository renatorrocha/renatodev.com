"use client";

import { useSearchParams } from "next/navigation";
import { useMessages, useTranslations } from "next-intl";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { BackgroundBeams } from "@/components/bg-beams";
import BlurFade from "@/components/blur-fade";
import { CertificationDetail } from "@/components/certification-detail";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BLUR_FADE_DELAY } from "@/lib/constants";
import { useRouter } from "@/services/i18n/navigation";
import { cn } from "@/lib/utils";

export default function CertificationsPage() {
	const t = useTranslations("Certifications");
	const messages = useMessages() as unknown as IntlMessages;
	const searchParams = useSearchParams();
	const router = useRouter();

	const selectedId = searchParams.get("selected");
	const certifications = messages.Certifications.records;

	const selectedCertification = selectedId
		? certifications.find((cert) => cert.id === selectedId)
		: null;

	const handleSelect = (id: string) => {
		router.push(`/certifications?selected=${id}`, { scroll: false });
	};

	const handleBack = () => {
		router.push("/certifications", { scroll: false });
	};

	return (
		<main className="flex h-dvh flex-col overflow-hidden pb-20">
			<BackgroundBeams />

			{/* Header */}
			<BlurFade delay={BLUR_FADE_DELAY * 1}>
				<div className="flex flex-col items-center justify-center space-y-2 px-4 pt-6 text-center">
					<div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
						{t("title")}
					</div>
					<h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
						{t("title")}
					</h2>
					<p className="text-sm text-muted-foreground">{t("description")}</p>
				</div>
			</BlurFade>

			{/* Content */}
			<div className="flex-1 overflow-hidden px-4 py-4">
				<BlurFade delay={BLUR_FADE_DELAY * 2} className="h-full">
					<div className="mx-auto grid h-full max-w-7xl grid-cols-1 gap-4 lg:grid-cols-5">
						{/* Certifications List - Hidden on mobile when selected */}
						<div
							className={cn(
								"flex flex-col gap-3 overflow-y-auto pr-2 lg:col-span-2",
								selectedCertification && "hidden lg:flex",
							)}
						>
							{certifications.map((certification, index) => (
								<BlurFade
									key={certification.id}
									delay={BLUR_FADE_DELAY * 3 + index * 0.05}
								>
									<Card
										className={cn(
											"cursor-pointer p-4 transition-all duration-200 hover:shadow-md",
											selectedId === certification.id &&
												"ring-2 ring-primary shadow-md",
										)}
										onClick={() => handleSelect(certification.id)}
									>
										<div className="flex items-center gap-3">
											<Avatar className="size-12 border-0 bg-muted-background dark:bg-foreground">
												<AvatarImage
													src={certification.logoUrl}
													alt={certification.institution}
													className="object-contain"
												/>
												<AvatarFallback>
													{certification.institution[0]}
												</AvatarFallback>
											</Avatar>
											<div className="min-w-0 flex-1">
												<h3 className="truncate font-semibold">
													{certification.course}
												</h3>
												<p className="text-sm text-muted-foreground">
													{certification.institution}
												</p>
											</div>
											<span className="text-xs tabular-nums text-muted-foreground">
												{certification.date}
											</span>
										</div>
										{certification.technologies &&
											certification.technologies.length > 0 && (
												<div className="mt-3 flex flex-wrap gap-1.5">
													{certification.technologies.map((tech, i) => (
														<Badge
															key={i}
															variant="outline"
															className="text-[10px]"
														>
															{tech}
														</Badge>
													))}
												</div>
											)}
									</Card>
								</BlurFade>
							))}
						</div>

						{/* Detail Panel - Desktop */}
						<div className="hidden h-full lg:col-span-3 lg:block">
							{selectedCertification ? (
								<BlurFade
									delay={BLUR_FADE_DELAY * 4}
									key={selectedId}
									className="h-full"
								>
									<CertificationDetail
										id={selectedCertification.id}
										institution={selectedCertification.institution}
										course={selectedCertification.course}
										description={selectedCertification.description}
										logoUrl={selectedCertification.logoUrl}
										certificateImage={selectedCertification.certificateImage}
										href={selectedCertification.href}
										date={selectedCertification.date}
										technologies={selectedCertification.technologies}
										viewCourseLabel={t("viewCourse")}
										comingSoonLabel={t("certificateComingSoon")}
									/>
								</BlurFade>
							) : (
								<Card className="flex h-full items-center justify-center p-6">
									<p className="text-center text-muted-foreground">
										{t("selectPrompt")}
									</p>
								</Card>
							)}
						</div>

						{/* Detail Panel - Mobile */}
						{selectedCertification && (
							<div className="flex h-full flex-col gap-3 overflow-hidden lg:hidden">
								<Button
									variant="ghost"
									size="sm"
									onClick={handleBack}
									className="w-fit"
								>
									<ArrowLeftIcon className="mr-2 size-4" />
									{t("back")}
								</Button>
								<div className="min-h-0 flex-1 overflow-y-auto">
									<CertificationDetail
										id={selectedCertification.id}
										institution={selectedCertification.institution}
										course={selectedCertification.course}
										description={selectedCertification.description}
										logoUrl={selectedCertification.logoUrl}
										certificateImage={selectedCertification.certificateImage}
										href={selectedCertification.href}
										date={selectedCertification.date}
										technologies={selectedCertification.technologies}
										viewCourseLabel={t("viewCourse")}
										comingSoonLabel={t("certificateComingSoon")}
									/>
								</div>
							</div>
						)}
					</div>
				</BlurFade>
			</div>
		</main>
	);
}
