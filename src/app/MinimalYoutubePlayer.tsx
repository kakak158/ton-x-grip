"use client";

import { useEffect, useRef, useState } from "react";

type YoutubePlayer = {
  playVideo: () => void;
  pauseVideo: () => void;
  seekTo: (seconds: number, allowSeekAhead: boolean) => void;
  getCurrentTime: () => number;
  getDuration: () => number;
};

type YoutubeApi = {
  Player: new (
    element: HTMLIFrameElement,
    options: {
      events: {
        onReady: () => void;
        onStateChange: (event: { data: number }) => void;
      };
    },
  ) => YoutubePlayer;
  PlayerState: { PLAYING: number };
};

declare global {
  interface Window {
    YT?: YoutubeApi;
    onYouTubeIframeAPIReady?: () => void;
  }
}

type MinimalYoutubePlayerProps = {
  youtubeUrl: string;
};

function getVideoId(youtubeUrl: string) {
  const url = new URL(youtubeUrl);
  return (
    url.searchParams.get("v") ?? url.pathname.split("/").filter(Boolean).pop()
  );
}

export default function MinimalYoutubePlayer({
  youtubeUrl,
}: MinimalYoutubePlayerProps) {
  const videoId = getVideoId(youtubeUrl);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<YoutubePlayer | null>(null);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const createPlayer = () => {
      if (!iframeRef.current || !window.YT || playerRef.current) return;

      playerRef.current = new window.YT.Player(iframeRef.current, {
        events: {
          onReady: () => setDuration(playerRef.current?.getDuration() ?? 0),
          onStateChange: (event) => {
            setIsPlaying(event.data === window.YT?.PlayerState.PLAYING);
          },
        },
      });
    };

    if (window.YT) {
      createPlayer();
    } else {
      window.onYouTubeIframeAPIReady = createPlayer;
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(script);
    }

    const interval = window.setInterval(() => {
      if (playerRef.current && isPlaying) {
        setCurrentTime(playerRef.current.getCurrentTime());
      }
    }, 250);

    return () => window.clearInterval(interval);
  }, [isPlaying]);

  const togglePlayback = () => {
    if (!playerRef.current) return;
    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  };

  const seek = (value: string) => {
    const nextTime = Number(value);
    setCurrentTime(nextTime);
    playerRef.current?.seekTo(nextTime, true);
  };

  return (
    <div className="w-full max-w-3xl overflow-hidden rounded-2xl bg-red-950">
      <div className="aspect-video">
        <iframe
          ref={iframeRef}
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${videoId}?controls=0&disablekb=1&fs=0&iv_load_policy=3&modestbranding=1&rel=0&enablejsapi=1&origin=${typeof window === "undefined" ? "" : window.location.origin}`}
          title="TonX grip socks video"
          allow="autoplay; encrypted-media; picture-in-picture"
        />
      </div>
      <div className="flex items-center gap-3 px-4 py-3">
        <button
          type="button"
          onClick={togglePlayback}
          className="text-orange-50"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? "||" : "▶"}
        </button>
        <input
          type="range"
          min="0"
          max={duration || 0}
          step="0.1"
          value={currentTime}
          onChange={(event) => seek(event.target.value)}
          className="h-1 flex-1 accent-orange-50"
          aria-label="Video progress"
        />
      </div>
    </div>
  );
}
