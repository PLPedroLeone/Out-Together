import { AboutCard } from "@/components/AboutCard";
import { AboutUsCard } from "@/components/AboutUsCard";
import DestinationsCarousel from "@/components/DestinationsCarousel";
import { Footer } from "@/components/Footer";
import { RegisterForm } from "@/components/Form";
import { HeroCarousel } from "@/components/HeroCarousel";
import { TestimonialCard } from "@/components/TestimonialCard";
import { aboutData } from "@/data/aboutData";
import { aboutUsData } from "@/data/aboutUsData";
import { heroImages } from "@/data/heroImagesData";
import { testimonialsData } from "@/data/testimonialsData";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
    return (
        <>
            <section id="hero" className="relative pt-16 min-h-[90vh] flex items-center overflow-hidden">
                <HeroCarousel images={heroImages} />

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
                                className="rounded-md bg-[#2a8873] px-6 py-3 text-sm font-medium text-white hover:bg-[#4a8e7c] transition-colors min-w-[170px] max-h-[44px] text-center"
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

            <section id="about" className="py-20 bg-[#F7FFFC]">
                <div className="mx-auto max-w-[1200px] px-8 sm:px-6 lg:px-8">
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

            <section id="meeting" className="relative pt-16 min-h-[90vh] flex items-center overflow-hidden">
                <Image src="/destination-images/bodega/bodega-gamboa.jpg" alt="Bodega Gamboa" fill className="object-cover brightness-[0.5]" priority />

                <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-24 text-white">
                    <div className="text-center max-w-5xl mx-auto">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Bodega Gamboa</h2>
                        <p className="text-xl md:text-3xl mb-8">
                            Nuestro punto de encuentro para que vivas una experiencia previa a los viajes y que pueda unirse a la comunidad Out Together.
                        </p>
                        <div className="flex justify-center items-center gap-4">
                            <a
                                href="/brochures/bodega-brochure.pdf"
                                target="_blank" 
                                download="OutTogether-Bodega.pdf"
                                className="inline-flex h-11 items-center justify-center rounded-md bg-[#2a8873] px-6 text-sm font-medium text-white hover:bg-[#4a8e7c] transition-colors min-w-[170px] text-center"
                            >
                                Ver detalles
                            </a>
                            <Link
                                href="#register"
                                className="inline-block rounded-md bg-[#2a8873] px-6 py-3 text-sm font-medium text-white hover:bg-[#4a8e7c] transition-colors min-w-[170px] text-center"
                            >
                                Ver próximas salidas
                            </Link>
                        </div>
                    </div>
                </div>                
            </section>

            <section id="destinations" className="py-20 bg-[#F5E9E3]">
                <div className="mx-auto max-w-[1200px] px-8 sm:px-6 lg:px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#020817]">Nuestros Destinos</h2>
                        <p className="text-lg text-[#64748B] max-w-2xl mx-auto">Descubre los increíbles lugares donde podrás trabajar, conectar y disfrutar con Out Together.</p>
                    </div>

                    <DestinationsCarousel />
                </div>
            </section>

            <section id="register" className="py-20 bg-[#F7FFFC]">
                <div className="mx-auto max-w-[1200px] px-8 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#020817]">¿Te interesa la experiencia?</h2>
                            <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
                                Completá el formulario y te enviaremos toda la información sobre nuestras próximas salidas.
                            </p>
                        </div>

                        <div className="rounded-xl border border-[#E2E8F0] bg-white shadow-sm p-6">
                            <h3 className="text-2xl font-semibold mb-1 text-[#020817]">Solicitar información</h3>
                            <p className="text-sm text-[#64748B] mb-6">Completá tus datos y nos pondremos en contacto contigo.</p>
                            <RegisterForm />
                        </div>

                        <div className="p-6 pt-6 text-center">
                            <p className="text-md text-[#64748B] mb-6">¿Querés agendar una reunión con el equipo?</p>
                            <div className="flex justify-center items-center">
                                <a href="https://calendly.com/pfm-out-together/30min" target="_blank" className="rounded-md w-full bg-[#2a8873] px-3 py-2 text-sm font-medium text-white hover:bg-[#4a8e7c] min-h-[40px] max-w-[200px] transition-colors cursor-pointer flex justify-center items-center">
                                    Agendar una reunion
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="testimonials" className="py-20 bg-[#F5E9E3]">
                <div className="mx-auto max-w-[1200px] px-8 sm:px-6 lg:px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#020817]">Lo que dicen nuestros viajeros</h2>
                        <p className="text-lg text-[#64748B] max-w-2xl mx-auto">Experiencias reales de personas que ya vivieron Out Together.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-y-12">
                        {testimonialsData.map((testimonial, index) => (
                            <TestimonialCard key={index} {...testimonial}/>
                        ))}
                    </div>
                </div>
            </section>

            <section id="about-us" className="py-20 bg-[#F7FFFC]">
                <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 max-w-5xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#020817]">Quiénes Somos</h2>
                        <p className="text-lg text-[#64748B]">
                            Nuestro servicio de viaje que combina trabajo, ocio y comunidad ayuda a trabajadores remotos e híbridos que trabajan con frecuencia en casa, pero también a quienes quieren cambiar de entorno, conectarse con otros y mantener su bienestar. Organizamos viajes de corta duración a destinos naturales —nacionales o internacionales— con alojamiento confortable, espacios de coworking bien equipados, y la planificación de eventos de networking y actividades de bienestar/recreativas en grupos reducidos. <br /><br />
                            Nuestro diferencial es crear comunidad: una experiencia que combina productividad, descanso e inspiración en un entorno socialmente activo.
                        </p>
                    </div>

                    <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-[#020817]">Nuestro equipo</h3>
                        <p className="text-[#64748B] max-w-2xl mx-auto">
                            Somos un grupo de amigos que se conocieron en el EMBA y decidieron transformar la manera de trabajar viajando.
                        </p>
                    </div>

                    <div className="flex gap-2 justify-center overflow-x-auto md:overflow-visible px-2">
                        {aboutUsData.map((person) => (
                            <AboutUsCard key={person.name} {...person} />
                        ))}
                    </div>
                </div>
            </section>

            <section id="cta" className=" min-h-[356px] py-20 bg-[#0e443a] text-primary-foreground">
                <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        ¿Listo para una nueva forma de trabajar?
                    </h2>
                    <p className="text-xl mb-10 max-w-2xl">
                        Únete a nuestra comunidad de nómadas digitales y transforma tu experiencia de trabajo remoto.
                    </p>
                    <Link
                        href="#register"
                        className="rounded-sm bg-[#F1F5F9] px-8 py-3.5 text-sm font-medium text-black hover:bg-[#e2e8f0] transition-colors"
                    >
                        Sumate a la comunidad
                    </Link>
                </div>
            </section>

            <Footer />
        </>      
    )
} 