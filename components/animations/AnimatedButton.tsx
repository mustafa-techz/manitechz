"use client";

import { ReactNode } from "react";
import IconSlideButton from "./framer-modules/IconSlideButton";

interface AnimatedButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  text?: string;
}

export default function AnimatedButton({ children, className, onClick, text }: AnimatedButtonProps) {
  return (
    <div className={`relative inline-block cursor-pointer ${className || ""}`} onClick={onClick}>
      <IconSlideButton
        title={text || "Button"}
        style={{ width: "100%", height: "100%" }}
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity z-10"
      />
      <div className="relative z-0">
        {children}
      </div>
    </div>
  );
}
