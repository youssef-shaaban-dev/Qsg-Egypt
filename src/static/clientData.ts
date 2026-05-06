import type { Client } from "../interfaces/Components";

const bankModules = import.meta.glob('../assets/Clients/b/*.png', {
  eager: true,
}) as Record<string, { default: string }>;

const accountingModules = import.meta.glob('../assets/Clients/a/*.png', {
  eager: true,
}) as Record<string, { default: string }>;

const companyModules = import.meta.glob('../assets/Clients/c/*.png', {
  eager: true,
}) as Record<string, { default: string }>;

const reelModules = import.meta.glob('../assets/Clients/l/*.png', {
  eager: true,
}) as Record<string, { default: string }>;

const bankOrder = [
  "a.png", "b.png", "c.png", "d.png", "f.png", "fa.png", "e.png", "h.png", "r.png", "p.png",
  "j.png", "l.png", "t.png", "n.png", "o.png", "k.png", "q.png", "s.png", "g.png", "m.png",
  "y.png", "v.png", "z.png", "i.png", "za.png", "zb.png", "w.png"
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