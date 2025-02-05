"use client";

import React, { useEffect, useRef, useState } from "react";
import s from "./Video.module.scss";
import classNames from "classnames/bind";
import { useInView } from "react-intersection-observer";

const c = classNames.bind(s);

type Props = {
  src: string;
  width?: number;
  height?: number;
  autoplay?: boolean;
  loop?: boolean;
  poster?: string;
  muted?: boolean;
};

export const Video = ({
  src,
  autoplay,
  poster,
  width,
  height,
  loop,
  muted = true,
}: Props) => {
  const { ref, inView } = useInView();
  const [paused, setPaused] = useState(!autoplay);
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const videoRef = useRef<HTMLVideoElement>(null);

  const pause = () => {
    if (!videoRef.current) {
      return;
    }
    setPaused(true);
    setIsPlaying(false);
    videoRef.current.pause();
  };

  const play = () => {
    if (!videoRef.current) {
      return;
    }
    setPaused(false);
    setIsPlaying(true);
    videoRef.current?.play();
  };

  const handleClick = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  const handleMouseEnter = () => {
    play();
  };

  const handleMouseLeave = () => {
    pause();
  };

  const handleEnded = () => {
    if (!loop) {
      pause();
    }
  };

  useEffect(() => {
    if (isPlaying && !inView) {
      pause();
    }
  }, [inView, isPlaying]);

  if (!src) {
    return null;
  }

  return (
    <div className={c(s.video, { isPlaying, paused, inView })} ref={ref}>
      <video
        src={src}
        autoPlay={autoplay}
        onPause={() => setPaused(true)}
        onPlaying={() => {
          setPaused(false);
          setIsPlaying(true);
        }}
        onEnded={handleEnded}
        poster={poster ?? undefined}
        width={width}
        height={height}
        muted={muted}
        ref={videoRef}
      />
      <div
        className={s.video__buttonContainer}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button
          className={s.video__button}
          type="button"
          tabIndex={0}
          aria-label="Play video"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="100px"
            width="100px"
            viewBox="0 0 100 100"
            className={s.video__buttonSvg}
          >
            <path
              className={s.video__buttonStroke}
              stroke="var(--color-background, var(--color-font-contrast))"
              fill="none"
              d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7
    C97.3,23.7,75.7,2.3,49.9,2.5"
            />
            <path
              className={s.video__buttonPlay}
              fill="var(--color-background, var(--color-font-contrast))"
              d="M38,69c-1,0.5-1.8,0-1.8-1.1V32.1c0-1.1,0.8-1.6,1.8-1.1l34,18c1,0.5,1,1.4,0,1.9L38,69z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
