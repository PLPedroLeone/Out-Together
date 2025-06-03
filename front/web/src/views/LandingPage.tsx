import { AboutCard } from "@/components/AboutCard";
import { aboutData } from "@/data/aboutData";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
    return (
        <>
            <section id="hero" className="relative pt-16 min-h-[90vh] flex items-center">
                <Image 
                    src="/HeroImage.svg"
                    alt="Trabajadores remotos en un entorno natural"
                    fill
                    className="object-cover brightness-[0.7]"
                    priority
                />                

                <div className="container px-21 relative z-10 mx-auto px-4 py-24 text-white">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Trabajá desde lugares que te inspiren
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
                            Viví una experiencia donde el home office se convierte en comunidad.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link 
                                href="#register"
                                className="rounded-md bg-[#0369A0] px-6 py-3 text-sm font-medium text-white hover:bg-[#02587f] transition-colors min-w-[170px] max-h-[44px] text-center"
                            >
                                Quiero más info
                            </Link>
                            <Link 
                                href="#destinations"
                                className="rounded-md border border-white bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm hover:bg-white/20 transition-colors min-w-[150px] max-h-[44px] text-center"
                            >
                                Ver destinos
                            </Link>                        
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="py-20 bg-white">
                <div className="container px-21 mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#020817]">¿Qué es Out Together?</h2>
                        <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
                            Una experiencia única que combina trabajo remoto, comunidad y descanso en destinos inspiradores para freelancers y trabajadores remotos.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {aboutData.map((item, idx) => (
                            <AboutCard key={idx} {...item} />
                        ))}
                    </div>
                </div>
            </section>
        </>      
    )
} 