"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowLeftRight } from "lucide-react";

export function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  // Update container width on mount and resize
  useEffect(() => {
    if (!containerRef.current) return;

    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;

    const { left, width } = containerRef.current.getBoundingClientRect();
    let clientX;

    if ("touches" in event) {
      clientX = event.touches[0].clientX;
    } else {
      clientX = (event as React.MouseEvent).clientX;
    }

    const position = ((clientX - left) / width) * 100;
    setSliderPosition(Math.min(100, Math.max(0, position)));
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchend", handleMouseUp);
      window.addEventListener("mousemove", handleMove as any);
      window.addEventListener("touchmove", handleMove as any);
    }

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
      window.removeEventListener("mousemove", handleMove as any);
      window.removeEventListener("touchmove", handleMove as any);
    };
  }, [isDragging]);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
            Transformation Stories
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Your donations bridge the gap between Before and After.
          </p>
        </div>

        <div className="flex justify-center">
          <div
            ref={containerRef}
            className="relative h-[400px] w-full max-w-4xl cursor-ew-resize overflow-hidden rounded-2xl shadow-2xl select-none"
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
          >
            {/* After Image (Full width, displayed behind) */}
            <div className="absolute inset-0 h-full w-full">
              <img
                src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=1600&auto=format&fit=crop"
                alt="Barney After"
                className="h-full w-full object-cover"
                draggable={false}
              />
              <div className="absolute top-4 right-4 rounded-full bg-white/90 px-4 py-1 text-sm font-bold text-primary shadow-sm">
                After
              </div>
            </div>

            {/* Before Image (Clipped) */}
            <div
              className="absolute inset-0 h-full overflow-hidden border-r-4 border-white"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="https://images.unsplash.com/photo-1598974357801-cbca100e65d3?q=80&w=1600&auto=format&fit=crop"
                alt="Barney Before"
                className="h-full object-cover"
                style={{
                  width: containerWidth ? `${containerWidth}px` : "100%",
                  maxWidth: "none",
                  height: "100%",
                }}
                draggable={false}
              />
              <div className="absolute top-4 left-4 rounded-full bg-black/60 px-4 py-1 text-sm font-bold text-white shadow-sm">
                Before
              </div>
            </div>

            {/* Slider Handle */}
            <div
              className="absolute inset-y-0 z-20 flex items-center justify-center pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="-ml-6 flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-white shadow-lg text-primary">
                <ArrowLeftRight className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
