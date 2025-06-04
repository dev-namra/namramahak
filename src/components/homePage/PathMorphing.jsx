"use client";

import { interpolate } from "flubber";
import {
  animate,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";

/**
 * ==============   Shape data (Portfolio Edition)   ================
 */

// Code brackets
const codeBrackets =
  "M7 6l-4 6 4 6M17 6l4 6-4 6M11 4l2 16";

// Browser window
const browser =
  "M2 4h20v16H2V4zm0-2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm2 4h16v2H4V6z";

// Toggle switch
const toggleSwitch =
  "M6 12a6 6 0 1 0 12 0 6 6 0 1 0-12 0zm6-4a4 4 0 1 1 0 8 4 4 0 0 1 0-8z";

// Star
const star =
  "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z";

// Heart
const heart =
  "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z";

// Modern blob (generated with blobmaker.app)
const blob =
  "M17.6,3.3Q19.65,6.6,19.7,10.8Q19.75,15,16.5,17.65Q13.25,20.3,9.2,18.8Q5.15,17.3,4.3,12.65Q3.45,8,7.15,5.1Q10.85,2.2,17.6,3.3Z";

// Rocket (symbolizes innovation/launch)
const rocket =
  "M12 2C8.13 2 5 5.13 5 9c0 3.87 4.13 8.74 6.39 11.37a1 1 0 0 0 1.22 0C14.87 17.74 19 12.87 19 9c0-3.87-3.13-7-7-7zm0 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6z";

// Your initials (replace with your own, here "JS" as example, stylized path)
const initials =
  "M4 17v-2h4v-2H6v-2h2v-2H4V7h6v10H4zm10-10h2v10h-2V7zm4 0h2v10h-2V7z";

const paths = [
  codeBrackets,
  browser,
  toggleSwitch,
  star,
  heart,
  blob,
  rocket,
  initials,
  codeBrackets, // Loop back to start
];

const colors = [
  "#ffb400", // Code brackets - orange
  "#1e90ff", // Browser - blue
  "#34c759", // Toggle - green
  "#ffd700", // Star - gold
  "#ff3b30", // Heart - red
  "#9b59b6", // Blob - purple
  "#00bcd4", // Rocket - teal
  "#222",    // Initials - dark
  "#ffb400", // Loop
];

/**
 * ==============   Utils   ================
 */
const getIndex = (_, index) => index;

function useFlubber(progress, paths) {
  return useTransform(
    progress,
    paths.map(getIndex),
    paths,
    {
      mixer: (a, b) => interpolate(a, b, { maxSegmentLength: 0.1 }),
    }
  );
}

/**
 * ==============   Main Component   ================
 */

export default function PathMorphing() {
  const [pathIndex, setPathIndex] = useState(0);
  const progress = useMotionValue(0);

  const fill = useTransform(progress, paths.map(getIndex), colors);
  const path = useFlubber(progress, paths);

  useEffect(() => {
    const animation = animate(progress, pathIndex, {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
      onComplete: () => {
        if (pathIndex === paths.length - 1) {
          progress.set(0);
          setPathIndex(1);
        } else {
          setPathIndex(pathIndex + 1);
        }
      },
    });
    return () => animation.stop();
  }, [pathIndex, progress]);

  return (
    <svg width="400" height="400" viewBox="0 0 24 24">
      <g>
        <motion.path fill={fill} d={path} />
      </g>
    </svg>
  );
}
