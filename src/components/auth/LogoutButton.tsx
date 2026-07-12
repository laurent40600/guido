"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/");
    router.refresh();
  }

  return (
    <button
      onClick={handleLogout}
      className="rounded-xl border border-stone-200 bg-white px-4 py-2 text-sm font-semibold text-stone-600 transition hover:border-gold-600 hover:text-gold-700"
    >
      Se déconnecter
    </button>
  );
}
