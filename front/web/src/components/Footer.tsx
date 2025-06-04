import Link from "next/link";

const SOCIALS = [
  {
    href: "#",
    label: "Facebook",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20" height="20"
        viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "Instagram",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20" height="20"
        viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "Twitter",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20" height="20"
        viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round"
      >
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 12 8v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="py-12 bg-[#F8FAFC] border-t">
      <div className="container px-21 mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="font-bold text-xl mb-2">Out Together</h2>
            <p className="text-sm text-[#64748B]">Experiencias de trabajo remoto en destinos inspiradores.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 text-center md:text-left">
            <div>
              <h3 className="font-semibold mb-2">Contacto</h3>
              <p className="text-sm text-[#64748B]">info@outtogether.com</p>
              <p className="text-sm text-[#64748B]">+54 11 1234-5678</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Síguenos</h3>
              <div className="flex justify-center md:justify-start gap-4">
                {SOCIALS.map((item, i) => (
                  <Link key={i} href={item.href} aria-label={item.label} className="text-[#64748B] hover:text-[#0369A0] transition-colors">
                    {item.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-[#64748B]">
          <p>© {new Date().getFullYear()} Out Together. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}