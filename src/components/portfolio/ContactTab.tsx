"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/warcraftcn/card";
import { Input } from "@/components/ui/warcraftcn/input";
import { Textarea } from "@/components/ui/warcraftcn/textarea";
import { Button } from "@/components/ui/warcraftcn/button";
import { useSoundEffect } from "@/hooks/useSoundEffect";

export default function ContactTab() {
  const [submitted, setSubmitted] = useState(false);
  const [playClick] = useSoundEffect("/sounds/effects/click.mp3");
  const [playSuccess] = useSoundEffect("/sounds/effects/success.mp3");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playSuccess();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-6">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-amber-400 text-center">
              Send a Scroll
            </CardTitle>
          </CardHeader>
          <CardContent className="pb-6">
            {submitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-8 space-y-3"
              >
                <div className="text-4xl">&#x2728;</div>
                <p className="text-amber-400 text-xl font-bold fantasy">
                  Message Sent!
                </p>
                <p className="text-amber-100/60 text-sm">
                  Your scroll has been dispatched by raven. I shall respond promptly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm text-amber-100/70 fantasy block">
                    Your Name
                  </label>
                  <Input placeholder="Enter your name..." required className="w-full" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm text-amber-100/70 fantasy block">
                    Your Email
                  </label>
                  <Input type="email" placeholder="Enter your email..." required className="w-full" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm text-amber-100/70 fantasy block">
                    Your Message
                  </label>
                  <Textarea
                    placeholder="Write your message here..."
                    rows={4}
                    required
                    className="w-full"
                  />
                </div>
                <div className="flex justify-center pt-1">
                  <Button
                    variant="frame"
                    type="submit"
                    onClick={() => playClick()}
                  >
                    Dispatch Scroll
                  </Button>
                </div>
              </form>
            )}
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-5 text-center space-y-2"
      >
        <p className="text-amber-100/40 text-sm fantasy">
          Or find me in these realms
        </p>
        <div className="flex justify-center gap-6 text-amber-100/50">
          <a href="https://github.com/pyaephyowinn" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors fantasy text-sm">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/pyaephyowin" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors fantasy text-sm">
            LinkedIn
          </a>
          <a href="mailto:pyaephyowin.dev@gmail.com" className="hover:text-amber-400 transition-colors fantasy text-sm">
            Email
          </a>
          <a href="https://www.pyaephyowin.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors fantasy text-sm">
            Website
          </a>
        </div>
      </motion.div>
    </div>
  );
}
