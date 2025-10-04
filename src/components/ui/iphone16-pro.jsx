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
            x="1"
            y="1"
            width={width - 2}
            height={height - 2}
            rx={rounded ? 75 : 0}
            fill="black"
            stroke="black"
            strokeWidth="0"
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
            strokeWidth="0"
          />

        {/* Screen area */}
        <clipPath id="screen">
          <rect
            x="20"
            y="20"
            width={width - 40}
            height={height - 40}
            rx={screenRadius}
            ry={screenRadius}
          />
        </clipPath>

        {/* Screen background */}
        <rect
          x="20"
          y="20"
          width={width - 40}
          height={height - 40}
          rx={screenRadius}
          ry={screenRadius}
          fill="white"
          clipPath="url(#screen)"
        />

        {src && (
          <image
            href={src}
            x="20"
            y="20"
            width={width - 40}
            height={height - 40}
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#screen)"
            className={contentClassName}
            style={contentStyle}
          />
        )}

        {videoSrc && (
          <foreignObject
            x="20"
            y="20"
            width={width - 40}
            height={height - 40}
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
    [0.15, isMobile ? 0.3 : 0.5]
  );
  const translateY = useTransform(scrollYProgress, [0, 1], [0, 0]); // iPhone không di chuyển
  const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [0, 0, 0]); // iPhone không xoay
  const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Animation cho màn hình - ảnh tĩnh
  const screenScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1] // Ảnh không thay đổi kích thước
  );
  const screenTranslateY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 0] // Bỏ animation - ảnh không di chuyển ra khỏi iPhone
  );

  return (
      <div
        ref={ref}
        className="flex min-h-[80vh] shrink-0 scale-2 transform flex-col items-center justify-center py-0 [perspective:1000px] sm:scale-3 md:scale-12 lg:scale-15 xl:scale-18 md:py-3 overflow-x-hidden w-full bg-transparent"
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
      <div className="relative [perspective:1000px] overflow-x-hidden w-full flex justify-center bg-transparent">
        {/* iPhone Frame - đứng im */}
        <div className="relative bg-transparent">
          <Iphone16Pro
            width={isMobile ? 280 : 433}
            height={isMobile ? 600 : 882}
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
            className={`absolute top-[20px] left-[20px] ${isMobile ? 'w-[240px] h-[560px]' : 'w-[393px] h-[842px]'} rounded-[55px] overflow-hidden`}
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