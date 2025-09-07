'use client'

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-200 bg-[#f1e0d6]/80 backdrop-blur-md">
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 h-16 flex items-center">
        <Link href="#hero" className="shrink-0">
          <Image
            src="/Icons/Logo.png"
            alt="Out Together Logo"
            width={83}
            height={40}
            priority
          />
        </Link>

        <nav className="hidden md:flex gap-20 text-sm font-medium text-[#020817] absolute left-1/2 -translate-x-1/2">
          <Link href="#about" className="hover:text-[#2a8873] transition-colors">
            ¿Qué es?
          </Link>
          <Link href="#about-us" className="hover:text-[#2a8873] transition-colors">
            ¿Quiénes Somos?
          </Link>
          <Link href="#destinations" className="hover:text-[#2a8873] transition-colors">
            Destinos
          </Link>
          <Link href="#register" className="hover:text-[#2a8873] transition-colors">
            Contáctanos
          </Link>
        </nav>

        <Link
          href="#register"
          className="ml-auto inline-flex h-9 items-center justify-center rounded-md bg-[#2a8873] px-4 text-sm font-medium text-white hover:bg-[#4a8e7c] transition-colors"
        >
          Sumate a la comunidad
        </Link>
      </div>
    </header>
  );
}