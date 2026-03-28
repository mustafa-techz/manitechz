"use client";

import { useEffect, useRef, useMemo, useCallback } from "react";
import { useInView } from "framer-motion";

interface TextDistortionProps {
  text: string;
  effect?: "wave" | "twist" | "ripple";
  speed?: number;
  amplitude?: number;
  frequency?: number;
  textColor?: string;
  backgroundColor?: string;
  font?: any;
  letterSpacing?: number;
  align?: "left" | "center" | "right";
  style?: any;
  enableCursorEffect?: boolean;
  cursorEffectIntensity?: number;
  cursorEffectTarget?: "letters" | "text";
}

export default function TextDistortion(props: TextDistortionProps) {
  const {
    text,
    effect = "wave",
    speed = 1,
    amplitude = 12,
    frequency = 0.6,
    textColor = "inherit",
    backgroundColor = "transparent",
    font,
    letterSpacing = 0,
    align = "center",
    style,
    enableCursorEffect = false,
    cursorEffectIntensity = 12,
    cursorEffectTarget = "letters",
  } = props;

  const containerRef = useRef<HTMLDivElement>(null);
  const textWrapperRef = useRef<HTMLDivElement>(null);
  const charRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const mouseTargetPositionRef = useRef({ x: 0, y: 0 });
  
  const isInView = useInView(containerRef, { margin: "0px", amount: 0.1 });

  const characters = useMemo(() => {
    if (!text || text.length === 0) return [" "];
    return text.split("");
  }, [text]);

  const applyTransform = useCallback(
    (time: number) => {
      const chars = charRefs.current;
      if (!chars || chars.length === 0) return;

      const currentMouse = mousePositionRef.current;
      const targetMouse = mouseTargetPositionRef.current;
      const lerpFactor = 0.12;
      const smoothedX = currentMouse.x + (targetMouse.x - currentMouse.x) * lerpFactor;
      const smoothedY = currentMouse.y + (targetMouse.y - currentMouse.y) * lerpFactor;
      mousePositionRef.current = { x: smoothedX, y: smoothedY };

      const len = chars.length;
      const mid = (len - 1) / 2;
      const t = time * 0.001 * speed;
      const amp = amplitude;
      const freq = frequency;
      const cursor = mousePositionRef.current;

      if (enableCursorEffect && cursorEffectTarget === "text" && textWrapperRef.current) {
        const extraX = cursor.x * cursorEffectIntensity;
        const extraY = cursor.y * cursorEffectIntensity;
        textWrapperRef.current.style.transform = `translate(${extraX.toFixed(2)}px, ${extraY.toFixed(2)}px)`;
      } else if (textWrapperRef.current) {
        textWrapperRef.current.style.transform = "none";
      }

      for (let i = 0; i < len; i++) {
        const el = chars[i];
        if (!el) continue;
        const offset = i - mid;
        let transform = "";

        if (effect === "wave") {
          const y = Math.sin(t + offset * freq) * amp;
          const angle = Math.cos(t + offset * freq) * amp * 0.1;
          transform = `translateY(${y.toFixed(2)}px) rotate(${angle.toFixed(2)}deg)`;
        } else if (effect === "twist") {
          const base = Math.sin(t);
          const angle = base * offset * amp * 0.2;
          const y = Math.cos(t + offset * freq) * (amp * 0.2);
          transform = `translateY(${y.toFixed(2)}px) rotate(${angle.toFixed(2)}deg)`;
        } else if (effect === "ripple") {
          const dist = Math.abs(offset);
          const wave = Math.sin(t + dist * dist * freq);
          const y = wave * amp;
          const scale = 1 + wave * 0.15;
          transform = `translateY(${y.toFixed(2)}px) scale(${scale.toFixed(3)})`;
        }

        if (enableCursorEffect && cursorEffectTarget === "letters") {
          const normIndex = len > 1 ? i / (len - 1) - 0.5 : 0;
          const dx = cursor.x - normIndex;
          const dy = cursor.y;
          const maxDist = 0.707;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const influence = Math.max(0, 1 - dist / maxDist);
          const strength = influence * cursorEffectIntensity;
          const extraX = dx * strength * 2;
          const extraY = dy * strength * 2;
          transform += ` translate(${extraX.toFixed(2)}px, ${extraY.toFixed(2)}px)`;
        }

        el.style.transform = transform;
      }
    },
    [speed, amplitude, frequency, effect, enableCursorEffect, cursorEffectIntensity, cursorEffectTarget]
  );

  const animate = useCallback(
    (timestamp: number) => {
      if (lastTimeRef.current === null) lastTimeRef.current = timestamp;
      applyTransform(timestamp);
      animationFrameRef.current = requestAnimationFrame(animate);
    },
    [applyTransform]
  );

  useEffect(() => {
    if (isInView) {
      animationFrameRef.current = requestAnimationFrame(animate);
    } else {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    }
    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [isInView, animate]);

  const containerStyle = {
    position: "relative" as const,
    display: "flex",
    alignItems: "center",
    justifyContent: align === "left" ? "flex-start" : align === "right" ? "flex-end" : "center",
    overflow: "hidden",
    backgroundColor,
    color: textColor,
    ...font,
    ...style,
  };

  const textWrapperStyle = {
    display: "inline-flex",
    position: "relative" as const,
    whiteSpace: "pre" as const,
    alignItems: "center",
    justifyContent: align === "left" ? "flex-start" : align === "right" ? "flex-end" : "center",
  };

  return (
    <div
      ref={containerRef}
      style={containerStyle}
      onMouseMove={(event) => {
        if (!enableCursorEffect || !containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const relativeX = (event.clientX - rect.left) / rect.width - 0.5;
        const relativeY = (event.clientY - rect.top) / rect.height - 0.5;
        mouseTargetPositionRef.current = { 
          x: Math.max(-0.5, Math.min(0.5, relativeX)), 
          y: Math.max(-0.5, Math.min(0.5, relativeY)) 
        };
      }}
      onMouseLeave={() => {
        if (!enableCursorEffect) return;
        mouseTargetPositionRef.current = { x: 0, y: 0 };
      }}
    >
      <div ref={textWrapperRef} style={textWrapperStyle}>
        {characters.map((ch, index) => (
          <span
            key={index}
            ref={(el) => { charRefs.current[index] = el; }}
            style={{
              display: "inline-block",
              willChange: "transform",
              letterSpacing: `${letterSpacing}px`,
            }}
          >
            {ch === " " ? "\u00A0" : ch}
          </span>
        ))}
      </div>
    </div>
  );
}
