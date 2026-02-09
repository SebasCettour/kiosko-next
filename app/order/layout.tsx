import OrdenSummary from "@/components/order/OrdenSummary";
import OrderSidebar from "@/components/order/OrderSidebar";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-2 md:p-4">
      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          rounded-2xl
          shadow-lg
          bg-white
          border
          border-gray-200
          overflow-hidden
          flex
          flex-col
          md:flex-row
        "
      >
        {/* Sidebar izquierda */}
        <aside
          className="
            bg-white
            md:w-60
            w-full
            px-4
            py-6
            flex-shrink-0
            border-b
            md:border-b-0
            md:border-r
            border-gray-100
          "
        >
          <OrderSidebar />
        </aside>

        {/* Contenido principal */}
        <main
          className="
            flex-1
            overflow-y-auto
            p-5
            md:p-8
            bg-white
            pb-28
            md:pb-8
          "
        >
          {children}
        </main>

        {/* Summary desktop */}
        <aside
          className="
            hidden
            md:block
            md:w-80
            p-5
            flex-shrink-0
            border-l
            border-gray-100
            bg-white
          "
        >
          <OrdenSummary />
        </aside>
      </div>

      {/* Summary mobile fijo */}
      <div
        className="
          fixed
          bottom-0
          left-0
          right-0
          z-50
          md:hidden
          bg-white
          border-t
          border-gray-100
          shadow-lg
          rounded-t-xl
        "
      >
        <OrdenSummary />
      </div>
    </div>
  );
}
