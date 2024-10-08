import { usePlayerStore } from "@/store/playerStore";
import { useEffect, useRef, useState } from "react";
import { Slider } from "@/components/ui/slider";

export const Pause = ({ className }) => (
  <svg
    className={className}
    role="img"
    height="16"
    width="16"
    aria-hidden="true"
    viewBox="0 0 16 16"
  >
    <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
  </svg>
);

export const Play = ({ className }) => (
  <svg
    className={className}
    role="img"
    height="16"
    width="16"
    aria-hidden="true"
    viewBox="0 0 16 16"
  >
    <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
  </svg>
);

const CurrentSong = ({ image, title, artists }) => {
  return (
    <div className="flex items-center gap-5 relative overflow-hidden">
      <picture className="w-16 h-16 bg-zinc-500 rounded-md shadow-lg overflow-hidden">
        <img src={image} alt={title} />
      </picture>

      <div>
        <h3 className="font-semibold text-sm block">{title}</h3>
        <span className="text-xs opacity-80">{artists?.join(", ")}</span>
      </div>
    </div>
  );
};

const SongControl = ({ audio }) => {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    audio.current.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audio.current.removeEventListener("timeupdate", handleTimeUpdate);
    };
  });

  const handleTimeUpdate = () => {
    setCurrentTime(audio.current.currentTime);
  };

  return (
    <div>
      <span>00:00</span>
      <Slider
        defaultValue={[currentTime]}
        max={audio?.current?.duration ?? 0}
        min={0}
        className="w-[500px] cursor-pointer slate-50"
        onValueChange={(value) => {
          audio.current.currentTime = value;
        }}
      />
      <span>00:00</span>
    </div>
  );
};

export const Player = () => {
  const { currentMusic, isPlaying, setIsPlaying } = usePlayerStore(
    (state) => state
  );
  const audioRef = useRef();
  const volumeRef = useRef(1);

  useEffect(() => {
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [isPlaying]);

  useEffect(() => {
    const { song, playlist, songs } = currentMusic;

    if (song) {
      // Reproducimos la música
      const src = `/music/${playlist?.id}/0${song.id}.mp3`;
      audioRef.current.src = src;
      audioRef.current.volume = volumeRef.current;
      audioRef.current.play();
    }
  }, [currentMusic]);

  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-row justify-between w-full px-4 z-50">
      <div>
        <CurrentSong {...currentMusic.song} />
      </div>

      <div className="grid place-content-center gap-4 flex-1">
        <div className="flex justify-center">
          <button className="bg-white rounded-full p-2" onClick={handleClick}>
            {isPlaying ? <Pause /> : <Play />}
          </button>
          <audio ref={audioRef}></audio>
        </div>
      </div>

      <div className="grid place-content-center">
        <Slider
          defaultValue={[100]}
          max={100}
          min={0}
          className="w-[95px] cursor-pointer slate-50"
          onValueChange={(value) => {
            const [newVolume] = value;
            const volumeValue = newVolume / 100;
            volumeRef.current = volumeValue;
            audioRef.current.volume = volumeValue;
          }}
        />
      </div>
    </div>
  );
};
