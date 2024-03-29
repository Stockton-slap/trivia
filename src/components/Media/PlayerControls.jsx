import { useEffect, useMemo, useRef, useState } from "react";

import { CiPlay1, CiPause1 } from "react-icons/ci";
import { VscMute, VscUnmute } from "react-icons/vsc";
import { ImLoop } from "react-icons/im";
import Durations from "./Durations";
import Button from "../common/Button";

export default function PlayerControls({
  playerRef,
  loop,
  playing,
  volume,
  muted,
  progress,
  duration,
  handlePlay,
  toggleLoop,
  handlePause,
  handleVolumeChange,
  toggleMute,
}) {
  const [played, setPlayed] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const playPauseButtonRef = useRef(null);

  useEffect(() => {
    playPauseButtonRef.current?.focus();
  }, []);

  const togglePlayAndPause = () => {
    if (playing) {
      handlePause();
    } else {
      handlePlay();
    }
  };

  const handleSeekMouseDown = (e) => {
    setSeeking(true);
  };

  const handleSeekChange = (e) => {
    setPlayed(parseFloat(e.target.value));
  };

  const handleSeekMouseUp = (e) => {
    playerRef.current?.seekTo(parseFloat(e.target.value));
    setSeeking(false);
  };

  const handleChangeInVolume = (e) => {
    handleVolumeChange(Number(e.target.value));
  };

  useMemo(() => {
    setPlayed((prevPlayed) => {
      if (!seeking && prevPlayed !== progress) {
        return progress;
      }
      return prevPlayed;
    });
  }, [progress, seeking]);

  return (
    <div className="bg-gray-50  rounded-b-xl py-10">
      <div className="mb-8 flex gap-x-10 px-10">
        <div className="text-xs text-gray-600">
          <Durations seconds={duration * played} />
        </div>

        <div className="flex-1 mx-auto">
          <input
            type="range"
            min={0}
            max={0.999999}
            step="any"
            value={played}
            onMouseDown={handleSeekMouseDown}
            onChange={handleSeekChange}
            onMouseUp={handleSeekMouseUp}
            className="w-full h-4 rounded-lg appearance-none  bg-slate-400 accent-gray-900 focus:outline focus:outline-cyan-500 "
          />
        </div>

        <div className="text-xs text-gray-600 flex">
          -<Durations seconds={duration * (1 - played)} />
        </div>
      </div>

      <div className="grid grid-cols-3 items-center ">
        <div className="flex justify-center">
          <Button
            handleClick={toggleLoop}
            className={`focus:outline focus:outline-cyan-500 font-bold hover:bg-gray-200 ${
              loop && "text-cyan-500"
            }`}
            text={<ImLoop />}
            type="button"
          />
        </div>

        <div className="flex justify-center">
          <Button
            handleClick={togglePlayAndPause}
            className="focus:outline focus:outline-cyan-500 border border-cyan-500 rounded-md p-4 hover:bg-gray-200"
            text={playing ? <CiPause1 /> : <CiPlay1 />}
            type="button"
            ref={playPauseButtonRef}
          />
        </div>

        <div className="flex justify-center items-center gap-1">
          <Button
            handleClick={toggleMute}
            className="focus:outline focus:outline-cyan-500"
            text={muted ? <VscMute /> : <VscUnmute />}
            type="button"
          />

          <input
            type="range"
            className="focus:outline focus:outline-cyan-500 w-[50%] h-2 rounded-lg  bg-slate-400 accent-gray-900"
            min={0}
            max={1}
            step={0.1}
            value={volume}
            onChange={handleChangeInVolume}
          />
        </div>
      </div>
    </div>
  );
}
