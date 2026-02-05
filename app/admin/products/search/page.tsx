import Heading from "@/components/ui/Heading";
import Head from "next/head";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  return (
    <>
      <Heading>Resultado de búsqueda</Heading>
    </>
  );
}
