"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/warcraftcn/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/warcraftcn/card";
import { useSoundEffect } from "@/hooks/useSoundEffect";

const stats = [
  { label: "Years of Experience", value: "3+" },
  { label: "Companies Served", value: "4" },
  { label: "Technologies", value: "20+" },
  { label: "First Class Honours", value: "BSc" },
];

export default function HeroTab({ onNavigate }: { onNavigate: (tab: string) => void }) {
  const [playClick] = useSoundEffect("/sounds/effects/click.mp3");

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-3"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-amber-400 fantasy tracking-wider">
          Pyae Phyo Win
        </h1>
        <p className="text-base md:text-lg text-amber-100/70">
          Full Stack Developer
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-amber-400">
              About the Champion
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-amber-100/80 pb-8 px-6">
            <p>
              Full Stack Developer with 3+ years of experience building scalable
              web applications using TypeScript, React, and Node.js. Experienced
              in delivering production systems in fintech, travel, and
              AI-powered platforms. Skilled in cloud-native architecture on AWS
              and implementing AI integrations including Retrieval-Augmented
              Generation (RAG).
            </p>
            <p>
              Graduated with First Class Honours in BSc Computing from the
              University of Greenwich. Participated in ICPC Asia-Yangon 2018 and
              MCPC Yangon 2019 during studies at the University of Computer
              Studies, Myeik.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
          >
            <Card data-size="sm">
              <CardContent className="text-center py-4">
                <div className="text-2xl font-bold text-amber-400">
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

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="flex justify-center"
      >
        <Button
          onClick={() => {
            playClick();
            onNavigate("contact");
          }}
        >
          Get in Touch
        </Button>
      </motion.div>
    </div>
  );
}
