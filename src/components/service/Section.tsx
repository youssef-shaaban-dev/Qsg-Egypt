import type React from "react";
import type { SectionProps } from "../../interfaces/Components";

/**
 * Section
 * Generic section wrapper with title/subtitle and accessible heading
 */
const SectionCard: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  children,
  className = "",
}) => {
  const hasTitle = !!title;
  return (
    <section id={id} className={`py-8 px-4 md:px-8 ${className}`} aria-labelledby={id ? `${id}-title` : undefined}>
      {hasTitle && (
        <header className="mb-4">
          <h2 id={id ? `${id}-title` : undefined} className="text-3xl md:text-4xl font-bold text-dark-red mb-6">
            {title}
          </h2>
          {subtitle && <p className="text-gold mt-1">{subtitle}</p>}
        </header>
      )}

      <div className="prose max-w-none text-base text-gray-800">{children}</div>
    </section>
  );
};

export default SectionCard;