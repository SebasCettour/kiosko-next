"use client";
import ProductForm from "./ProductForm";

export default async function AddProductForm({ children }: { children: React.ReactNode }) {
  const handleSubmit = async (formData: FormData) => {};

  return (
    <div
      className="
    bg-white 
    mt-10 
    px-5 
    py-10 
    rounded-md 
    shadow-md 
    max-w-3xl
    mx-auto"
    >
      <form className="space-y-5" action={handleSubmit}>
        {children}
        <input
          type="submit"
          value="Crear Producto"
          className="
        bg-indigo-600 
        hover:bg-indigo-700 
        transition-shadow
        text-white
        font-semibold
        w-full
        cursor-pointer
        px-5
        rounded-md
        py-3
        mb-5"
        ></input>
      </form>
    </div>
  );
}
