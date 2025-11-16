import {
	GitHubLogoIcon,
	HomeIcon,
	LinkedInLogoIcon,
} from "@radix-ui/react-icons";

export const BLUR_FADE_DELAY = 0.1;

export const DATA = {
	name: "Renato Rocha Rodrigues",
	initials: "RR",
	avatarUrl: "/my-pic.jpg",
	skills: [
		"React",
		"Next",
		"Typescript",
		"Tailwind",
		"Astro",
		"Vite",
		"Git",
		"Docker",
		"PostgreSQL",
		"Node",
		"Nest",
		"Prisma",
		"Jest",
		"Java",
		"Kotlin",
		"Android",
		"Nginx",
		"Bun",
		"Elysia",
		"Golang",
	],
	navbar: [
		{
			href: "/",
			icon: HomeIcon,
			label: "Home",
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
