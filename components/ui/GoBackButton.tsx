"use client";
import { useRouter } from "next/navigation";

export default function GoBackButton() {
  const router = useRouter();
  return (
    <button
      className="inline-flex items-center justify-center px-6 py-2 bg-amber-400 text-white font-semibold rounded-lg shadow hover:bg-amber-500 transition-colors duration-150 text-base lg:text-sm min-w-[160px]"
      onClick={() => router.back()}
    >
      <svg
        className="mr-2 w-5 h-5 hidden sm:inline"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
      Volver
    </button>
  );
}
