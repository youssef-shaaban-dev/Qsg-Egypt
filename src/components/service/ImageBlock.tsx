import type React from "react";
import type { ImageBlockProps } from "../../interfaces/Components";

/**
 * ImageBlock
 * Simple wrapper for images — uses dummy image if src not provided.
 */
export const ImageBlock: React.FC<ImageBlockProps> = ({
  src = "/assets/dummy.jpg",
  alt = "Illustration",
  className = "w-full h-48 object-cover rounded",
  title = null
}) => {
  return (
    <div className="flex flex-col items-center">
      
    <img
      src={src}
      alt={alt}
      className={className}
      // allow consumer to replace src easily; keep loading lazy for perf
      loading="lazy"
    />
    {title&&<span className="block mt-4 text-center text-gold">{title}</span>}
    </div>
  );
};
