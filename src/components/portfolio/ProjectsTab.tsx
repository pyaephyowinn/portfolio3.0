"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/warcraftcn/card";
import { Badge } from "@/components/ui/warcraftcn/badge";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipTitle,
  TooltipBody,
} from "@/components/ui/warcraftcn/tooltip";
import { useSoundEffect } from "@/hooks/useSoundEffect";

const projects = [
  {
    title: "MM Trails",
    description: "Multi-tenant content platform with custom subdomains. Leveraged AI-assisted development workflows.",
    tags: ["Next.js", "TypeScript", "AI"],
    rarity: "legendary" as const,
    link: "https://www.mmtrails.com/",
    type: "Personal",
  },
  {
    title: "EU Holidays",
    description: "Flight and hotel booking flows integrating NDC and FIT APIs. Zero-downtime CI/CD with blue-green deployment.",
    tags: ["Next.js", "Node.js", "AWS EC2", "Nginx"],
    rarity: "legendary" as const,
    link: "https://flights-hotels.euholidays.com.sg/",
    type: "First To Fly",
  },
  {
    title: "Infinity Careers",
    description: "Led frontend migration to Next.js 14 App Router. Replaced Redux with Zustand and TanStack Query.",
    tags: ["Next.js 14", "TypeScript", "TailwindCSS", "Zustand"],
    rarity: "epic" as const,
    link: "https://www.infinitycareers.com.mm/",
    type: "Infinity Global Solutions",
  },
  {
    title: "AYA iBanking",
    description: "Secure authentication flows, session handling, and protected route architecture for internet banking.",
    tags: ["Next.js", "SWR", "Zustand", "Node.js"],
    rarity: "epic" as const,
    link: "https://www.ayaibanking.com/",
    type: "AYA Bank",
  },
  {
    title: "AYA Pay Mini-Apps",
    description: "Customer-facing BNPL, Pocket Money, and Credit Card features for AYA Pay super app.",
    tags: ["React", "Node.js", "MongoDB"],
    rarity: "rare" as const,
    link: "#",
    type: "AYA Bank",
  },
  {
    title: "KBZ Enterprise Apps",
    description: "Internal enterprise web applications supporting cross-department operations with cloud-native services.",
    tags: ["React", "NestJS", "AWS Lambda", "AppSync"],
    rarity: "rare" as const,
    link: "#",
    type: "KBZ Bank",
  },
];

export default function ProjectsTab() {
  const [playHover] = useSoundEffect("/sounds/effects/hover.mp3");

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-2xl font-bold text-amber-400 fantasy mb-5 text-center"
      >
        Battle Records
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            onMouseEnter={() => playHover()}
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="h-full">
                  <Card data-size="sm" className="h-full hover:brightness-110 transition-all duration-200">
                    <CardHeader>
                      <CardTitle className="text-amber-400">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-amber-100/60">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} size="sm">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex-col items-start gap-2 mt-auto">
                      <div className="flex items-center justify-between w-full">
                        <Badge
                          variant={project.rarity === "legendary" ? "destructive" : "secondary"}
                          size="sm"
                        >
                          {project.rarity.toUpperCase()}
                        </Badge>
                        {project.link !== "#" && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-amber-400/60 text-xs fantasy hover:text-amber-400 transition-colors flex items-center gap-1"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Visit &rarr;
                          </a>
                        )}
                      </div>
                      <span className="text-amber-100/40 text-xs fantasy">{project.type}</span>
                    </CardFooter>
                  </Card>
                </div>
              </TooltipTrigger>
              <TooltipContent variant={project.rarity}>
                <TooltipTitle>{project.title}</TooltipTitle>
                <TooltipBody>{project.description}</TooltipBody>
              </TooltipContent>
            </Tooltip>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
