"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: any) => {
    e.preventDefault();

    setLoading(true);

    const res = await fetch("/api/login", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await res.json();

    if (data.token) {
      localStorage.setItem("token", data.token);

      router.push("/admin/dashboard");
    } else {
      alert(data.error);
    }

    setLoading(false);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#020617] px-4">
      <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-3xl">
        <h1 className="mb-2 text-center text-4xl font-bold text-white">
          Admin Login
        </h1>

        <p className="mb-8 text-center text-white/50">
          Portfolio Dashboard Access
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          <input
            type="text"
            placeholder="Username"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full rounded-2xl bg-cyan-400 py-4 font-semibold text-black transition hover:opacity-80"
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </form>
      </div>
    </main>
  );
}
