import React from "react"

export const AudioPlayer = () => (
  <audio
    className="live-player"
    controls
    src="http://icecast.reformradio.space:8000/high.mp3"
    id="liveAudio"
    autoplay
    preload="auto"
  />
)
