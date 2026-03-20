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

const projects = [
  {
    title: "The Ancient Gateway",
    description: "A full-stack e-commerce platform with real-time inventory management.",
    tags: ["React", "Node.js", "PostgreSQL"],
    rarity: "legendary" as const,
    link: "#",
  },
  {
    title: "Shadow Weaver",
    description: "AI-powered content generation tool with natural language processing.",
    tags: ["Python", "FastAPI", "OpenAI"],
    rarity: "epic" as const,
    link: "#",
  },
  {
    title: "Iron Forge Dashboard",
    description: "Real-time analytics dashboard for monitoring cloud infrastructure.",
    tags: ["Next.js", "D3.js", "AWS"],
    rarity: "rare" as const,
    link: "#",
  },
  {
    title: "Scroll of Records",
    description: "Document management system with version control and collaboration.",
    tags: ["TypeScript", "MongoDB", "WebSocket"],
    rarity: "epic" as const,
    link: "#",
  },
  {
    title: "Battle Arena",
    description: "Multiplayer game lobby system with matchmaking and ranking.",
    tags: ["Go", "Redis", "gRPC"],
    rarity: "legendary" as const,
    link: "#",
  },
  {
    title: "Crystal Ball",
    description: "Data visualization tool for financial market predictions.",
    tags: ["React", "TensorFlow", "Flask"],
    rarity: "rare" as const,
    link: "#",
  },
];

export default function ProjectsTab() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-3xl font-bold text-amber-400 fantasy mb-8 text-center"
      >
        Battle Records
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <a href={project.link} className="block h-full">
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
                    <CardFooter>
                      <Badge
                        variant={project.rarity === "legendary" ? "destructive" : "secondary"}
                        size="sm"
                      >
                        {project.rarity.toUpperCase()}
                      </Badge>
                    </CardFooter>
                  </Card>
                </a>
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
