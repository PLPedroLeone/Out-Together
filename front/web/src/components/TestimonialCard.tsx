import Image from "next/image";

interface TestimonialCardProps {
    name: string;
    title: string;
    comments: string;
    image: string;
    alt: string;
};

export function TestimonialCard( { name, title, comments, image, alt }: TestimonialCardProps) {
    return (
        <div className="bg-white rounded-lg overflow-hidden border border-[#E2E8F0] shadow-sm p-6 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                <Image src={image} alt={alt} width={64} height={64} className="object-cover" />
            </div>

            <h3 className="text-md font-semibold text-[#020817]">{name}</h3>
            <p className="text-sm text-[#64748B] mb-4">{title}</p>
            <p className="italic text-[#020817] max-w-[95%]">{comments}</p>
        </div>
    )
}