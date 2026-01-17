import OrdenSummary from "@/components/order/OrdenSummary";
import OrderSidebar from "@/components/order/OrderSidebar";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center py-6 px-2 md:px-8">
      <div className="md:flex w-full max-w-6xl rounded-2xl shadow-lg bg-white overflow-hidden border border-gray-200 transition-all duration-500 ease-in-out animate-fade-in">
        <aside className="bg-white md:w-64 px-6 pt-0 pb-6 flex-shrink-0 border-r border-gray-100 transition-all duration-500 ease-in-out">
          <OrderSidebar />
        </aside>
        <main
          className="flex-1 h-full md:h-screen overflow-y-auto p-6 md:p-10 bg-white transition-all duration-500 ease-in-out"
        >
          {children}
        </main>
        <aside className="bg-white md:w-80 p-6 flex-shrink-0 border-l border-gray-100 hidden md:block transition-all duration-500 ease-in-out">
          <OrdenSummary />
        </aside>
      </div>
      {/* OrdenSummary para mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-100 shadow-lg rounded-t-xl transition-transform duration-500 ease-in-out animate-slide-up">
        <OrdenSummary />
      </div>
    </div>
  );
}
