type SearchParams = {
  q?: string;
  estado?: string;
  sector?: string;
  _page?: string;
  _limit?: string;
};

const DEFAULT_PAGINATION = {
  page: 1,
  limit: 100,
};

export const buildQueryString = (params: SearchParams): string => {
  const searchParams = new URLSearchParams();

  // Filtros
  if (params.q) searchParams.set('q', params.q.trim());
  if (params.estado) searchParams.set('estado', params.estado);
  if (params.sector) searchParams.set('sector', params.sector);

  // Paginación (usando los nombres que espera JSON Server)
  searchParams.set('_page', params._page || String(DEFAULT_PAGINATION.page));
  searchParams.set('_limit', params._limit || String(DEFAULT_PAGINATION.limit));

  return searchParams.toString();
};
