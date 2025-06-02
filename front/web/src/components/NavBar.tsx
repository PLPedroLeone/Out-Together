'use client'

import Link from "next/link";
import React from "react";

export default function NavBar() {
    return (
        <header className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <span className="text-xl font-bold text-[#020817]">Out Together</span>

                <nav className="hidden md:flex gap-6 text-sm font-medium text-[#020817]">
                    <Link href="#about" className="hover:text-[#0369A0] transition-colors">¿Qué es?</Link>
                    <Link href="#destinations" className="hover:text-[#0369A0] transition-colors">Destinos</Link>
                    <Link href="#register" className="hover:text-[#0369A0] transition-colors">Registro</Link>
                </nav>

                <Link
                    href="#register"
                    className="rounded-md bg-[#0369A0] px-4 py-2 text-sm font-medium text-white hover:bg-[#02587f] transition-colors"
                >
                    Sumate a la Comunidad
                </Link>
            </div>
        </header>
    )
}