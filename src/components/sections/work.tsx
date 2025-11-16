import { useMessages, useTranslations } from "next-intl";
import BlurFade from "@/components/blur-fade";
import { ResumeCard } from "@/components/resume-card";
import { BLUR_FADE_DELAY } from "@/lib/constants";

export default function WorkSection() {
	const t = useTranslations("Work");
	const messages = useMessages() as unknown as IntlMessages;

	return (
		<section id="work">
			<div className="flex min-h-0 flex-col gap-y-3">
				<BlurFade delay={BLUR_FADE_DELAY * 5}>
					<h2 className="text-xl text-center font-bold">{t("title")}</h2>
				</BlurFade>

				{messages.Work.experiences.map((work, i) => (
					<BlurFade
						key={`${work.company}-${i}`}
						delay={BLUR_FADE_DELAY * 6 + i * 0.05}
					>
						<ResumeCard
							logoUrl={work.logoUrl}
							altText={work.company}
							title={work.company}
							subtitle={work.title}
							href={work.href}
							badges={work.badges}
							period={`${work.start} - ${work.end ?? t("present")}`}
							description={work.description}
						/>
					</BlurFade>
				))}
			</div>
		</section>
	);
}
