import ProductForm from "./ProductForm";

export default function AddProductForm() {
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
      <ProductForm />
      <form className="space-y-5">
        <input
          type="submit"
          value="Agregar Producto"
          className="
          bg-indigo-600 
          hover:bg-indigo-700 
          transition-colors
          text-white  
          w-full
          mt-5
          p-3
          uppercase
          cursor-pointer
          "
        />
      </form>
    </div>
  );
}
