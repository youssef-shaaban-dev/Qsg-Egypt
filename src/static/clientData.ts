import type { Client } from "../interfaces/Components";

const bankModules = import.meta.glob('../assets/Clients/b/*.webp', {
  eager: true,
}) as Record<string, { default: string }>;

const accountingModules = import.meta.glob('../assets/Clients/a/*.webp', {
  eager: true,
}) as Record<string, { default: string }>;

const companyModules = import.meta.glob('../assets/Clients/c/*.webp', {
  eager: true,
}) as Record<string, { default: string }>;

const reelModules = import.meta.glob('../assets/Clients/l/*.webp', {
  eager: true,
}) as Record<string, { default: string }>;

const bankOrder = [
  "a.webp", "b.webp", "c.webp", "d.webp", "f.webp", "fa.webp", "e.webp", "h.webp", "r.webp", "p.webp",
  "j.webp", "l.webp", "t.webp", "n.webp", "o.webp", "k.webp", "q.webp", "s.webp", "g.webp", "m.webp",
  "y.webp", "v.webp", "z.webp", "i.webp", "za.webp", "zb.webp", "w.webp"
];

export const bankClients: Client[] = Object.entries(bankModules)
  .sort((a, b) => {
    const nameA = a[0].split("/").pop()!.toLowerCase();
    const nameB = b[0].split("/").pop()!.toLowerCase();
    const indexA = bankOrder.indexOf(nameA);
    const indexB = bankOrder.indexOf(nameB);
    return indexA - indexB;
  })
  .map(([ , module]) => module);

export const accountingClients: Client[] = Object.values(accountingModules).sort((a, b) => {
    const nameA = a.default.split("/").pop()!.toLowerCase();
    const nameB = b.default.split("/").pop()!.toLowerCase();
    return nameA.localeCompare(nameB);
  });
export const companiesClients: Client[] = Object.values(companyModules).sort((a, b) => {
    const nameA = a.default.split("/").pop()!.toLowerCase();
    const nameB = b.default.split("/").pop()!.toLowerCase();
    return nameA.localeCompare(nameB);
  });
export const realstateClients: Client[] = Object.values(reelModules).sort((a, b) => {
    const nameA = a.default.split("/").pop()!.toLowerCase();
    const nameB = b.default.split("/").pop()!.toLowerCase();
    return nameA.localeCompare(nameB);
  });

export const clients: Client[] = [
  ...bankClients,
  ...accountingClients,
  ...companiesClients,
  ...realstateClients,
].sort((a, b) => {
  const nameA = a.default.split("/").pop()!.toLowerCase();
  const nameB = b.default.split("/").pop()!.toLowerCase();
  return nameA.localeCompare(nameB);
});