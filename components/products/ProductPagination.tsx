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
  return (
    <nav className="flex justify-center py-10 gap-4">
      {page > 1 && (
        <Link
          href={`/admin/products?page=${page - 1}`}
          className="px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-gray-700 hover:bg-gray-100 hover:border-gray-400 transition-colors duration-150"
          aria-label="Página anterior"
        >
          &laquo;
        </Link>
      )}
      <span className="px-3 py-1 text-lg font-semibold text-gray-700">{page} / {totalPages}</span>
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
