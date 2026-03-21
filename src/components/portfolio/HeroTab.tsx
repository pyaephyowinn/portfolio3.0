"use client";

import { motion } from "framer-motion";
import { Avatar } from "@/components/ui/warcraftcn/avatar";
import { Button } from "@/components/ui/warcraftcn/button";
import { useSoundEffect } from "@/hooks/useSoundEffect";

export default function HeroTab({ onNavigate }: { onNavigate: (tab: string) => void }) {
  const [playClick] = useSoundEffect("/sounds/effects/click.mp3");

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] gap-6 px-4 text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Avatar
          faction="undead"
          size="md"
          fallback={
            <span className="text-4xl text-amber-400">PW</span>
          }
        />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="space-y-3"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-amber-400 fantasy tracking-wider">
          Pyae Phyo Win
        </h1>
        <p className="text-base md:text-lg text-amber-100/70 max-w-lg mx-auto">
          Full Stack Developer
        </p>
        <p className="text-sm text-amber-100/50 max-w-md mx-auto leading-relaxed">
          3+ years building scalable web applications in fintech, travel, and AI-powered platforms.
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="flex gap-4 flex-wrap justify-center"
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
