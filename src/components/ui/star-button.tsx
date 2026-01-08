import React, { useRef, useEffect, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StarBackgroundProps {
  color?: string;
}

function StarBackground({ color = "currentColor" }: StarBackgroundProps) {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="star-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color} stopOpacity="0" />
          <stop offset="50%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill="none"
        stroke="url(#star-gradient)"
        strokeWidth="1"
        rx="9999"
        ry="9999"
      />
    </svg>
  );
}

interface StarButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  lightWidth?: number;
  duration?: number;
  lightColor?: string;
  backgroundColor?: string;
  borderWidth?: number;
  className?: string;
}

export function StarButton({
  children,
  lightWidth = 110,
  duration = 3,
  lightColor = "#FAFAFA",
  backgroundColor = "transparent",
  borderWidth = 1,
  className,
  ...props
}: StarButtonProps) {
  const pathRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pathRef.current) {
      const div = pathRef.current;
      div.style.setProperty(
        "--path",
        `path('M 0 0 H ${div.offsetWidth} V ${div.offsetHeight} H 0 V 0')`
      );
    }
  }, []);

  return (
    <button
      className={cn(
        "relative overflow-hidden rounded-full px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:scale-105",
        className
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {/* Animated border */}
      <div
        ref={pathRef}
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{
          background: `linear-gradient(90deg, transparent, ${lightColor}, transparent)`,
          backgroundSize: `${lightWidth}px 100%`,
          animation: `star-border-spin ${duration}s linear infinite`,
          padding: borderWidth,
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* Static border */}
      <div
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{
          border: `${borderWidth}px solid rgba(255, 255, 255, 0.2)`,
        }}
      />

      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>

      <style>{`
        @keyframes star-border-spin {
          0% {
            background-position: -${lightWidth}px 0;
          }
          100% {
            background-position: calc(100% + ${lightWidth}px) 0;
          }
        }
      `}</style>
    </button>
  );
}

export default StarButton;
