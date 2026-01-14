"use client";

import { useSearchParams } from "next/navigation";
import { useMessages, useTranslations } from "next-intl";
import { BackgroundBeams } from "@/components/bg-beams";
import BlurFade from "@/components/blur-fade";
import { CertificationDetail } from "@/components/certification-detail";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
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

	return (
		<main className="flex min-h-dvh flex-col">
			<BackgroundBeams />

			<section id="certifications" className="flex-1 py-12">
				<div className="w-full space-y-8">
					<BlurFade delay={BLUR_FADE_DELAY * 1}>
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
									{t("title")}
								</div>
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
									{t("title")}
								</h2>
								<p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									{t("description")}
								</p>
							</div>
						</div>
					</BlurFade>

					<BlurFade delay={BLUR_FADE_DELAY * 2}>
						<div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 lg:grid-cols-2">
							{/* Certifications List */}
							<div className="space-y-3">
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

							{/* Detail Panel */}
							<div className="lg:sticky lg:top-24 lg:h-fit">
								{selectedCertification ? (
									<BlurFade delay={BLUR_FADE_DELAY * 4} key={selectedId}>
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
										/>
									</BlurFade>
								) : (
									<Card className="flex h-64 items-center justify-center p-6">
										<p className="text-center text-muted-foreground">
											{t("selectPrompt")}
										</p>
									</Card>
								)}
							</div>
						</div>
					</BlurFade>
				</div>
			</section>
		</main>
	);
}
