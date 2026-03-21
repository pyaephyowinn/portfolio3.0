"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Howl } from "howler";

type Faction = "undead" | "human" | "orc" | "elf";

interface AudioContextValue {
  isMuted: boolean;
  volume: number;
  isAudioUnlocked: boolean;
  toggleMute: () => void;
  setVolume: (v: number) => void;
  unlockAudio: () => void;
  setActiveMusic: (faction: Faction) => void;
}

const AudioContext = createContext<AudioContextValue>({
  isMuted: false,
  volume: 0.5,
  isAudioUnlocked: false,
  toggleMute: () => {},
  setVolume: () => {},
  unlockAudio: () => {},
  setActiveMusic: () => {},
});

export function useAudio() {
  return useContext(AudioContext);
}

const MUSIC_TRACKS: Record<Faction, string> = {
  undead: "/sounds/music/ambient-dark.mp3",
  human: "/sounds/music/ambient-noble.mp3",
  orc: "/sounds/music/ambient-war.mp3",
  elf: "/sounds/music/ambient-mystical.mp3",
};

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolumeState] = useState(0.3);
  const [isAudioUnlocked, setIsAudioUnlocked] = useState(false);
  const activeFactionRef = useRef<Faction>("undead");
  const tracksRef = useRef<Record<string, Howl>>({});
  const currentTrackRef = useRef<string | null>(null);

  // Use refs to avoid stale closures
  const isMutedRef = useRef(isMuted);
  const volumeRef = useRef(volume);
  const isUnlockedRef = useRef(isAudioUnlocked);

  useEffect(() => { isMutedRef.current = isMuted; }, [isMuted]);
  useEffect(() => { volumeRef.current = volume; }, [volume]);
  useEffect(() => { isUnlockedRef.current = isAudioUnlocked; }, [isAudioUnlocked]);

  // Load persisted preferences
  useEffect(() => {
    const savedMuted = localStorage.getItem("portfolio-muted");
    const savedVolume = localStorage.getItem("portfolio-volume");
    if (savedMuted !== null) {
      const m = savedMuted === "true";
      setIsMuted(m);
      isMutedRef.current = m;
    }
    if (savedVolume !== null) {
      const v = parseFloat(savedVolume);
      setVolumeState(v);
      volumeRef.current = v;
    }
  }, []);

  // Get or create a Howl instance for a track
  const getTrack = useCallback((faction: Faction) => {
    const src = MUSIC_TRACKS[faction];
    if (!tracksRef.current[src]) {
      tracksRef.current[src] = new Howl({
        src: [src],
        loop: true,
        volume: 0,
        preload: true,
        onplayerror: (_id: number) => {
          const howl = tracksRef.current[src];
          if (howl) {
            howl.once("unlock", () => {
              howl.play();
            });
          }
        },
      });
    }
    return tracksRef.current[src];
  }, []);

  // Crossfade to a new faction track
  const crossfadeTo = useCallback(
    (faction: Faction, targetVolume: number) => {
      const newSrc = MUSIC_TRACKS[faction];
      if (currentTrackRef.current === newSrc) return;

      // Fade out current
      if (currentTrackRef.current) {
        const oldTrack = tracksRef.current[currentTrackRef.current];
        if (oldTrack) {
          oldTrack.fade(oldTrack.volume(), 0, 500);
          const oldSrc = currentTrackRef.current;
          setTimeout(() => {
            tracksRef.current[oldSrc]?.pause();
          }, 500);
        }
      }

      // Fade in new
      const newTrack = getTrack(faction);
      newTrack.volume(0);
      newTrack.play();
      newTrack.fade(0, targetVolume, 500);
      currentTrackRef.current = newSrc;
    },
    [getTrack]
  );

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => {
      const next = !prev;
      isMutedRef.current = next;
      localStorage.setItem("portfolio-muted", String(next));

      if (currentTrackRef.current && tracksRef.current[currentTrackRef.current]) {
        const track = tracksRef.current[currentTrackRef.current];
        if (next) {
          track.fade(track.volume(), 0, 200);
        } else {
          const vol = volumeRef.current;
          track.fade(0, vol, 200);
        }
      }
      return next;
    });
  }, []);

  const setVolume = useCallback((v: number) => {
    setVolumeState(v);
    volumeRef.current = v;
    localStorage.setItem("portfolio-volume", String(v));
    if (currentTrackRef.current && tracksRef.current[currentTrackRef.current]) {
      tracksRef.current[currentTrackRef.current].volume(v);
    }
  }, []);

  const unlockAudio = useCallback(() => {
    setIsAudioUnlocked(true);
    isUnlockedRef.current = true;
    const faction = activeFactionRef.current;
    const vol = isMutedRef.current ? 0 : volumeRef.current;
    crossfadeTo(faction, vol);
  }, [crossfadeTo]);

  const setActiveMusic = useCallback(
    (faction: Faction) => {
      activeFactionRef.current = faction;
      if (!isUnlockedRef.current) return;
      const vol = isMutedRef.current ? 0 : volumeRef.current;
      crossfadeTo(faction, vol);
    },
    [crossfadeTo]
  );

  // Auto-unlock audio on first user interaction if splash was skipped
  useEffect(() => {
    if (isAudioUnlocked) return;

    const handleFirstInteraction = () => {
      if (!isUnlockedRef.current) {
        setIsAudioUnlocked(true);
        isUnlockedRef.current = true;
        const faction = activeFactionRef.current;
        const vol = isMutedRef.current ? 0 : volumeRef.current;
        crossfadeTo(faction, vol);
      }
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("keydown", handleFirstInteraction);
    };

    document.addEventListener("click", handleFirstInteraction);
    document.addEventListener("keydown", handleFirstInteraction);

    return () => {
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("keydown", handleFirstInteraction);
    };
  }, [isAudioUnlocked, crossfadeTo]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      Object.values(tracksRef.current).forEach((howl) => {
        howl.unload();
      });
    };
  }, []);

  return (
    <AudioContext.Provider
      value={{
        isMuted,
        volume,
        isAudioUnlocked,
        toggleMute,
        setVolume,
        unlockAudio,
        setActiveMusic,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}
