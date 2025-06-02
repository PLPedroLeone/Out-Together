import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Out Together | Viajes para Trabajadores Remotos",
  description: "Experiencias de trabajo remoto en destinos inspiradores para freelancers y trabajadores remotos.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
          <NavBar />
          {children}
      </body>
    </html>
  )
}
