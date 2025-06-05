import { Briefcase, Calendar, Coffee, LucideIcon, MapPin, Users, Wifi } from "lucide-react"

interface AboutItem {
    icon: LucideIcon;
    title: string;
    description: string;
}

export const aboutData: AboutItem[] = [
    {
        icon: Wifi,
        title: "Conectividad Garantizada",
        description: "Alojamiento cómodo con excelente conexión a internet para que puedas trabajar sin interrupciones.",
    },
    {
        icon: Briefcase,
        title: "Coworking Equipado",
        description: "Espacios de trabajo diseñados para maximizar tu productividad con todo lo que necesitas.",
    },
    {
        icon: Coffee,
        title: "Networking y Actividades",
        description: "Actividades recreativas y oportunidades de networking para conectar con otros profesionales.",
    },
    {
        icon: Users,
        title: "Comunidad",
        description: "Grupos reducidos para garantizar una experiencia personalizada y de calidad.",
    },
    {
        icon: Calendar,
        title: "5 Días de Experiencia",
        description: "3 días laborales + 2 días de ocio, el balance perfecto entre trabajo y descanso.",
    },
    {
        icon: MapPin,
        title: "Destinos Inspiradores",
        description: "Ubicaciones cuidadosamente seleccionadas para inspirar tu creatividad y productividad.",
    },
]