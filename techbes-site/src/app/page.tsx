"use client";
import Image from "next/image";
import Link from "next/link";
import LoginPopup from "@/components/LoginModal";
import { useState } from "react";

export default function ComingSoonPage() {
  const services = [
    "Network Infrastructure Solutions",
    "Annual Maintenance Contracts (AMC)",
    "Electrical Services",
    "CCTV Installation & Surveillance",
    "Laptop & Desktop Services",
    "Networking Services",
    "IT & Security Services",
  ];

  const [openLogin, setOpenLogin] = useState(false);
  return (
    /*
     * Mobile  → normal page flow, scrollable, video at top
     * Desktop → fixed side-by-side, no scroll (100dvh, overflow-hidden)
     */
    <main className="
      flex flex-col bg-gray-50 font-sans text-gray-900 md:h-[100dvh] md:flex-row md:overflow-hidden">
      <LoginPopup open={openLogin} onClose={() => setOpenLogin(false)} />

      {/* ── VIDEO PANEL ──────────────────────────────────────────── */}
      {/* Mobile: top banner, natural height. Desktop: full-height right column */}
      <section className="relative w-full overflow-hidden h-[52vw] max-h-[320px] min-h-[200px] md:order-2 md:h-full md:max-h-none md:min-h-0 md:w-[45%] md:shrink-0">
        <video autoPlay muted loop playsInline
          className="h-full w-full object-cover brightness-[0.8]">
          <source src="/techbes_bg_video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50/80 via-transparent to-transparent md:bg-gradient-to-r md:from-gray-50 md:via-gray-50/30 md:to-transparent" />
      </section>

      {/* ── CONTENT PANEL ────────────────────────────────────────── */}
      {/* Mobile: natural flow with tight spacing. Desktop: fills remaining height */}
      <section className="order-2 flex flex-col px-5 py-4 gap-4 md:order-1 md:h-full md:min-h-0 md:w-[55%] md:flex-none md:justify-between md:gap-0">

        {/* 1. LOGO + BADGE */}
        <div className="flex flex-col gap-2">
          <Image
            src="/logo-removebg-preview.png"
            alt="Techbes"
            width={240}
            height={120}
            className="h-[80px] w-auto object-contain object-left md:h-[clamp(64px,9vw,110px)]"
            priority
          />
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-600/20 bg-blue-50 px-3 py-[4px] font-mono text-[10px] uppercase tracking-widest text-blue-600 md:text-[11px]">
            <span className="h-[6px] w-[6px] animate-pulse rounded-full bg-blue-600" />
            Launching Soon
          </span>
        </div>

        {/* 2. HEADLINE + DESCRIPTION */}
        <div className="flex flex-col gap-1">
          <h1 className="text-[28px] font-extrabold leading-[1.1] tracking-tight md:text-[clamp(22px,3.5vw,48px)]">
            Enterprise IT Infrastructure.<br />
            <span className="text-blue-600">Reimagined</span> for<br />
            the Digital Era.
          </h1>
          <p className="text-[13px] text-gray-700 md:text-[clamp(11px,1.5vw,15px)]">
            Full Website &amp; Service Platform Launching Soon.
          </p>
          <p className="text-[12px] leading-relaxed text-gray-500 md:max-w-[420px] md:text-[clamp(10px,1.2vw,14px)]">
            A unified IT infrastructure &amp; service management platform
            engineered for enterprises operating at scale across India.
          </p>
        </div>

        {/* 3. SERVICES */}
        <div>
          <p className="mb-1.5 font-mono text-[10px] uppercase tracking-widest text-gray-400">
            Services
          </p>
          <ul className="grid grid-cols-2 gap-x-3 gap-y-1">
            {services.map((svc) => (
              <li key={svc} className="flex items-center gap-1.5">
                <span className="h-[4px] w-[4px] shrink-0 rounded-full bg-blue-600" />
                <span className="text-[12px] text-gray-800 leading-tight md:text-[clamp(10px,1.1vw,13px)]">{svc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 4. CTA */}
        <div className="flex flex-col gap-2">
          <p className="text-[12px] leading-snug text-gray-500 md:max-w-[420px] md:text-[clamp(10px,1.1vw,13px)]">
            <strong className="font-semibold text-gray-800">Be the first to know.</strong>{" "}
            Subscribe and we&apos;ll notify you the moment we go live.
          </p>
          <div className="flex gap-2">
            <Link
              href="https://members.techbes.co.in/"
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-[#f46b20] to-[#d44a0a] px-5 py-2 text-[13px] font-semibold text-white transition hover:brightness-110"
            >
              Subscribe Now
            </Link>
            <button
              onClick={() => setOpenLogin(true)}
              className="inline-flex items-center justify-center rounded-md border-2 border-orange-500 px-4 py-2 text-[13px] font-semibold text-orange-500 transition hover:bg-orange-500 hover:text-white"
            >
              Login
            </button>
          </div>
        </div>

        {/* 5. META */}
        <div className="flex items-center gap-2 text-[11px] text-gray-400 pb-2 md:pb-0">
          <span>Bangalore, Karnataka</span>
          <span className="h-[3px] w-[3px] rounded-full bg-gray-300" />
          <span>© 2026 Techbes</span>
        </div>

      </section>
    </main>
  );
}