import {
	ArchiveIcon,
	GitHubLogoIcon,
	HomeIcon,
	LinkedInLogoIcon,
} from "@radix-ui/react-icons";

export const BLUR_FADE_DELAY = 0.1;

const skillNameToApiName: Record<string, string> = {
	TailwindCSS: "tailwindcss",
	"Material UI": "mui",
	"Hugging Face": "huggingface",
	"VS Code": "vscode",
	"Github Actions": "githubactions",
};

export interface SkillCategory {
	category: string;
	skills: string[];
}

export const SKILLS: SkillCategory[] = [
	{
		category: "Languages & Runtime",
		skills: ["JavaScript", "TypeScript", "Python", "Golang", "Bun", "Nodejs"],
	},
	{
		category: "Frameworks & Libraries",
		skills: [
			"React",
			"Nextjs",
			"Vite",
			"Nestjs",
			"Express",
			"Elysia",
			"FastAPI",
			"Zustand",
			"TailwindCSS",
			"Material UI",
			"React Query",
			"Shadcn",
		],
	},
	{
		category: "Databases & Messaging",
		skills: [
			"PostgreSQL",
			"Redis",
			"RabbitMQ",
			"Supabase",
			"Prisma",
			"Drizzle",
		],
	},
	{
		category: "Cloud & DevOps",
		skills: [
			"AWS",
			"Docker",
			"Linux",
			"Bash",
			"Git",
			"GitHub",
			"Cloudflare",
			"Vercel",
			"Railway",
			"grafana",
			"Github Actions",
		],
	},
	{
		category: "AI",
		skills: ["Hugging Face", "Ollama", "LangChain", "AI-SDK", "n8n"],
	},
	{
		category: "Tools",
		skills: ["VS Code", "Obsidian", "Markdown", "Cursor"],
	},
];

/**
 * convert skill name to api name
 */
export function getSkillApiName(skillName: string): string {
	return (
		skillNameToApiName[skillName] || skillName.toLowerCase().replace(/\s+/g, "")
	);
}

/**
 * generate skill icons url
 */
export function getSkillIconsUrl(skills: string[]): string {
	const apiNames = skills.map(getSkillApiName).filter(Boolean).join(",");
	return `https://go-skill-icons.vercel.app/api/icons?i=${apiNames}`;
}

export const DATA = {
	name: "Renato Rocha Rodrigues",
	initials: "RR",
	avatarUrl: "/my-pic.jpg",
	navbar: [
		{
			href: "/",
			icon: HomeIcon,
			label: "Home",
		},
		{
			href: "/certifications",
			icon: ArchiveIcon,
			label: "Certifications",
		},
	],
	contact: {
		email: "renatorrodrigues2002@gmail.com",
		phone: "(27) 99311-7272",
		social: {
			Linkedin: {
				name: "Linkedin",
				url: "https://www.linkedin.com/in/renato-rrodrigues/",
				icon: LinkedInLogoIcon,
				navbar: true,
			},
			Github: {
				name: "Github",
				url: "https://github.com/renatorrocha",
				icon: GitHubLogoIcon,
				navbar: true,
			},
		},
	},
};
