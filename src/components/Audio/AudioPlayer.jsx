import React, { useState } from "react";
import ReactPlayer from "react-player";
import { useRef } from "react";
import PlayerControls from "./PlayerControls";
import AudioDetails from "./AudioDetails";

export default function AudioPlayer({ url, coverDefaultImage, songName }) {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [progress, setProgress] = useState(0);
  const [loop, setLoop] = useState(false);
  const [duration, setDuration] = useState(0);

  const playerRef = useRef(null);

  const handlePlay = () => {
    setPlaying(true);
  };

  const handlePause = () => {
    setPlaying(false);
  };

  const handleVolumeChange = (newVolume) => {
    setVolume(newVolume);
  };

  const toggleMute = () => {
    setMuted((prevMuted) => !prevMuted);
  };

  const handleProgress = (state) => {
    setProgress(state.played);
  };

  const handleDuration = (duration) => {
    setDuration(duration);
  };

  const toggleLoop = () => {
    setLoop((prevLoop) => !prevLoop);
  };
  console.log(playerRef);
  return (
    <div className="border-[1px] mt-[30px] rounded-[10px]">
      <ReactPlayer
        ref={playerRef}
        url={url}
        playing={playing}
        volume={volume}
        muted={muted}
        loop={loop}
        onPlay={handlePlay}
        onPause={handlePause}
        onProgress={handleProgress}
        onDuration={handleDuration}
        width={0}
        height={0}
      />
      <AudioDetails coverDefaultImage={coverDefaultImage} songName={songName} />
      <PlayerControls
        playerRef={playerRef}
        playing={playing}
        volume={volume}
        muted={muted}
        progress={progress}
        duration={duration}
        loop={loop}
        toggleMute={toggleMute}
        handlePlay={handlePlay}
        toggleLoop={toggleLoop}
        handlePause={handlePause}
        handleVolumeChange={handleVolumeChange}
      />
    </div>
  );
}
