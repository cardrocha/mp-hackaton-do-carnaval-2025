"use client";

import { PageBlocos } from "@/lib/action";
import { FeedList } from "./FeedList";
import { useActionState, useEffect } from "react";
import { startTransition } from "react";

export default function FeedPage() {
  const [state, fetchPage, pending] = useActionState(PageBlocos, {
    error: false,
    blocos: [],
    page: 1,
  });

  useEffect(() => {
    startTransition(() => {
      const formData = new FormData();
      formData.append("page", "1");
      fetchPage(formData);
    });
  }, [fetchPage]);

  const handleNextPage = () => {
    if (state.page === 210) {
      alert("Seu carnaval chegou ao fim, volte a página anterior!")
    } else {
      startTransition(() => {
        const formData = new FormData();
        formData.append("page", ((state.page ?? 1) + 1).toString());
        fetchPage(formData);
      });
    }
  };

  const handlePreviousPage = () => {
    if (state.page === 1) {
      alert("Peraí, folião! Carnaval começou! Clique em 'Próxima'!");
    } else {
      startTransition(() => {
        const formData = new FormData();
        formData.append("page", ((state.page ?? 1) - 1).toString());
        fetchPage(formData);
      });
    }
  };

  return (
    <article className="w-[610px]">
      <h1 className="bg-yellow-500 text-center text-lg font-semibold rounded-t-xl py-1">
        🎉 Destaque do Carnaval 🎉
      </h1>
      <div className="flex flex-col bg-white text-black p-4 mb-2.5 rounded-b-lg gap-3">
        <div>
          <h2 className="text-lg font-semibold">GRES União do FullStack</h2>
          <p className="font-light">⭐ Segue na Série A</p>
        </div>
        <div>
          <span className="font-semibold">📅 Sexta 28/02</span>
          <div className="flex items-center justify-between">
            <span className="font-semibold">⏰ 22h - 23h</span>
            <span className="bg-yellow-400 px-3 py-1 rounded-full font-semibold">
              Escola de Samba
            </span>
          </div>
          <span className="font-semibold">📍 Sambódromo da Marquês de Sapucaí</span>
        </div>
      </div>

      <h2 className="font-oxanium text-xl text-center bg-violet-950 text-yellow-400 font-semibol px-2 w-[610px]">
        Lista de Bloquinhos
      </h2>

      <div className="flex items-center justify-between px-2">
        <button
          type="button"
          onClick={handlePreviousPage}
          className="text-xl font-semibold font-oxanium bg-amber-400 px-4 border hover:brightness-150 rounded-full cursor-pointer mt-2"
        >
          Anterior
        </button>
        <button
          type="button"
          onClick={handleNextPage}
          className="text-xl font-semibold font-oxanium bg-amber-400 px-4 border hover:brightness-150 rounded-full cursor-pointer mt-2"
        >
          Próxima
        </button>
      </div>

      {pending ? (
        <p className="text-2xl font-bold text-center h-screen mt-10">
          Colocando o bloco na rua... prepare a fantasia!
        </p>
      ) : state.error ? (
        <p className="text-red-500 text-center mt-5">{state.message}</p>
      ) : (
        <FeedList bloco={state.blocos} />
      )}
    </article>
  );
}
