import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";
import { FaSteam } from "react-icons/fa";
import { SiPlaystation, SiXbox, SiEpicgames } from "react-icons/si";
import { useEffect, useRef, useState } from "react";

import Button from "./Button";
import VideoPreview from "./VideoPreview";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);

  const [loading, setLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4;
  const nextVdRef = useRef(null);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  useEffect(() => {
    if (loadedVideos === totalVideos - 1) {
      setLoading(false);
    }
  }, [loadedVideos]);

  const handleMiniVdClick = () => {
    setHasClicked(true);

    setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
  };

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVdRef.current.play(),
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    {
      dependencies: [currentIndex],
      revertOnUpdate: true,
    }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

  return (
    <div id="home" className="relative h-dvh w-screen overflow-x-hidden">
      {loading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          {/* https://uiverse.io/G4b413l/tidy-walrus-92 */}
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}

      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <VideoPreview>
              <div
                onClick={handleMiniVdClick}
                className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
              >
                <video
                  ref={nextVdRef}
                  src={getVideoSrc((currentIndex % totalVideos) + 1)}
                  loop
                  muted
                  id="current-video"
                  className="size-64 origin-center scale-150 object-cover object-center"
                  onLoadedData={handleVideoLoad}
                />
              </div>
            </VideoPreview>
          </div>

          <video
            ref={nextVdRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
          <video
            src={getVideoSrc(
              currentIndex === totalVideos - 1 ? 1 : currentIndex
            )}
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
        </div>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="flex min-h-dvh w-full flex-col items-center justify-center text-center px-5 sm:px-10 -mt-6 md:-mt-10">
            <div className="inline-block mb-6">
              <img
                src="/img/marvel.png"
                alt="Marvel Rivals Logo"
                className="object-contain h-auto w-[80vw] sm:w-[60vw] md:w-[45vw] lg:w-[40vw] max-w-[900px]"
                sizes="(min-width:1024px) 40vw, (min-width:768px) 45vw, (min-width:640px) 60vw, 80vw"
              />
            </div>

            <p className="mt-2 font-circular-web font-extrabold text-lg md:text-2xl lg:text-3xl uppercase tracking-wider text-blue-100">
              The Super Hero Team-Based PvP Shooter
            </p>
            <p className="mb-8 mt-2 max-w-none font-robert-medium font-extrabold text-yellow-300 uppercase tracking-wider text-2xl md:text-4xl lg:text-5xl">
              All Heroes Are Free To Play!
            </p>

            <a href="#features">
              <Button
                id="watch-trailer"
                title="Play Now"
                containerClass="bg-yellow-300 flex-center gap-2 px-10 md:px-12 py-4 md:py-5 w-[18rem] md:w-[22rem] mt-8 md:mt-10"
                textClass="text-base md:text-2xl"
              />
            </a>

            <div className="mt-14 md:mt-16 flex items-center justify-center gap-10 text-white/80 text-3xl md:text-4xl">
              <FaSteam />
              <SiPlaystation />
              <SiXbox />
              <SiEpicgames />
            </div>
          </div>
        </div>
      </div>

      {/* Removed bottom-right text to keep only the Marvel Rivals logo */}
    </div>
  );
};

export default Hero;
