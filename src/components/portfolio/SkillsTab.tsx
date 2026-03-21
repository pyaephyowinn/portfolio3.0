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
      { name: "React", rarity: "legendary", description: "Master of component-based sorcery" },
      { name: "Next.js", rarity: "legendary", description: "Server-side rendering champion" },
      { name: "TypeScript", rarity: "epic", description: "Type-safe incantations" },
      { name: "Tailwind CSS", rarity: "epic", description: "Rapid style conjuring" },
      { name: "HTML/CSS", rarity: "rare", description: "Foundation of all web magic" },
    ],
  },
  {
    title: "Backend Prowess",
    icon: "\uD83D\uDEE1",
    skills: [
      { name: "Node.js", rarity: "legendary", description: "Runtime mastery" },
      { name: "Python", rarity: "epic", description: "Serpent tongue fluency" },
      { name: "PostgreSQL", rarity: "epic", description: "Relational data warden" },
      { name: "MongoDB", rarity: "rare", description: "Document realm navigator" },
      { name: "Redis", rarity: "rare", description: "Lightning-fast cache keeper" },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: "\uD83D\uDD28",
    skills: [
      { name: "Git", rarity: "epic", description: "Version control grandmaster" },
      { name: "Docker", rarity: "epic", description: "Container summoner" },
      { name: "AWS", rarity: "rare", description: "Cloud realm explorer" },
      { name: "CI/CD", rarity: "rare", description: "Automation enchantments" },
      { name: "Linux", rarity: "uncommon", description: "Terminal warrior" },
    ],
  },
];

export default function SkillsTab() {
  const [playHover] = useSoundEffect("/sounds/effects/hover.mp3");

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-3xl font-bold text-amber-400 fantasy mb-8 text-center"
      >
        Spell Book
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6">
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
