import React, { useCallback, useEffect, useState } from "react";
import * as c from "classnames";

import { PlayIcon, PauseIcon } from "./Icons";

/**
 * Radio.Co custom audio player set up details:
 * https://radio.co/radio-university/diy-player-kit
 */

const radioPlayerStreamUrl = "https://s3.radio.co/s0a9415f80/listen";

export function AudioPlayer() {
  const [player, setPlayer] = useState({
    hasLoaded: () => false,
    isPlaying: () => false,
    playToggle: () => {},
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  const radioCoRef = useCallback((node) => {
    if (node && typeof window.$ === "function" && !player.hasLoaded()) {
      const initialisedPlayer = window.$(".radioplayer").radiocoPlayer();
      initialisedPlayer.event("audioPlay", () => {
        setIsPlaying(true);
      });
      initialisedPlayer.event("audioPause", () => {
        setIsPlaying(false);
      });
      initialisedPlayer.event("invalidStream", () => {
        setIsPlaying(false);
      });
      initialisedPlayer.event("streamInfoError", () => {
        setIsPlaying(false);
      });

      setPlayer(initialisedPlayer);
      setHasLoaded(true);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsPlaying(player.isPlaying());
    }, 1000);

    return () => clearInterval(interval);
  }, [player]);

  return (
    <div className={c("flex", "justify-center", "w-full")}>
      <button
        className={c(
          "audio-player-button",
          "flex",
          "justify-center",
          "w-12",
          "h-12",
          "text-2xl",
          "rounded-full",
          "flex",
          "justify-center",
          "items-center",
          "bg-white",
          "border",
          "border-solid",
          "border-white",
          "p-0",
          "relative",
          "z-50",
          "cursor-pointer",
          "hover:bg-brand-primary",
          "disabled:cursor-not-allowed",
          "md:w-16",
          "md:h-16",
          "md:text-3xl",
          "md:mr-4",
          { "p-0": isPlaying, "pl-1": !isPlaying }
        )}
        onClick={() => player.playToggle()}
        disabled={!hasLoaded}
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>
      <div
        className={c(
          "audio-player-now-playing",
          "hidden",
          "bg-brand-dark60",
          "text-white",
          "md:flex",
          "flex-col",
          "justify-center",
          "px-4",
          "rounded-lg"
        )}
      >
        <div className={c("whitespace-no-wrap", "font-bold", "uppercase")}>
          Now playing{" "}
        </div>
        <div
          ref={radioCoRef}
          className="radioplayer"
          data-src={radioPlayerStreamUrl}
          data-autoplay="false"
          data-playbutton="false"
          data-volumeslider="false"
          data-elapsedtime="false"
          data-nowplaying="true"
          data-showplayer="false"
          data-showartwork="false"
          data-volume="50"
          // Adding styles directly because it looks like class names are removed when player is initialised
          style={{ overflow: "hidden" }}
        />
      </div>
    </div>
  );
}
