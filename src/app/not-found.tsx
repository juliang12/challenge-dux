'use client';

import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="w-full min-h-screen flex-col align-content-center justify-content-center text-center px-4">
      <h1 className="text-4xl font-bold mb-4">404 - Página no encontrada</h1>
      <p className="mb-6 text-gray-600">
        Lo sentimos, la página que estás buscando no existe.
      </p>
      <button
        onClick={() => router.push('/')}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Volver al inicio
      </button>
    </div>
  );
}
