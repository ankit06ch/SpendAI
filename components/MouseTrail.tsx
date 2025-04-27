"use client";
import { useEffect, useRef } from "react";

const NUM_BUBBLES = 18;
const TRAIL_LENGTH = 20;

function randomColor() {
  const colors = [
    "#818CF8", // indigo-400
    "#A5B4FC", // indigo-300
    "#C7D2FE", // indigo-200
    "#F472B6", // pink-400
    "#FDE68A", // yellow-200
    "#6EE7B7", // green-300
    "#FCA5A5", // red-300
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

export default function MouseTrail() {
  const trailRef = useRef<{x: number, y: number, color: string}[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrame: number;
    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let trail: {x: number, y: number, color: string}[] = [];

    const handleMouseMove = (e: MouseEvent) => {
      mouse = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    function animate() {
      // Add new bubble to the trail
      trail.unshift({ x: mouse.x, y: mouse.y, color: randomColor() });
      if (trail.length > TRAIL_LENGTH) trail.pop();
      trailRef.current = [...trail];
      if (containerRef.current) {
        // Remove all children
        containerRef.current.innerHTML = "";
        // Draw bubbles
        for (let i = 0; i < trail.length; i++) {
          const { x, y, color } = trail[i];
          const div = document.createElement("div");
          const scale = 1 - i / TRAIL_LENGTH;
          div.style.position = "fixed";
          div.style.left = `${x - 12 * scale}px`;
          div.style.top = `${y - 12 * scale}px`;
          div.style.width = `${24 * scale}px`;
          div.style.height = `${24 * scale}px`;
          div.style.borderRadius = "50%";
          div.style.background = color;
          div.style.opacity = `${0.25 + 0.5 * scale}`;
          div.style.pointerEvents = "none";
          div.style.zIndex = "0";
          div.style.filter = "blur(1.5px)";
          containerRef.current.appendChild(div);
        }
      }
      animationFrame = requestAnimationFrame(animate);
    }
    animate();
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
      }}
      aria-hidden="true"
    />
  );
} 