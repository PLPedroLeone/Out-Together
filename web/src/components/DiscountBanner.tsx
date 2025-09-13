'use client';

import React, { useEffect, useRef, useState } from 'react';

type Props = {
  /** id del elemento a observar; por defecto '#destinations' */
  targetId?: string;
  /** en milisegundos; 0 = no usar */
  localStorageTtlMs?: number; // p.ej. 7 días = 7*24*60*60*1000
};

const STORAGE_KEY = 'ot-discount-banner';
const SESSION_KEY = 'ot-discount-session-shown';

export function DiscountBanner({ targetId = 'destinations', localStorageTtlMs = 0 }: Props) {
  const [open, setOpen] = useState(false);
  const ctaRef = useRef<HTMLAnchorElement | null>(null);

  // helper: ¿debemos mostrar? (no en SSR)
  const canShow = () => {
    if (typeof window === 'undefined') return false;

    // 1) ya mostrado en esta sesión
    if (sessionStorage.getItem(SESSION_KEY) === '1') return false;

    // 2) ttl en localStorage
    if (localStorageTtlMs > 0) {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const { ts } = JSON.parse(raw);
          if (Date.now() - ts < localStorageTtlMs) return false;
        }
      } catch {}
    }

    return true;
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!canShow()) return;

    const el = document.getElementById(targetId);
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
                setOpen(true);
                sessionStorage.setItem(SESSION_KEY, '1');
            }, 150);
          if (localStorageTtlMs > 0) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify({ ts: Date.now() }));
          }
        }
      },
      { threshold: 0.4 }
    );

    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetId]);

  // cerrar con ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  // foco en CTA cuando abre
  useEffect(() => {
    if (open) {
      setTimeout(() => ctaRef.current?.focus(), 50);
      // bloquear scroll body opcional:
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [open]);

  if (!open) return null;

  const goRegister = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    // scroll suave al formulario
    const reg = document.getElementById('register');
    reg?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Overlay (desktop y tablet) */}
      <div
        aria-hidden="true"
        className="hidden sm:block fixed inset-0 bg-black/40 backdrop-blur-[1px] z-[60] animate-in fade-in duration-200"
        onClick={() => setOpen(false)}
      />

      {/* Modal desktop centrado */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="discount-title"
        className="
          hidden sm:flex fixed inset-0 z-[61] items-center justify-center p-4
          animate-in fade-in-0 zoom-in-95 duration-200
        "
      >
        <div className="w-full max-w-md rounded-xl bg-white shadow-xl border border-gray-200 p-6 text-center">
          <h3 id="discount-title" className="text-2xl font-bold text-[#020817]">
            10% OFF para vos y tu amigo!
          </h3>
          <p className="mt-2 text-sm text-[#475569]">
            Dejanos tus datos y obtené el descuento para nuestro primer viaje en 2026!.
          </p>

          <div className="mt-6 flex gap-3 justify-center">
            <a
              ref={ctaRef}
              href="#register"
              onClick={goRegister}
              className="inline-flex h-11 items-center justify-center rounded-md bg-[#2a8873] px-5 text-white text-sm font-medium hover:bg-[#4a8e7c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2a8873]"
            >
              Quiero el descuento
            </a>
            <button
              onClick={() => setOpen(false)}
              className="inline-flex h-11 items-center justify-center rounded-md border border-gray-300 px-4 text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
            >
              Más tarde
            </button>
          </div>

          <p className="mt-3 text-xs text-[#64748B]">
            Solo por hoy. Aplican términos y condiciones.
          </p>
        </div>
      </div>

      {/* Bottom sheet mobile */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="discount-title-mobile"
        className="
          sm:hidden fixed left-0 right-0 bottom-0 z-[61]
          rounded-t-2xl bg-white shadow-2xl border-t border-gray-200
          p-5 animate-in slide-in-from-bottom duration-200
        "
      >
        <h3 id="discount-title-mobile" className="text-xl font-bold text-[#020817]">
          10% OFF para vos y un amigo
        </h3>
        <p className="mt-1 text-sm text-[#475569]">
          Dejanos tus datos y te enviamos el beneficio.
        </p>

        <div className="mt-4 flex gap-2">
          <a
            ref={ctaRef}
            href="#register"
            onClick={goRegister}
            className="inline-flex h-11 flex-1 items-center justify-center rounded-md bg-[#2a8873] px-4 text-white text-sm font-medium hover:bg-[#4a8e7c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2a8873]"
          >
            Conseguir descuento
          </a>
          <button
            onClick={() => setOpen(false)}
            className="inline-flex h-11 items-center justify-center rounded-md border border-gray-300 px-4 text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
          >
            Cerrar
          </button>
        </div>
      </div>
    </>
  );
}