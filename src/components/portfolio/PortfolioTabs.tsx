"use client";

import { useState, useEffect, useCallback } from "react";
import { Cursor } from "@/components/ui/warcraftcn/cursor";
import BackgroundAtmosphere from "@/components/layout/BackgroundAtmosphere";
import TabTransition from "@/components/layout/TabTransition";
import HeroTab from "./HeroTab";
import AboutTab from "./AboutTab";
import ProjectsTab from "./ProjectsTab";
import SkillsTab from "./SkillsTab";
import ContactTab from "./ContactTab";

const TABS = [
  { id: "hero", label: "Home", faction: "undead" as const },
  { id: "about", label: "About", faction: "human" as const },
  { id: "projects", label: "Projects", faction: "orc" as const },
  { id: "skills", label: "Skills", faction: "elf" as const },
  { id: "contact", label: "Contact", faction: "undead" as const },
];

export default function PortfolioTabs() {
  const [activeTab, setActiveTab] = useState("hero");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && TABS.some((t) => t.id === hash)) {
      setActiveTab(hash);
    }
  }, []);

  const switchTab = useCallback((tabId: string) => {
    setActiveTab(tabId);
    window.history.pushState(null, "", `#${tabId}`);
  }, []);

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && TABS.some((t) => t.id === hash)) {
        setActiveTab(hash);
      }
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const activeFaction = TABS.find((t) => t.id === activeTab)?.faction || "default";

  return (
    <Cursor faction={activeFaction}>
      <BackgroundAtmosphere activeTab={activeTab} />

      <div className="min-h-screen flex flex-col">
        {/* Navigation Bar */}
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-amber-900/30">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-center gap-1 md:gap-2 py-2">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => switchTab(tab.id)}
                  className={`
                    fantasy relative px-3 py-2 md:px-5 md:py-3 text-xs md:text-sm font-medium
                    transition-all duration-300 rounded
                    ${
                      activeTab === tab.id
                        ? "text-amber-400 bg-amber-900/20 shadow-[0_0_15px_hsl(45_100%_50%/0.15)]"
                        : "text-amber-100/50 hover:text-amber-100/80 hover:bg-amber-900/10"
                    }
                  `}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-amber-400 rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Tab Content */}
        <main className="flex-1">
          <TabTransition activeKey={activeTab}>
            {activeTab === "hero" && <HeroTab onNavigate={switchTab} />}
            {activeTab === "about" && <AboutTab />}
            {activeTab === "projects" && <ProjectsTab />}
            {activeTab === "skills" && <SkillsTab />}
            {activeTab === "contact" && <ContactTab />}
          </TabTransition>
        </main>

        {/* Footer */}
        <footer className="text-center py-4 text-amber-100/30 text-xs fantasy border-t border-amber-900/20">
          <p>&copy; 2026 Your Name. Forged with honor.</p>
        </footer>
      </div>
    </Cursor>
  );
}
