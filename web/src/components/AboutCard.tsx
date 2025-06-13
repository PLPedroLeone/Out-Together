import { LucideIcon } from "lucide-react";

interface AboutCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
};

export function AboutCard({ icon: Icon, title, description }: AboutCardProps) {
    return (
        <div className="flex flex-col items-center text-center p-6 rounded-lg border border-[#E2E8F0] bg-white shadow-sm">
            <div className="bg-[#F2FAF8] p-3 rounded-full mb-4">
                <Icon className="h-6 w-6 text-[#2a8873]" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#020817]">{title}</h3>
            <p className="text-[#64748B]">{description}</p>
        </div>
    );
};