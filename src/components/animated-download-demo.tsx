import { useState } from "react";
import { motion } from "framer-motion";

import { AnimatedDownload } from "@/components/ui/animated-download";
import { Button } from "@/components/ui/button";

const buttonMotionVariants = {
  idle: { scale: 1 },
  hover: { scale: 1.02 },
  tap: { scale: 0.98 },
};

const textFade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.2 },
};

export function AnimatedDownloadDemo() {
  const [isDownloading, setIsDownloading] = useState(false);

  const startDownload = () => {
    setIsDownloading(true);
  };

  const handleAnimationComplete = () => {
    setIsDownloading(false);
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-6 bg-pure-black px-4">
      <Button asChild variant="outline" className="mb-2">
        <motion.button
          type="button"
          onClick={startDownload}
          disabled={isDownloading}
          variants={buttonMotionVariants}
          initial="idle"
          animate="idle"
          whileHover={!isDownloading ? "hover" : "idle"}
          whileTap={!isDownloading ? "tap" : "idle"}
        >
          <motion.span
            key={isDownloading ? "downloading" : "idle"}
            {...textFade}
          >
            {isDownloading ? "Downloading..." : "Start Download"}
          </motion.span>
        </motion.button>
      </Button>
      <AnimatedDownload
        width={480}
        className="h-auto max-w-full"
        isAnimating={isDownloading}
        onAnimationComplete={handleAnimationComplete}
      />
    </div>
  );
}

export default AnimatedDownloadDemo;
