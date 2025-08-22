import { DestinationImagesCarousel } from "./DestinationImagesCarousel";

interface DestinationCardProps {
    title: string;
    country: string;
    images: { src: string; alt: string }[]
    description: string;
    brochure: string;
    brochureName?: string;
};

export function DestinationCard({ title, country, images, description, brochure, brochureName }: DestinationCardProps) {
    return (
        <div className="rounded-xl overflow-hidden border border-[#E2E8F0] bg-white shadow-sm">
            <DestinationImagesCarousel images={images}/>

            <div className="p-6">
                <h3 className="text-2xl font-semibold mb-1 text-[#020817]">{title}</h3>
                <p className="text-sm text-[#64748B] mb-4">{country}</p>
                <p className="text-[#020817]">{description}</p>
            </div>

            <div className="p-6 pt-0">
                <a href={brochure} target="_blank" download={brochureName ?? true} className="block text-center w-full border border-gray-300 text-sm py-2 px-4 rounded-md hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
                    Ver detalles
                </a>
            </div>
        </div>
    )
}