import React from "react";

export default function ProductSearchForm() {
  return (
    <form className="flex items-center w-full max-w-sm mx-auto mb-6">
      <input
        type="text"
        name="search"
        placeholder="Buscar productos..."
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
      ></input>
      <input
        type="submit"
        value={"Buscar"}
        className="ml-2 px-4 py-2 bg-amber-400 text-white rounded-md hover:bg-amber-500 transition-colors duration-150 cursor-pointer"
      ></input>
    </form>
  );
}
