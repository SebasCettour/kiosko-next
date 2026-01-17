import React from "react";

export default function Toast({
  message,
  show,
}: {
  message: string;
  show: boolean;
}) {
  return (
    <div
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-lg shadow-lg bg-amber-500 text-white font-bold text-lg transition-all duration-500 ${
        show
          ? "opacity-100 scale-100"
          : "opacity-0 scale-95 pointer-events-none"
      }`}
    >
      {message}
    </div>
  );
}
