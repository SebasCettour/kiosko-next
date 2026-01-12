export default function OrdenSummary() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-200 p-6 flex flex-col gap-6">
      <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-4 tracking-tight drop-shadow-sm">Mi pedido</h1>
      {/* Aquí iría el contenido del resumen de la orden */}
      <div className="flex-1 flex flex-col items-center justify-center text-gray-400 italic">
        Tu pedido está vacío
      </div>
    </div>
  );
}
