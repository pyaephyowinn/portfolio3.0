"use client";

import { useAudio } from "./AudioProvider";

export default function AudioControls() {
  const { isMuted, toggleMute, isAudioUnlocked } = useAudio();

  if (!isAudioUnlocked) return null;

  return (
    <button
      onClick={toggleMute}
      className="fantasy flex items-center justify-center w-8 h-8 rounded transition-all duration-200 text-amber-100/60 hover:text-amber-400 hover:bg-amber-900/20"
      title={isMuted ? "Unmute" : "Mute"}
    >
      {isMuted ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M11 5 6 9H2v6h4l5 4zM22 9l-6 6M16 9l6 6" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M11 5 6 9H2v6h4l5 4z" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
        </svg>
      )}
    </button>
  );
}
