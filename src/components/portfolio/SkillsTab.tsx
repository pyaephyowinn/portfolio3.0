"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/warcraftcn/badge";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipTitle,
  TooltipBody,
} from "@/components/ui/warcraftcn/tooltip";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/warcraftcn/card";
import { useSoundEffect } from "@/hooks/useSoundEffect";

type Rarity = "legendary" | "epic" | "rare" | "uncommon" | "default";

interface Skill {
  name: string;
  rarity: Rarity;
  description: string;
}

const skillCategories: { title: string; icon: string; skills: Skill[] }[] = [
  {
    title: "Frontend Mastery",
    icon: "\u2694",
    skills: [
      { name: "React", rarity: "legendary", description: "Primary weapon \u2014 production apps at AYA Bank, KBZ, and more" },
      { name: "Next.js", rarity: "legendary", description: "App Router, SSR, ISR \u2014 used across all recent projects" },
      { name: "React Native", rarity: "epic", description: "Mobile app development experience" },
      { name: "TypeScript", rarity: "legendary", description: "Type-safe code across all projects" },
      { name: "TailwindCSS", rarity: "epic", description: "Rapid UI development \u2014 Infinity Careers, MM Trails" },
      { name: "Zustand", rarity: "epic", description: "Replaced Redux at Infinity Careers" },
      { name: "Redux", rarity: "rare", description: "Legacy state management experience" },
      { name: "TanStack Query", rarity: "epic", description: "Server-state caching \u2014 Infinity Careers" },
      { name: "Shadcn UI", rarity: "rare", description: "Component library expertise" },
    ],
  },
  {
    title: "Backend Prowess",
    icon: "\uD83D\uDEE1",
    skills: [
      { name: "Node.js", rarity: "legendary", description: "Backend runtime \u2014 AYA Bank, First To Fly" },
      { name: "NestJS", rarity: "epic", description: "Enterprise APIs at KBZ Bank" },
      { name: "Express", rarity: "epic", description: "REST API development" },
      { name: "Hono", rarity: "rare", description: "Lightweight edge-first framework" },
      { name: "Python", rarity: "epic", description: "AI/ML integrations and scripting" },
      { name: "FastAPI", rarity: "rare", description: "Python API framework" },
      { name: "Go", rarity: "epic", description: "Performance-critical components" },
      { name: "Gin", rarity: "rare", description: "Go web framework experience" },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: "\u2601",
    skills: [
      { name: "AWS", rarity: "legendary", description: "EC2, Lambda, S3, SQS, API Gateway, CloudFront, ECR" },
      { name: "Docker", rarity: "epic", description: "Containerized deployments" },
      { name: "GitHub Actions", rarity: "epic", description: "CI/CD pipelines \u2014 First To Fly, EU Holidays" },
      { name: "Monorepo", rarity: "rare", description: "Multi-package project management" },
    ],
  },
  {
    title: "Databases",
    icon: "\uD83D\uDCBE",
    skills: [
      { name: "MongoDB", rarity: "epic", description: "Document DB \u2014 AYA Pay features" },
      { name: "PostgreSQL", rarity: "epic", description: "Relational data at scale" },
      { name: "Prisma", rarity: "rare", description: "Type-safe ORM" },
      { name: "TypeORM", rarity: "rare", description: "ORM for NestJS projects" },
      { name: "Drizzle", rarity: "rare", description: "Lightweight TypeScript ORM" },
    ],
  },
];

export default function SkillsTab() {
  const [playHover] = useSoundEffect("/sounds/effects/hover.mp3");

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-2xl font-bold text-amber-400 fantasy mb-5 text-center"
      >
        Spell Book
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-4">
        {skillCategories.map((category, ci) => (
          <motion.div
            key={category.title}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: ci * 0.15, duration: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-amber-400 flex items-center gap-2">
                  <span>{category.icon}</span>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-6">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Tooltip key={skill.name}>
                      <TooltipTrigger onMouseEnter={() => playHover()}>
                        <Badge
                          variant={
                            skill.rarity === "legendary"
                              ? "destructive"
                              : skill.rarity === "epic"
                                ? "default"
                                : "secondary"
                          }
                        >
                          {skill.name}
                        </Badge>
                      </TooltipTrigger>
                      <TooltipContent variant={skill.rarity}>
                        <TooltipTitle>{skill.name}</TooltipTitle>
                        <TooltipBody>{skill.description}</TooltipBody>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
