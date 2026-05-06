import type React from "react";
import { ArabicNumber } from "../../utility/ArabicNumber";

/**
 * BulletList
 * Renders a clean list with optional title
 */
const BulletList: React.FC<{ items: string[]; title?: string }> = ({ items, title }) => {
  return (
    <div className="mb-3">
      {title && <h3 className="text-lg font-medium text-dark-red mb-2">
            <ArabicNumber text={title} />
        
        </h3>}
      <ul className="list-disc list-inside space-y-1 text-gold">
        {items.map((it, i) => (
          it&&
          <li key={i} className="leading-relaxed">
            <ArabicNumber text={it} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BulletList;