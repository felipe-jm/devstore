"use client";

import { useSearchParams } from "next/navigation";

export function CurrentSearch() {
  const searchParams = useSearchParams();

  const query = searchParams.get("q");

  return (
    <p className="flex flex-col gap-4">
      Resultados para: <span className="font-semibold">{query}</span>
    </p>
  );
}
