
import OrdenSummary from "@/components/order/OrdenSummary";
import OrderSidebar from "@/components/order/OrderSidebar";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center py-6 px-2 md:px-8">
      <div className="md:flex w-full max-w-6xl rounded-2xl shadow-xl bg-white overflow-hidden border border-gray-200">
        <aside className="bg-gray-100 md:w-64 p-6 flex-shrink-0 border-r border-gray-200">
          <OrderSidebar />
        </aside>
        <main
          className="flex-1 h-full md:h-screen overflow-y-auto p-6 md:p-10 bg-white"
        >
          {children}
        </main>
        <aside className="bg-gray-50 md:w-80 p-6 flex-shrink-0 border-l border-gray-200 hidden md:block">
          <OrdenSummary />
        </aside>
      </div>
      {/* OrdenSummary para mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 shadow-lg">
        <OrdenSummary />
      </div>
    </div>
  );
}
