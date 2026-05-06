import { motion } from "framer-motion";
import type { Client, ClientInterface } from "../interfaces/Components";

export default function MajorClientsSection({ clients, title }: ClientInterface) {
  console.log(title);
  
  return (
    <section
      className="bg-off-white text-dark-red py-12"
      aria-labelledby={`major-clients-${title.replace(/\s+/g, "-").toLowerCase()}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id={`major-clients-${title.replace(/\s+/g, "-").toLowerCase()}`}
          className="text-3xl md:text-4xl font-bold text-dark-red mb-6"
        >
          {title}
        </h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          initial="hidden"
          animate="show"
          variants={{
            show: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          role="list"
          aria-label={`List of ${title} logos`}
        >
          {clients &&
            clients.map((client: Client, idx: number) => {
              // Extract client name from file path if available
              const clientName =
                client.default.split("/").pop()?.replace(".png", "") || `Client ${idx + 1}`;                
              return (
                <motion.div
                  key={idx}
                  className="rounded-xl bg-white p-4 shadow-sm flex items-center justify-center"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  whileHover={{ scale: 1.05 }}
                  role="listitem"
                  aria-label={`Logo of ${clientName}`}
                >
                  <img
                    src={client.default}
                    alt={`${clientName} logo`}
                    className="object-contain w-full h-20"
                  />
                </motion.div>
              );
            })}
        </motion.div>
      </div>
    </section>
  );
}
