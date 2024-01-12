import Play from "@/utils/icons/Play.tsx";
import React, { createRef } from "react";

const Image = () => {
  const video: React.RefObject<HTMLVideoElement> = createRef();
  const HandelPlay = () => {
    const element = video.current;
    if (!element) return;
    element.play();
    element.requestFullscreen();
  };
  return (
    <div className={"flex w-1/2 items-center justify-around "}>
      <div
        className={
          "relative  flex h-[405px] w-[540px] items-center justify-center border-2 border-gray-500"
        }
      >
        <video
          ref={video}
          src="https://preview.cruip.com/tidy/videos/video.mp4"
          poster={"https://preview.cruip.com/tidy/images/hero-image-01.jpg"}
          className={"absolute -left-4 -top-4"}
        ></video>
        <button
          onClick={HandelPlay}
          className={
            "z-20 flex h-24 w-24  cursor-pointer items-center justify-center rounded-full bg-white-custom hover:bg-white"
          }
        >
          <Play />
        </button>
      </div>
    </div>
  );
};
export default Image;
