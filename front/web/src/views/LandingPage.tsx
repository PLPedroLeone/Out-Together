import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
    return (        
        <section className="relative pt-16 min-h-[90vh] flex items-center">
            <Image 
                src="/HeroImage.svg"
                alt="Trabajadores remotos en un entorno natural"
                fill
                className="object-cover brightness-[0.7]"
                priority
            />                

            <div className="container px-19 relative z-10 mx-auto px-4 py-24 text-white">
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
    )
} 