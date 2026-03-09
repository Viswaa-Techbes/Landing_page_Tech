"use client";

import { useState } from "react";
import Image from "next/image";
import ForgotPasswordModal from "@/components/ForgotPasswordModal";

export default function LoginModal({ open, onClose }) {

  const [forgotOpen, setForgotOpen] = useState(false);
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!open) return null;

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {

      const res = await fetch("https://members.techbes.co.in/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          identifier,
          password
        })
      });

      if (!res.ok) {
        throw new Error("Server error");
      }

      const data = await res.json();

      if (!data.success) {
        setError(data.message || "Invalid credentials");
        setLoading(false);
        return;
      }

      // store token
      localStorage.setItem("techbes_token", data.token);

      // redirect
      if (data.role === "admin") {
        window.location.href = "https://members.techbes.co.in/admin";
      } else {
        window.location.href = "https://members.techbes.co.in/dashboard";
      }

    } catch (err) {
      console.error("Login error:", err);
      setError("Server error. Please try again.");
      setLoading(false);
    }
  };

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">

        {/* Modal */}
        <div className="w-full max-w-md bg-[#0f172a] rounded-2xl shadow-2xl p-8 relative text-white">

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white"
          >
            ✕
          </button>

          {/* Logo */}
          <div className="text-center mb-6">
            <Image
              src="/logo.png"
              alt="TechBes Logo"
              width={160}
              height={60}
              className="mx-auto"
            />
          </div>

          <h2 className="text-2xl font-bold mb-6 text-center">
            Login to your account
          </h2>

          <form onSubmit={handleLogin} className="space-y-4">

            {/* Email / Phone */}
            <input
              type="text"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              placeholder="Email or Mobile"
              required
              className="w-full px-4 py-3 rounded-xl bg-[#1e293b] border border-gray-700 focus:border-blue-500 outline-none"
            />

            {/* Password */}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="w-full px-4 py-3 rounded-xl bg-[#1e293b] border border-gray-700 focus:border-orange-500 outline-none"
            />

            {/* Error */}
            {error && (
              <div className="text-red-400 text-sm">
                {error}
              </div>
            )}

            {/* Forgot password */}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setForgotOpen(true)}
                className="text-sm text-blue-400 hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-orange-500 hover:opacity-90 transition"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

          </form>
        </div>
      </div>

      {/* Forgot Password Modal */}
      <ForgotPasswordModal
        open={forgotOpen}
        onClose={() => setForgotOpen(false)}
      />
    </>
  );
}