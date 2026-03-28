"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import IconSlideButton from "./framer-modules/IconSlideButton";

interface AnimatedButtonProps {
  className?: string;
  onClick?: () => void;
  text?: string;
  variant?: "primary" | "secondary";
}

export default function AnimatedButton({
  className,
  onClick,
  text,
  variant = "primary"
}: AnimatedButtonProps) {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className={`relative inline-block cursor-pointer ${className || ""}`} onClick={onClick}>
        <div className="px-8 py-4 border border-transparent opacity-0">
          {text}
        </div>
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  // Design tokens based on requirements
  const colors = {
    primary: {
      light: {
        bg: "var(--accent)",
        border: "var(--accent)",
        borderHover: "black",
        text: "white",
        textHover: "black",
        bgHover: "transparent",
        fill: "transparent",
        showFill: false,
      },
      dark: {
        bg: "var(--accent)",
        border: "var(--accent)",
        borderHover: "white",
        text: "black",
        textHover: "white",
        bgHover: "transparent",
        fill: "transparent",
        showFill: false,
      }
    },
    secondary: {
      light: {
        bg: "transparent",
        border: "black",
        borderHover: "black",
        text: "black",
        textHover: "white",
        bgHover: "black",
        fill: "black",
        showFill: true,
      },
      dark: {
        bg: "transparent",
        border: "white",
        borderHover: "white",
        text: "white",
        textHover: "black",
        bgHover: "white",
        fill: "white",
        showFill: true,
      }
    }
  };

  const currentColors = isDark ? colors[variant].dark : colors[variant].light;

  return (
    <button className={`relative inline-block cursor-pointer z-99999 ${className || ""}`} onClick={onClick} >
      <IconSlideButton
        title={text || "Button"}
        style={{ width: "100%", height: "100%" }}
        bGColor={currentColors.bg}
        bGHoverColor={currentColors.bgHover || "transparent"}
        borderColor={currentColors.border}
        borderHoverColor={currentColors.borderHover || currentColors.border}
        textColor={currentColors.text}
        fillColor={(currentColors as any).fill || "transparent"}
        textHoverColor={currentColors.textHover}
        iconHoverFill={currentColors.textHover}
        iconColor={currentColors.text}
        showFill={currentColors.showFill}
        className="z-10"
      />
    </button>
  );
}
