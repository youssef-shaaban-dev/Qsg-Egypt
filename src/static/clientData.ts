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

export const bankClients: Client[] = Object.values(bankModules).sort((a, b) => {
    const nameA = a.default.split("/").pop()!.toLowerCase();
    const nameB = b.default.split("/").pop()!.toLowerCase();
    return nameA.localeCompare(nameB);
  });

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