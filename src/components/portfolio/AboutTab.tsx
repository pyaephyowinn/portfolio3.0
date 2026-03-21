"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/warcraftcn/card";

const stats = [
  { label: "Years of Experience", value: "3+" },
  { label: "Companies Served", value: "4" },
  { label: "Technologies", value: "20+" },
  { label: "First Class Honours", value: "BSc" },
];

const experience = [
  {
    role: "Full Stack Developer",
    company: "First To Fly",
    location: "Singapore (Remote)",
    period: "Apr 2025 \u2013 Present",
    highlights: [
      "Building AI-powered internal and customer-facing apps with LLM workflows",
      "Deploying Next.js services with CI/CD via GitHub Actions and Jenkins",
      "Managing AWS infrastructure (EC2, Lambda, ECR)",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "AYA Bank",
    location: "Yangon, Myanmar",
    period: "Jul 2024 \u2013 Sep 2025",
    highlights: [
      "Developed admin portals and mini-apps for AYA Pay (BNPL, Credit Card features)",
      "Key frontend engineer for AYA iBanking portal with auth flows",
      "Met banking-grade performance and compliance standards",
    ],
  },
  {
    role: "Front End Software Engineer",
    company: "KBZ Bank",
    location: "Yangon, Myanmar",
    period: "Oct 2023 \u2013 May 2024",
    highlights: [
      "Built internal enterprise apps using React and NestJS",
      "Deployed cloud-native services on AWS (S3, Lambda, CloudFront, AppSync)",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Myanmar High Society (Shopdoora)",
    location: "Yangon, Myanmar",
    period: "Sep 2022 \u2013 Oct 2023",
    highlights: [
      "Built eCommerce websites using React & MUI",
      "Optimized performance with Lighthouse and PageSpeed Insights",
    ],
  },
];

export default function AboutTab() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
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
            transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
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
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h3 className="text-xl text-amber-400 fantasy mb-3">Quest Log</h3>
        <div className="space-y-3">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
            >
              <Card>
                <CardContent className="pt-8 pb-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                    <div>
                      <span className="text-amber-400 font-bold">{exp.role}</span>
                      <span className="text-amber-100/50"> @ {exp.company}</span>
                    </div>
                    <span className="text-amber-100/40 text-xs">{exp.period}</span>
                  </div>
                  <p className="text-amber-100/40 text-xs mb-2">{exp.location}</p>
                  <ul className="space-y-1">
                    {exp.highlights.map((h) => (
                      <li key={h} className="text-amber-100/70 text-sm flex gap-2">
                        <span className="text-amber-400/60 shrink-0">&bull;</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
