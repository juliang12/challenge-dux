import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

// Hook personalizado para manejar la paginación de la tabla de usuarios
export function useUserTablePagination() {
  const router = useRouter(); // Permite navegar programáticamente
  const pathname = usePathname(); // Obtiene la ruta actual (sin query params)
  const searchParams = useSearchParams(); // Obtiene los parámetros de búsqueda actuales (?_page=1&_limit=5...)

  // Lee los valores actuales de _page y _limit desde la URL. Si no existen, se usan valores por defecto.
  const initialPage = Number(searchParams?.get("_page")) || 1;
  const initialLimit = Number(searchParams?.get("_limit")) || 5;

  // `first` representa el índice del primer ítem a mostrar (para PrimeReact DataTable)
  const [first, setFirst] = useState((initialPage - 1) * initialLimit);

  // `rows` representa cuántas filas se muestran por página
  const [rows, setRows] = useState(initialLimit);

  // Maneja el evento de cambio de página (por ejemplo, cuando el usuario navega con la paginación)
  const handlePageChange = (event: { first: number; rows: number }) => {
    // Calcula la nueva página basándose en los datos del evento
    const newPage = Math.max(1, Math.floor(event.first / event.rows) + 1);

    // Asegura que el límite esté entre 1 y 100
    const newLimit = Math.min(Math.max(1, event.rows), 100);

    // Clona los searchParams actuales y actualiza _page y _limit
    const params = new URLSearchParams(searchParams?.toString());
    params.set("_page", String(newPage));
    params.set("_limit", String(newLimit));

    // Actualiza el estado local para reflejar el cambio
    setFirst(event.first);
    setRows(event.rows);

    // Navega a la nueva URL con los parámetros actualizados
    router.push(`${pathname}?${params.toString()}`);
  };

  // Devuelve el estado de paginación y el handler para el componente que lo consuma
  return {
    first,
    rows,
    handlePageChange,
  };
}
