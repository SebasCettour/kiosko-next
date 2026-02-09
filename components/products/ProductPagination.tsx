import Link from "next/link";
import React from "react";

type ProductPaginationProps = {
  page: number;
  totalPages: number;
};

export default function ProductPagination({
  page,
  totalPages,
}: ProductPaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <nav className="flex justify-center py-10 gap-2 flex-wrap">
      {page > 1 && (
        <Link
          href={`/admin/products?page=${page - 1}`}
          className="px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-gray-700 hover:bg-gray-100 hover:border-gray-400 transition-colors duration-150"
          aria-label="Página anterior"
        >
          &laquo;
        </Link>
      )}
      {pages.map((p) => (
        <Link
          key={p}
          href={`/admin/products?page=${p}`}
          className={`px-3 py-1 rounded-lg font-semibold border transition-colors duration-150 ${
            p === page
              ? "bg-indigo-600 text-white border-indigo-600"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100 hover:border-gray-400"
          }`}
          aria-label={`Ir a la página ${p}`}
        >
          {p}
        </Link>
      ))}
      {page < totalPages && (
        <Link
          href={`/admin/products?page=${page + 1}`}
          className="px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-gray-700 hover:bg-gray-100 hover:border-gray-400 transition-colors duration-150"
          aria-label="Página siguiente"
        >
          &raquo;
        </Link>
      )}
    </nav>
  );
}
