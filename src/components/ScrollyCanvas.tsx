"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);

  const totalFrames = 75; // Based on the actual number of files
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, totalFrames - 1]);

  // Base path for GitHub Pages (e.g. /portfolio) so sequence images load correctly
  const basePath = typeof process.env.NEXT_PUBLIC_BASE_PATH === "string"
    ? process.env.NEXT_PUBLIC_BASE_PATH
    : "";

  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      for (let i = 0; i < totalFrames; i++) {
        const img = new Image();
        // Matching the actual file naming: frame_00_delay-0.066s.webp
        const frameStr = i.toString().padStart(2, "0");
        img.src = `${basePath}/sequence/frame_${frameStr}_delay-0.066s.webp`;
        await new Promise((resolve) => {
          img.onload = resolve;
          img.onerror = resolve; // Continue even if one fails
        });
        loadedImages.push(img);
        setLoadedCount((prev) => prev + 1);
      }
      setImages(loadedImages);
    };

    preloadImages();
  }, [basePath]);

  // Sync canvas with scroll
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || images.length === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const unsubscribe = frameIndex.on("change", (latest) => {
      const index = Math.round(latest);
      const img = images[index];
      if (img && img.complete) {
        renderFrame(ctx, img, canvas);
      }
    });

    // Initial render
    if (images[0]) {
      renderFrame(ctx, images[0], canvas);
    }

    return () => unsubscribe();
  }, [images, frameIndex]);

  const renderFrame = (
    ctx: CanvasRenderingContext2D,
    img: HTMLImageElement,
    canvas: HTMLCanvasElement
  ) => {
    const { width, height } = canvas;
    const imgRatio = img.width / img.height;
    const canvasRatio = width / height;

    let drawWidth = width;
    let drawHeight = height;
    let offsetX = 0;
    let offsetY = 0;

    // object-fit: cover logic
    if (imgRatio > canvasRatio) {
      drawWidth = height * imgRatio;
      offsetX = (width - drawWidth) / 2;
    } else {
      drawHeight = width / imgRatio;
      offsetY = (height - drawHeight) / 2;
    }

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // Re-render current frame on resize
        if (images.length > 0) {
          const ctx = canvasRef.current.getContext("2d");
          const index = Math.round(frameIndex.get());
          if (ctx && images[index]) {
            renderFrame(ctx, images[index], canvasRef.current);
          }
        }
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [images, frameIndex]);

  return (
    <div ref={containerRef} className="relative h-[500vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
          style={{ objectFit: "cover" }}
        />
        {loadedCount < totalFrames && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#121212] z-50">
            <div className="text-white font-mono text-sm">
              LOADING {Math.round((loadedCount / totalFrames) * 100)}%
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
