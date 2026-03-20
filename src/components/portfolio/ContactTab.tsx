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

export default function ContactTab() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
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
          <CardContent className="pb-8">
            {submitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-12 space-y-4"
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm text-amber-100/70 fantasy">
                    Your Name
                  </label>
                  <Input placeholder="Enter your name..." required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-amber-100/70 fantasy">
                    Your Email
                  </label>
                  <Input type="email" placeholder="Enter your email..." required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-amber-100/70 fantasy">
                    Your Message
                  </label>
                  <Textarea
                    placeholder="Write your message here..."
                    rows={5}
                    required
                  />
                </div>
                <div className="flex justify-center pt-2">
                  <Button variant="frame" type="submit">
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
        className="mt-8 text-center space-y-2"
      >
        <p className="text-amber-100/40 text-sm fantasy">
          Or find me in these realms
        </p>
        <div className="flex justify-center gap-6 text-amber-100/50">
          <a href="#" className="hover:text-amber-400 transition-colors fantasy text-sm">
            GitHub
          </a>
          <a href="#" className="hover:text-amber-400 transition-colors fantasy text-sm">
            LinkedIn
          </a>
          <a href="#" className="hover:text-amber-400 transition-colors fantasy text-sm">
            Twitter
          </a>
        </div>
      </motion.div>
    </div>
  );
}
