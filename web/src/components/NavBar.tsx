'use client'

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NavBar() {
    return (
        <header className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
            <div className="container px-21 mx-auto flex h-16 items-center justify-between px-4">
                <Link href="#hero">
                    <Image src="/Icons/Logo.jpeg" alt="Out Together Logo" width={83} height={40} priority />
                </Link>

                <nav className="hidden md:flex gap-6 text-sm font-medium text-[#020817]">
                    <Link href="#about" className="hover:text-[#0369A0] transition-colors">¿Qué es?</Link>
                    <Link href="#about-us" className="hover:text-[#0369A0] transition-colors">¿Quienes Somos?</Link>
                    <Link href="#destinations" className="hover:text-[#0369A0] transition-colors">Destinos</Link>
                    <Link href="#register" className="hover:text-[#0369A0] transition-colors">Contáctanos</Link>
                </nav>

                <Link
                    href="#register"
                    className="rounded-md bg-[#0369A0] px-3 py-2 text-sm font-medium text-white hover:bg-[#02587f] transition-colors"
                >
                    Sumate a la comunidad
                </Link>
            </div>
        </header>
    )
}