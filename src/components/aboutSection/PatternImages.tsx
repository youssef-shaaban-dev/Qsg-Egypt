import React from "react";

const PatternImages: React.FC = () => (
  <>
    {/* Decorative pattern (left) */}
    <img
      src="https://www.domeint.com/templates/project/image/pattern-image-1.png"
      alt=""
      aria-hidden="true"
      className="pointer-events-none select-none absolute left-0 top-0 opacity-50 w-40 md:w-64"
      loading="lazy"
    />

    {/* Decorative pattern (right) */}
    <img
      src="https://www.domeint.com/templates/project/image/pattern-image-2.png"
      alt=""
      aria-hidden="true"
      className="pointer-events-none select-none absolute right-0 bottom-0 opacity-50 w-40 md:w-64"
      loading="lazy"
    />
  </>
);

export default PatternImages;
