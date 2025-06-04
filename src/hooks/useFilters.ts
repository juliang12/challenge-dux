import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export type FilterKeys = "q" | "sector" | "estado";

export function useFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams?.toString());
  const [filters, setFilters] = useState({
    q: searchParams?.get("q") || "",
    sector: searchParams?.get("sector") || "",
    estado: searchParams?.get("estado") || "",
  });

  const handleSearch = useDebouncedCallback((value: string) => {
    if (value) {
      params.set("q", value);
    } else {
      params.delete("q");
    }

    router.replace(`${pathname}?${params.toString()}`);
  }, 500);

  const updateFilter = (field: FilterKeys, value: string | null) => {
    const updatedFilters = { ...filters, [field]: value };
    setFilters(updatedFilters);

    const params = new URLSearchParams(searchParams?.toString());

    if (value) {
      params.set(field, value);
    } else {
      params.delete(field);
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  return {
    filters,
    handleSearch,
    updateFilter,
  };
}
