"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface Props {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
}

export default function FallbackImage({
    src,
    alt,
    width,
    height,
    className,
}: Props) {

    const fallbackSrc = "/icons/default-tech.svg"; // your MTZ icon

    const [imgSrc, setImgSrc] = useState(src);

    useEffect(() => {
        setImgSrc(src);
    }, [src]);

    return (
        <Image
            src={imgSrc}
            alt={alt}
            width={width}
            height={height}
            className={className}
            onError={() => {
                setImgSrc(fallbackSrc);
            }}
        />
    );
}