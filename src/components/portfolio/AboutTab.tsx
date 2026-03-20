"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/warcraftcn/card";

const stats = [
  { label: "Years of Experience", value: "5+" },
  { label: "Projects Completed", value: "30+" },
  { label: "Technologies", value: "15+" },
  { label: "Cups of Coffee", value: "9999" },
];

export default function AboutTab() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-amber-400">
              About the Champion
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-amber-100/80 pb-6">
            <p>
              A battle-hardened developer who has traversed the treacherous
              landscapes of full-stack development. From the ancient scrolls of
              backend architectures to the gleaming frontiers of modern UI
              frameworks, I bring order to chaos through clean code and
              thoughtful design.
            </p>
            <p>
              My quest began in the halls of computer science, where I first
              wielded the power of programming. Since then, I have served many
              guilds, each teaching me new spells and strategies for conquering
              the ever-evolving world of software engineering.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
          >
            <Card data-size="sm">
              <CardContent className="text-center py-6">
                <div className="text-3xl font-bold text-amber-400">
                  {stat.value}
                </div>
                <div className="text-xs text-amber-100/60 mt-1">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
