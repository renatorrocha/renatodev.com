import { useMessages, useTranslations } from "next-intl";
import { BackgroundBeams } from "@/components/bg-beams";
import BlurFade from "@/components/blur-fade";
import { CertificationCard } from "@/components/certification-card";
import { ProjectCard } from "@/components/project-card";
import { BLUR_FADE_DELAY } from "@/lib/constants";

export default function ProjectsAndCertificationsPage() {
	const projectT = useTranslations("Project");
	const certT = useTranslations("Certifications");
	const messages = useMessages() as unknown as IntlMessages;

	return (
		<main className="flex min-h-dvh flex-col space-y-10">
			<BackgroundBeams />

			<section id="projects">
				<div className="w-full space-y-12 py-12">
					<BlurFade delay={BLUR_FADE_DELAY * 1}>
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
									{projectT("title")}
								</div>
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
									{projectT("subtitle")}{" "}
									<span className="text-primary">{projectT("highlight")}</span>
								</h2>
								<p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									{projectT("description")}
								</p>
							</div>
						</div>
					</BlurFade>
					<div className="mx-auto grid max-w-[800px] grid-cols-1 gap-3 sm:grid-cols-2">
						{messages.Project.projects.map((project, id) => (
							<BlurFade
								key={project.title}
								delay={BLUR_FADE_DELAY * 2 + id * 0.05}
							>
								<ProjectCard
									href={project.href}
									key={project.title}
									title={project.title}
									description={project.description}
									tags={project.technologies}
									image={project.image}
									video={project.video}
									links={project.links}
								/>
							</BlurFade>
						))}
					</div>
				</div>
			</section>

			<section id="certifications">
				<div className="w-full space-y-12 py-12">
					<BlurFade delay={BLUR_FADE_DELAY * 10}>
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
									{certT("title")}
								</div>
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
									{certT("title")}
								</h2>
								<p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									{certT("description")}
								</p>
							</div>
						</div>
					</BlurFade>
					<div className="mx-auto grid max-w-[800px] grid-cols-1 gap-3">
						{messages.Certifications.records.map((certification, id) => (
							<BlurFade
								key={`${certification.institution}-${certification.course}-${id}`}
								delay={BLUR_FADE_DELAY * 11 + id * 0.05}
							>
								<CertificationCard
									logoUrl={certification.logoUrl}
									altText={certification.institution}
									institution={certification.institution}
									course={certification.course}
									href={certification.href}
									date={certification.date}
									technologies={certification.technologies}
								/>
							</BlurFade>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
