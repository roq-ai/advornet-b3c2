const mapping: Record<string, string> = {
  advertisers: 'advertiser',
  placements: 'placement',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
