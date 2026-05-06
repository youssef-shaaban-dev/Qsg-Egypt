import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { TeamMemberProps } from "../../../interfaces/Components";
import i18n from "../../../i18n";
import { ArabicNumber } from "../../../utility/ArabicNumber";

type Lang = 'en' | 'ar';

const TeamSection: React.FC<TeamMemberProps> = ({ team }) => {
  
  const lang: Lang = i18n.language as Lang; // if using react-i18next
  const [selectedMember, setSelectedMember] = useState<(typeof team)[number] | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedMember(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Focus management when modal opens
  useEffect(() => {
    if (selectedMember && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [selectedMember]);

  // Focus trap inside modal
  useEffect(() => {
    const handleTab = (e: KeyboardEvent) => {
      if (!selectedMember || !modalRef.current) return;

      const focusableEls = modalRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableEls.length === 0) return;

      const firstEl = focusableEls[0];
      const lastEl = focusableEls[focusableEls.length - 1];

      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === firstEl) {
            e.preventDefault();
            lastEl.focus();
          }
        } else {
          if (document.activeElement === lastEl) {
            e.preventDefault();
            firstEl.focus();
          }
        }
      }
    };

    if (selectedMember) {
      window.addEventListener("keydown", handleTab);
    }
    return () => window.removeEventListener("keydown", handleTab);
  }, [selectedMember]);

  return (
    <section className="py-20 bg-off-white text-dark-red relative" aria-labelledby="team-section-title" role="region">
      <div className="container mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.div
          id="team-section-title"
          className="text-3xl md:text-4xl font-bold mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            {lang === 'ar' ? 'فريق العمل' : 'Meet Our Team'}
          </h2>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((member, idx) => (
            <motion.article
              key={member.id}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              aria-label={`Team member: ${member.name[lang]}, ${member.title[lang]}`}
            >
              <img
                src={member.image}
                alt={`Portrait of ${member.name[lang]}`}
                className="w-32 h-32 rounded-lg object-contain mb-4 shadow-md"
              />
              <h3 className="text-xl font-semibold text-dark-red">{member.name[lang]}</h3>
              <p className="text-gold font-medium mb-3">{member.title[lang]}</p>
              <p
                className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4"
                // dangerouslySetInnerHTML={{ __html: member.description[lang] }}
              >
                <ArabicNumber text={member.description[lang]} />
                  </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedMember(member)}
                className="mt-auto cursor-pointer px-5 py-2 bg-dark-red rounded-full text-sm font-medium text-white hover:bg-gold transition-colors"
                aria-label={`More information about ${member.name[lang]}`}
              >
                {lang === 'ar' ? 'المزيد من المعلومات' : 'More Information'}
              </motion.button>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedMember && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              aria-hidden="true"
            />
            <motion.div
              ref={modalRef}
              className="fixed inset-0 z-50 flex items-center justify-center p-6"
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ duration: 0.4 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="member-name"
              aria-describedby="member-description"
            >
              <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full p-8 relative">
                <button
                  ref={closeButtonRef}
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-dark-red text-xl cursor-pointer"
                  aria-label={lang === 'ar' ? 'إغلاق' : 'Close dialog'}
                >
                  ✕
                </button>
                <div className="flex justify-center mb-4">
                  <img
                    src={selectedMember.image}
                    alt={`Photo of ${selectedMember.name[lang]}`}
                    className="w-40 h-40 rounded-lg object-contain shadow-md"
                  />
                </div>
                <h3 id="member-name" className="text-2xl md:text-3xl font-bold text-dark-red mb-3">
                  {selectedMember.name[lang]}
                </h3>
                <p className="text-gold font-medium mb-4">{selectedMember.title[lang]}</p>
                <p
                  id="member-description"
                  className="text-gray-700 text-sm leading-relaxed mb-6 text-center ltr:text-left"
                  // dangerouslySetInnerHTML={{ __html: selectedMember.description[lang] }}
                >
                  <ArabicNumber text={selectedMember.description[lang]} />
                  </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TeamSection;
