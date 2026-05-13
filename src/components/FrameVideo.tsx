"use client";

import { useEffect, useRef } from "react";
import { useMotionValueEvent, MotionValue } from "framer-motion";

export default function FrameVideo({ 
  frameCount, 
  pathPrefix,
  progress 
}: { 
  frameCount: number, 
  pathPrefix: string,
  progress: MotionValue<number> 
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const images = useRef<HTMLImageElement[]>([]);

  // Preload images
  useEffect(() => {
    images.current = [];
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = `${pathPrefix}/ezgif-frame-${String(i).padStart(3, '0')}.jpg`;
      images.current.push(img);
    }
  }, [frameCount, pathPrefix]);

  const updateCanvas = (latest: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const frameIndex = Math.min(
      frameCount - 1,
      Math.floor(latest * frameCount)
    );

    const img = images.current[frameIndex];
    if (img && img.complete) {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    } else if (img) {
      img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      };
    }
  };

  // Update canvas when progress changes
  useMotionValueEvent(progress, "change", (latest) => {
    updateCanvas(latest);
  });

  // Initial draw
  useEffect(() => {
    updateCanvas(progress.get());
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full object-cover"
      width={1280}
      height={720}
    />
  );
}
