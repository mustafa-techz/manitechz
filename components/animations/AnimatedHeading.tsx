"use client";

import TextDistortion from "./framer-modules/TextDistortion";

interface AnimatedHeadingProps {
  text: string;
  className?: string;
}

export default function AnimatedHeading({ text, className }: AnimatedHeadingProps) {
  return (
    <div className={`relative ${className || ""}`}>
      <TextDistortion
        text={text}
        style={{ width: "100%" }}
        effect="wave"
        speed={1}
        amplitude={10}
        frequency={0.5}
      />
    </div>
  );
}
