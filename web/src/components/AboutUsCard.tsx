import Image from "next/image";

interface AboutUsCardProps {
    name: string;
    role: string;
    reason: string;
    curiosity: string;
    image: string;
    alt: string;
};

export function AboutUsCard({ name, role, reason, curiosity, image, alt }: AboutUsCardProps) {
    return (
        <div className="bg-white border max-w-[300px] border-[#E2E8F0] rounded-xl shadow p-6 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                <Image src={image} alt={alt} width={64} height={64} className="object-cover" />
            </div>

            <h4 className="text-lg font-bold text-[#020817]">{name}</h4>
            <p className="text-sm font-medium text-[#64748B] mb-2">{role}</p>
            <p className="text-sm mb-1 text-[#020817]">{reason}</p>
            <p className="text-sm text-[#020817]">{curiosity}</p>
        </div>
    );
};