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
      search: (formData.get("search") ?? "").toString(),
    };
    const result = SearchSchema.safeParse(data);
    if (!result.success) {
      result.error.issues.forEach((issue) => {
        toast.error(issue.message);
      });
      return;
    }
    router.push(`/admin/products/search?search=${encodeURIComponent(result.data.search)}`);
  };
  return (
    <form
      className="flex items-center w-full max-w-sm mx-auto mb-6"
      onSubmit={handleSearchForm}
    >
      <input
        type="text"
        name="search"
        placeholder="Buscar productos..."
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
      />
      <input
        type="submit"
        value={"Buscar"}
        className="ml-2 px-4 py-2 bg-amber-400 text-white rounded-md hover:bg-amber-500 transition-colors duration-150 cursor-pointer"
      />
    </form>
  );
}
