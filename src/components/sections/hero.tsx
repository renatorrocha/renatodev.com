import React from "react";
import BlurFadeText from "../blur-fade-text";
import { BLUR_FADE_DELAY, DATA } from "@/lib/constants";
import BlurFade from "../blur-fade";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <section id="hero">
      <div className="mx-auto w-full space-y-8">
        <div className="flex flex-col-reverse items-center justify-between gap-4 sm:flex-row sm:items-start sm:gap-2">
          <div className="flex flex-1 flex-col space-y-1.5">
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
              yOffset={8}
              text={t("greeting")}
            />

            <BlurFadeText
              className="max-w-[600px] text-secondary md:text-xl"
              delay={BLUR_FADE_DELAY}
              text={t("description")}
            />
          </div>

          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="relative">
            <Avatar className="size-36 border z-10">
              <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
              <AvatarFallback>{DATA.initials}</AvatarFallback>
            </Avatar>

            <img
              src="/christmas-hat.png"
              alt="Snow Fall"
              className="absolute -right-8 -top-6 rotate-12 size-24"
            />
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
