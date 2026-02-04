import Link from "next/link";
import React from "react";

type ProductPaginationProps = {
  page: number;
};

export default function ProductPagination({ page }: ProductPaginationProps) {
  return (
    <nav className="flex justify-center py-10">
      <Link href={`/admin/products?page=${page + 1}`}>&raquo;</Link>
    </nav>
  );
}
