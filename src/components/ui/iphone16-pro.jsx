import React, { useEffect, useRef, useState, forwardRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Iphone16Pro = forwardRef(
  (
    {
      width = 433,
      height = 882,
      src,
      videoSrc,
      showIsland = true,
      islandWidth = 125,
      islandHeight = 40,
      screenRadius = 55,
      shadow = true,
      rounded = true,
      contentClassName,
      contentStyle,
      showCamera = true,
      ...props
    },
    ref
  ) => {
    return (
      <svg
        ref={ref}
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={shadow ? "drop-shadow-2xl" : ""}
        {...props}
      >
        {/* Outer frame */}
        <rect
          x="2"
          y="2"
          width={width - 4}
          height={height - 4}
          rx={rounded ? 75 : 0}
          fill="black"
          stroke="black"
          strokeWidth="2"
        />

        {/* Inner bezel */}
        <rect
          x="20"
          y="20"
          width={width - 40}
          height={height - 40}
          rx={rounded ? 56 : 0}
          fill="black"
          stroke="black"
        />

        {/* Screen area */}
        <clipPath id="screen">
          <rect
            x="21"
            y="21"
            width={width - 42}
            height={height - 42}
            rx={screenRadius}
            ry={screenRadius}
          />
        </clipPath>

        {/* Screen background */}
        <rect
          x="21"
          y="21"
          width={width - 42}
          height={height - 42}
          rx={screenRadius}
          ry={screenRadius}
          fill="white"
          clipPath="url(#screen)"
        />

        {src && (
          <image
            href={src}
            x="21"
            y="21"
            width={width - 42}
            height={height - 42}
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#screen)"
            className={contentClassName}
            style={contentStyle}
          />
        )}

        {videoSrc && (
          <foreignObject
            x="21"
            y="21"
            width={width - 42}
            height={height - 42}
            clipPath="url(#screen)"
          >
            <video
              className={`w-full h-full object-cover rounded-[${screenRadius}px] ${contentClassName}`}
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              style={contentStyle}
            />
          </foreignObject>
        )}

        {/* Dynamic island */}
        {showIsland && (
          <rect
            x={width / 2 - islandWidth / 2}
            y="28"
            width={islandWidth}
            height={islandHeight}
            rx={20}
            fill="black"
          />
        )}

        {/* Camera dot */}
        {showCamera && (
          <circle
            cx={width / 2 + islandWidth / 4}
            cy="48"
            r="6"
            fill="black"
          />
        )}
      </svg>
    );
  }
);

Iphone16Pro.displayName = "Iphone16Pro";

export const IphoneScroll = ({
  src,
  videoSrc,
  showGradient,
  title,
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window && window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  // Animation values - iPhone đứng im
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0.6, isMobile ? 0.8 : 1.0]
  );
  const translateY = useTransform(scrollYProgress, [0, 1], [0, 0]); // iPhone không di chuyển
  const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [0, 0, 0]); // iPhone không xoay
  const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Animation cho màn hình - theo kịp cuộn
  const screenScale = useTransform(
    scrollYProgress,
    [0, 0.15],
    [1, isMobile ? 1.1 : 1.2] // Phóng to sớm hơn
  );
  const screenTranslateY = useTransform(
    scrollYProgress,
    [0, 0.6],
    [0, 1200] // Di chuyển nhanh hơn, theo kịp cuộn
  );

  return (
    <div
      ref={ref}
      className="flex min-h-[120vh] shrink-0 scale-30 transform flex-col items-center justify-start py-0 [perspective:1000px] md:scale-40 lg:scale-50 md:py-10"
    >
      <motion.h2
        style={{
          translateY: textTransform,
          opacity: textOpacity,
        }}
        className="mb-20 text-center text-3xl font-bold text-neutral-800 dark:text-white"
      >
        {title}
      </motion.h2>

      {/* iPhone Container */}
      <div className="relative [perspective:1000px]">
        {/* iPhone Frame - đứng im */}
        <div className="relative">
          <Iphone16Pro
            width={433}
            height={882}
            src=""
            showIsland={true}
            shadow={true}
            rounded={true}
          />

          {/* Animated Screen Content */}
          <motion.div
            style={{
              scale: screenScale,
              translateY: screenTranslateY,
              transformStyle: "preserve-3d",
              zIndex: 9999,
            }}
            className="absolute top-[21px] left-[21px] w-[391px] h-[840px] rounded-[55px] overflow-hidden"
          >
            {src && (
              <img
                src={src}
                alt="screen content"
                className="w-full h-full object-cover relative z-20"
                style={{ zIndex: 10000 }}
              />
            )}
            {videoSrc && (
              <video
                className="w-full h-full object-cover relative z-20"
                style={{ zIndex: 10000 }}
                src={videoSrc}
                autoPlay
                loop
                muted
                playsInline
              />
            )}
          </motion.div>
        </div>
      </div>

    </div>
  );
};