"use client";

import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "./dock";
import { DATA } from "@/lib/constants";
import ThemeToggle from "./theme-toggle";
import { useTranslations } from "next-intl";
import LanguageSwitch from "./language-switch";
import { FileTextIcon } from "@radix-ui/react-icons";
import { Link } from "@/services/i18n/navigation";

export default function Navbar() {
  const t = useTranslations("Labels");
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex h-full max-h-14 origin-bottom">
      <div className="fixed inset-x-0 bottom-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
      <Dock className="pointer-events-auto relative z-50 mx-auto flex h-full min-h-full transform-gpu items-center bg-background px-1 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
        {DATA.navbar.map((item) => (
          <DockIcon key={item.href}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "text-primary/70 hover:text-secondary",
                  )}
                >
                  <item.icon className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation="vertical" className="h-full" />
        {Object.entries(DATA.contact.social)
          .filter(([_, social]) => social.navbar)
          .map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    target="_blank"
                    href={social.url}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "text-primary/70 hover:text-secondary",
                    )}
                  >
                    <social.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}

        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href={t("resumeLink")}
                target="_blank"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "text-primary/70 hover:text-secondary",
                )}
              >
                <FileTextIcon className="size-4" />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>{t("curriculum")}</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>

        <Separator orientation="vertical" className="h-full py-2" />
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>
                <ThemeToggle />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{t("changeTheme")}</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>

        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>
                <LanguageSwitch />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{t("changeLanguage")}</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>
    </div>
  );
}
