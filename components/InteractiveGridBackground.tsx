"use client";
import { useEffect, useRef, useState } from "react";

const SQUARE_SIZE = 36; // px

export default function InteractiveGridBackground() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({
    rows: Math.ceil(window.innerHeight / SQUARE_SIZE),
    cols: Math.ceil(window.innerWidth / SQUARE_SIZE),
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        rows: Math.ceil(window.innerHeight / SQUARE_SIZE),
        cols: Math.ceil(window.innerWidth / SQUARE_SIZE),
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!gridRef.current) return;
      const rect = gridRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const children = Array.from(gridRef.current.children) as HTMLDivElement[];
      children.forEach((child) => {
        const cx = parseFloat(child.dataset.cx!);
        const cy = parseFloat(child.dataset.cy!);
        const dx = mouseX - cx;
        const dy = mouseY - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        // 3D effect: closer squares pop out more
        const maxDist = 200;
        const intensity = Math.max(0, 1 - dist / maxDist);
        child.style.transform = `
          scale(${1 + 0.25 * intensity})
          rotateX(${10 * intensity * (dy / maxDist)}deg)
          rotateY(${-10 * intensity * (dx / maxDist)}deg)
        `;
        child.style.filter = `brightness(${1 + 0.5 * intensity})`;
        child.style.zIndex = intensity > 0.1 ? "1" : "0";
        child.style.boxShadow = intensity > 0.15 ? `0 4px 24px 0 rgba(129,140,248,${0.15 * intensity})` : "none";
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [dimensions]);

  // Generate grid squares
  const squares = [];
  for (let row = 0; row < dimensions.rows; row++) {
    for (let col = 0; col < dimensions.cols; col++) {
      const cx = col * SQUARE_SIZE + SQUARE_SIZE / 2;
      const cy = row * SQUARE_SIZE + SQUARE_SIZE / 2;
      squares.push(
        <div
          key={`${row}-${col}`}
          data-cx={cx}
          data-cy={cy}
          style={{
            width: SQUARE_SIZE,
            height: SQUARE_SIZE,
            background: "rgba(129,140,248,0.05)", // lighter indigo tint
            border: "1px solid rgba(129,140,248,0.05)",
            borderRadius: 8,
            transition: "transform 0.18s cubic-bezier(.4,2,.6,1), filter 0.18s, box-shadow 0.18s",
            willChange: "transform, filter, box-shadow",
            pointerEvents: "none",
            zIndex: -1,
          }}
        />
      );
    }
  }

  return (
    <div
      ref={gridRef}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: dimensions.width,
        height: dimensions.height,
        display: "grid",
        gridTemplateRows: `repeat(${dimensions.rows}, ${SQUARE_SIZE}px)`,
        gridTemplateColumns: `repeat(${dimensions.cols}, ${SQUARE_SIZE}px)`,
        zIndex: -1,
        pointerEvents: "none",
        userSelect: "none",
      }}
      aria-hidden="true"
    >
      {squares}
    </div>
  );
} 