"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import ArrowForward from "./ArrowForward";

interface IconSlideButtonProps {
  buttonTitle?: string;
  bGColor?: string;
  bGHoverColor?: string;
  fillColor?: string;
  textColor?: string;
  textHoverColor?: string;
  iconColor?: string;
  iconHoverFill?: string;
  fontSize?: number;
  buttonRadius?: string;
  style?: React.CSSProperties;
  className?: string;
  title?: string; // Standard HTML title prop sometimes used as buttonTitle
  borderColor?: string;
  borderHoverColor?: string;
  showFill?: boolean;
}

export default function IconSlideButton(props: IconSlideButtonProps) {
  const {
    buttonTitle = props.title || "Button Text",
    bGColor = "rgba(250, 250, 250, 0)",
    bGHoverColor = "rgba(8, 8, 8, 0)",
    fillColor = "rgb(0, 0, 0)",
    textColor = "rgb(0, 0, 0)",
    textHoverColor = "rgb(255, 255, 255)",
    iconColor = "currentColor",
    iconHoverFill = "rgb(255, 255, 255)",
    borderColor = "transparent",
    borderHoverColor = borderColor,
    fontSize = 16,
    buttonRadius = "999px",
    style,
    className,
    showFill = true,
  } = props;

  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative flex items-center justify-center cursor-pointer overflow-hidden px-8 py-4 border ${className || ""}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={{
        backgroundColor: isHovered ? bGHoverColor : bGColor,
        borderColor: isHovered ? borderHoverColor : borderColor,
      }}
      style={{
        borderRadius: buttonRadius,
        ...style,
      }}
    >
      {/* Background Fill Animation */}
      {showFill && (
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4, ease: [0.44, 0, 0.56, 1] }}
          style={{ backgroundColor: fillColor }}
        />
      )}

      {/* Button Text */}
      <motion.span
        className="relative z-10 font-medium whitespace-nowrap"
        animate={{
          color: isHovered ? textHoverColor : textColor,
          x: isHovered ? -5 : 0
        }}
        transition={{ duration: 0.4, ease: [0.44, 0, 0.56, 1] }}
        style={{ fontSize: `${fontSize}px` }}
      >
        {buttonTitle}
      </motion.span>

      {/* Icon Animation */}
      <motion.div
        className="relative z-10 ml-2"
        initial={{ x: 0, opacity: 1 }}
        animate={{
          x: isHovered ? 5 : 0,
        }}
        transition={{ duration: 0.4, ease: [0.44, 0, 0.56, 1] }}
      >
        <ArrowForward fill={isHovered ? (isHovered && textHoverColor !== textColor ? iconHoverFill : iconColor) : iconColor} />
      </motion.div>
    </motion.div>
  );
}
