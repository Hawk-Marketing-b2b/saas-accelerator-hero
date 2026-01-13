import type React from "react";
import { cn } from "@/lib/utils";

interface ShinyButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function ShinyButton({ children, onClick, className = "" }: ShinyButtonProps) {
  return (
    <button 
      className={cn(
        "px-6 py-3 rounded-full font-medium text-sm text-white bg-[#a855f7] shadow-[0_4px_20px_rgba(168,85,247,0.4)] hover:shadow-[0_6px_30px_rgba(168,85,247,0.6)] hover:brightness-110 transition-all duration-300 active:translate-y-0.5",
        className
      )} 
      onClick={onClick}
    >
      <span className="flex items-center gap-2">{children}</span>
    </button>
  );
}

export default ShinyButton;