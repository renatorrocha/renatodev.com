import { useMessages, useTranslations } from "next-intl";
import { BLUR_FADE_DELAY } from "@/lib/constants";
import BlurFade from "../blur-fade";
import { ResumeCard } from "../resume-card";

export default function EducationSection() {
	const t = useTranslations("Education");
	const messages = useMessages() as unknown as IntlMessages;

	return (
		<section id="education">
			<div className="flex min-h-0 flex-col gap-y-3">
				<BlurFade delay={BLUR_FADE_DELAY * 7}>
					<h2 className="text-center text-xl font-bold">{t("title")}</h2>
				</BlurFade>
				{messages.Education.records.map((education, id) => (
					<BlurFade
						key={`${education.institution}-${id}`}
						delay={BLUR_FADE_DELAY * 8 + id * 0.05}
					>
						<ResumeCard
							href={education.href}
							logoUrl={education.logoUrl}
							altText={education.institution}
							title={education.institution}
							subtitle={education.degree}
							period={`${education.start} - ${education.end}`}
						/>
					</BlurFade>
				))}
			</div>
		</section>
	);
}
