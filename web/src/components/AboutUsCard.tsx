interface AboutUsCardProps {
    name: string;
    role: string;
    reason: string;
    curiosity: string;
};

export function AboutUsCard({ name, role, reason, curiosity }: AboutUsCardProps) {
    return (
        <div className="bg-white border border-[#E2E8F0] rounded-xl shadow p-6 text-left">
            <h4 className="text-lg font-bold text-[#020817]">{name}</h4>
            <p className="text-sm font-medium text-[#64748B] mb-2">{role}</p>
            <p className="text-sm mb-1 text-[#020817]"><span className="font-semibold text-[#020817]">Por qué está en Out Together:</span> {reason}</p>
            <p className="text-sm text-[#020817]"><span className="font-semibold text-[#020817]">Curiosidad:</span> {curiosity}</p>
        </div>
    );
};