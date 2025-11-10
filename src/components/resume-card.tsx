"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import Markdown from "react-markdown";

interface IResumeCard {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}

export function ResumeCard({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: IResumeCard) {
  // Estado interno para controlar expansão
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Link
      href={href || "#"}
      target="_blank"
      className="block cursor-pointer"
      onClick={handleClick}
    >
      <Card className="flex flex-col p-4 sm:flex-row">
        <div className="mb-4 flex-none sm:mb-0">
          <Avatar className="bg-muted-background m-auto size-12 border-0 dark:bg-foreground">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="group ml-4 grow flex-col items-center">
          <CardHeader>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center gap-2 text-xs font-semibold leading-none sm:text-sm">
                {title}
                {badges && (
                  <span className="hidden gap-x-2 md:inline-flex">
                    {badges.map((badge, index) => (
                      <Badge
                        variant="outline"
                        className="align-middle text-xs"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
                <ChevronRightIcon
                  className={cn(
                    "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                    isExpanded ? "rotate-90" : "rotate-0",
                  )}
                />
              </h3>
              <div className="text-right text-xs tabular-nums text-muted-foreground sm:text-sm">
                {period}
              </div>
            </div>
            {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
          </CardHeader>

          <AnimatePresence initial={false}>
            {isExpanded && description && (
              <motion.div
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: "auto" },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.2 }}
                className="mt-2 text-xs sm:text-sm"
              >
                <Markdown className="prose prose-sm sm:prose md:prose-base lg:prose-lg max-w-none">
                  {description}
                </Markdown>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Card>
    </Link>
  );
}
