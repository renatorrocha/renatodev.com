import { BackgroundBeams } from "@/components/bg-beams";
import AboutSection from "@/components/sections/about";
import EducationSection from "@/components/sections/education";
import HeroSection from "@/components/sections/hero";
import ProjectsSection from "@/components/sections/projects";
import SkillsSection from "@/components/sections/skills";
import WorkSection from "@/components/sections/work";

export default function Home() {
	return (
		<main className="flex min-h-dvh flex-col space-y-10">
			<HeroSection />

			<BackgroundBeams />

			<AboutSection />

			<div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-8">
				<WorkSection />

				<EducationSection />
			</div>

			<SkillsSection />

			<ProjectsSection />
		</main>
	);
}
