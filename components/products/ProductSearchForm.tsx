"use client";

import { SearchSchema } from "@/src/schema";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function ProductSearchForm() {
  const router = useRouter();

  const handleSearchForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = {
      search: (formData.get("search") ?? "").toString().trim(),
    };

    const result = SearchSchema.safeParse(data);

    if (!result.success) {
      result.error.issues.forEach((issue) => {
        toast.error(issue.message);
      });
      return;
    }

    router.push(
      `/admin/products/search?search=${encodeURIComponent(result.data.search)}`
    );
  };

  return (
    <form
      onSubmit={handleSearchForm}
      className="
        mx-auto
        mb-6
        flex
        w-full
        max-w-md
        gap-2
      "
    >
      <input
        type="text"
        name="search"
        placeholder="Buscar productos..."
        className="
          flex-1
          rounded-md
          border
          border-gray-300
          px-4
          py-2
          text-sm
          md:text-base
          focus:outline-none
          focus:ring-2
          focus:ring-amber-500
        "
      />

      <button
        type="submit"
        className="
          rounded-md
          bg-amber-500
          px-4
          py-2
          text-sm
          md:text-base
          font-semibold
          text-white
          hover:bg-amber-600
          transition
        "
      >
        Buscar
      </button>
    </form>
  );
}
