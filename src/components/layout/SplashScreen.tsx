"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/warcraftcn/button";
import { useAudio } from "./AudioProvider";

export default function SplashScreen() {
  const { unlockAudio, isAudioUnlocked } = useAudio();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const visited = sessionStorage.getItem("portfolio-visited");
    if (!visited && !isAudioUnlocked) {
      setShow(true);
    }
  }, [isAudioUnlocked]);

  const handleEnter = () => {
    sessionStorage.setItem("portfolio-visited", "true");
    unlockAudio();
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, hsl(270 30% 8%) 0%, hsl(0 0% 2%) 70%, #000 100%)",
          }}
        >
          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  bottom: "-10px",
                  width: `${1 + Math.random() * 3}px`,
                  height: `${1 + Math.random() * 3}px`,
                  background:
                    "radial-gradient(circle, hsl(45 100% 70% / 0.8), hsl(45 100% 50% / 0.2))",
                  boxShadow: `0 0 6px hsl(45 100% 60% / 0.4)`,
                  animation: `particle-float ${6 + Math.random() * 8}s linear infinite`,
                  animationDelay: `${Math.random() * 8}s`,
                }}
              />
            ))}
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center space-y-8 z-10"
          >
            <div className="space-y-3">
              <h1 className="text-5xl md:text-7xl font-bold text-amber-400 fantasy tracking-widest">
                Portfolio
              </h1>
              <p className="text-amber-100/50 text-sm md:text-base fantasy tracking-wider">
                A journey through code and craft
              </p>
            </div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Button variant="frame" onClick={handleEnter} className="text-lg px-8 py-5">
                Enter the Realm
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-amber-100/30 text-xs fantasy"
            >
              Click to enable sound &amp; music
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
