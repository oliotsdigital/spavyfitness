export interface NavbarCategoryItem {
  id: string;
  label: string;
  isHighlight?: boolean;
}

export const NAVBAR_CATEGORIES: NavbarCategoryItem[] = [
  { id: 'all', label: 'ALL' },
  { id: 'functional', label: 'FUNCTIONAL TRAINERS' },
  { id: 'rigs', label: 'RIGS & RACKS' },
  { id: 'crossfit', label: 'CROSSFIT EQUIPMENT' },
  { id: 'barbells', label: 'BARBELLS' },
  { id: 'plates', label: 'PLATES' },
  { id: 'conditioning', label: 'CONDITIONING' },
  { id: 'benches', label: 'BENCHES' },
  { id: 'apparel', label: 'APPAREL' },
  { id: '3-ships-free', label: '3 SHIPS FREE', isHighlight: true },
];

/**
 * Fetch available navbar categories (simulated API endpoint call)
 */
export async function fetchNavbarCategories(): Promise<NavbarCategoryItem[]> {
  // Simulating async API latency
  return Promise.resolve(NAVBAR_CATEGORIES);
}

/**
 * Handle contact inquiry initialization (simulated API endpoint call)
 */
export async function submitContactInquiry(payload: { source: string }): Promise<{ success: boolean; message: string }> {
  return Promise.resolve({
    success: true,
    message: `Contact request initialized via ${payload.source}`,
  });
}
