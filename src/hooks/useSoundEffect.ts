"use client";

import useSound from "use-sound";
import { useAudio } from "@/components/layout/AudioProvider";

export function useSoundEffect(src: string) {
  const { isMuted, volume } = useAudio();
  return useSound(src, {
    volume: isMuted ? 0 : volume,
    interrupt: true,
  });
}
