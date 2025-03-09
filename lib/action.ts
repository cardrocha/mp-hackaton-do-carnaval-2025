"use server";

import type { Bloquinho } from "@/types/types";

interface PageState  {
  error: boolean;
  message?: string;
  blocos: Bloquinho[];
  page: number;
};

interface BlocoType {
  blocos: Bloquinho[]
}

export async function PageBlocos(prevState: PageState, formData: FormData) {
  const page = Number.parseInt(formData.get("page") as string) || 1;
  const city = formData.get("city") as string;

  console.log("Página solicitada:", page, "Cidade:", city);

  let url = `https://apis.codante.io/api/bloquinhos2025/agenda?page=${page}`;
  if (city) {
    url = `https://apis.codante.io/api/bloquinhos2025/agenda?city=${encodeURIComponent(city)}`;
  }

  const res = await fetch(url, { method: "GET" });

  if (!res.ok) {
    return {
      error: true,
      message: "Erro ao buscar os blocos. Tente novamente.",
      blocos: [],
      page: prevState.page,
    };
  }

  const data = await res.json();
  return { error: false, blocos: data.data, page };
}

export async function SearchBlocos(_: BlocoType, formData: FormData) {
  const city = formData.get("city") as string;

  if (!city) return { error: true, blocos: [] };

  const response = await fetch(
    `https://apis.codante.io/api/bloquinhos2025/agenda?city=${encodeURIComponent(city)}`
  );

  if (!response.ok) return { error: true, blocos: [] };

  const data = await response.json();
  return { error: false, blocos: data.data };
}
