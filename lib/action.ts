"use server";

import type { Bloquinho } from "@/types/types";

type PageState = {
  error: boolean;
  message?: string;
  blocos: Bloquinho[];
  page: number;
};

export async function PageBlocos(prevState: PageState, formData: FormData) {
  const page = Number.parseInt(formData.get("page") as string) || 1;

  console.log("Página solicitada:", page);

  const res = await fetch(
    `https://apis.codante.io/api/bloquinhos2025/agenda?page=${page}`,
    { method: "GET" }
  );

  if (!res.ok) {
    return {
      error: true,
      message: "Erro ao buscar os blocos. Tente novamente.",
      blocos: [],
      page: prevState.page, // Mantém a página atual caso falhe
    };
  }

  const data = await res.json();
  return { error: false, blocos: data.data, page };
}