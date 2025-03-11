import { PageBlocos } from "@/lib/action";
import { useState, useActionState, useEffect, startTransition } from "react";

export function useBlocosPagination() {
  const [cidade, setCidade] = useState('');
  const [state, fetchPage, pending] = useActionState(PageBlocos, {
    error: false,
    blocos: [],
    page: 1,
  });

  useEffect(() => {
    startTransition(() => {
      const formData = new FormData();
      formData.append('page', '1');
      fetchPage(formData);
    });
  }, [fetchPage]);

  return { cidade, setCidade, state, fetchPage, pending };
}