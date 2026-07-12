"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";

export default function RemoveFromCartButton({ cartItemId }: { cartItemId: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    await fetch(`/api/cart/${cartItemId}`, { method: "DELETE" });
    router.refresh();
  }

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="flex items-center gap-2 rounded-xl border border-stone-200 px-4 py-2 text-sm font-semibold text-stone-600 transition hover:border-red-300 hover:text-red-600"
    >
      <X size={16} />
      Retirer
    </button>
  );
}
