import React, { useEffect, useState } from "react"
import * as c from "classnames"

import { PlayIcon, PauseIcon } from "./Icons"

const liveAudioSource = "https://icecasting.reformradio.space/high.mp3"

export function AudioPlayer() {
  const [audio, setAudio] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const audio = new Audio(liveAudioSource)
    audio.addEventListener("play", () => setIsPlaying(true))
    audio.addEventListener("pause", () => setIsPlaying(false))
    audio.addEventListener("error", () => setIsPlaying(false))
    audio.preload = "auto"
    setAudio(audio)

    return () => audio.src = ""
  }, [])

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
  }

  const isAudioAvailable = () => {
    if (audio && audio.src) {
      return true
    }
    return false
  }

  return (
    <button
      className={c('audio-player-button', { paused: !isPlaying })}
      onClick={() => togglePlay()}
      disabled={!isAudioAvailable()}
    >
      {isPlaying ? <PauseIcon /> : <PlayIcon />}
    </button>
  )
}
