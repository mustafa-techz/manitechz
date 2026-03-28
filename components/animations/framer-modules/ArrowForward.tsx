"use client";

import { motion } from "framer-motion";

interface ArrowForwardProps {
  fill?: string;
  className?: string;
  style?: any;
}

export default function ArrowForward({ fill = "currentColor", className, style }: ArrowForwardProps) {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "24px",
        height: "24px",
        backgroundColor: fill,
        mask: 'url(\'data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 8 0 L 6.59 1.41 L 12.17 7 L 0 7 L 0 9 L 12.17 9 L 6.59 14.59 L 8 16 L 16 8 Z" fill="black" transform="translate(4 4)"/></svg>\') no-repeat center / auto',
        WebkitMask: 'url(\'data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 8 0 L 6.59 1.41 L 12.17 7 L 0 7 L 0 9 L 12.17 9 L 6.59 14.59 L 8 16 L 16 8 Z" fill="black" transform="translate(4 4)"/></svg>\') no-repeat center / auto',
        ...style,
      }}
    />
  );
}
