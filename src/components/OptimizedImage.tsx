import React, { useState } from "react"
import type { OptimizedImageProps } from "../interfaces/Components"

/**
 * 🔆 Optimized, accessible, and responsive image component
 * - Supports AVIF / WebP / PNG fallbacks
 * - Handles blur placeholders for progressive loading
 * - Lazy loads by default
 * - Includes ARIA support and semantic improvements
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = "",
  placeholder,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
}) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <figure
      className={`relative overflow-hidden ${className}`}
      role="img"
      aria-label={alt}
    >
      {/* 🔹 Optional blur placeholder */}
      {placeholder && (
        <img
          src={placeholder}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 blur-xl scale-105 transition-opacity duration-500 ${
            loaded ? "opacity-0" : "opacity-100"
          }`}
        />
      )}

      {/* 🔹 Picture element with modern format support */}
      <picture>
        <source
          srcSet={`${src}-480.avif 480w, ${src}-768.avif 768w, ${src}-1080.avif 1080w`}
          type="image/avif"
          sizes={sizes}
        />
        <source
          srcSet={`${src}-480.webp 480w, ${src}-768.webp 768w, ${src}-1080.webp 1080w`}
          type="image/webp"
          sizes={sizes}
        />
        <img
          src={`${src}-1080.png`}
          srcSet={`${src}-480.png 480w, ${src}-768.png 768w, ${src}-1080.png 1080w`}
          sizes={sizes}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={`transition-opacity duration-500 w-full h-auto ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </picture>

      {/* 🔹 Optional caption for SEO or context */}
      {alt && (
        <figcaption className="sr-only">
          {alt}
        </figcaption>
      )}
    </figure>
  )
}

export default OptimizedImage
