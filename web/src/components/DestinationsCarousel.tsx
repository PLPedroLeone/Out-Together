'use client'

import { destinationData } from "@/data/destinationData";
import useEmblaCarousel from "embla-carousel-react"
import React, { useEffect, useState } from "react"
import { DestinationCard } from "./DestinationCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function DestinationsCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'center', loop: false });
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const scrollPrev = () => emblaApi?.scrollPrev();
    const scrollNext = () => emblaApi?.scrollNext();

    useEffect(() => {
        if(!emblaApi) return;

        const onSelect = () => {
            setCanScrollPrev(emblaApi.canScrollPrev());
            setCanScrollNext(emblaApi.canScrollNext());
        };

        emblaApi.on('select', onSelect);
        onSelect();
    }, [emblaApi]);

    return (
        <div className="relative w-full bg-[#F5E9E3] py-10">
            <div className="relative max-w-[1200px] mx-auto">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex gap-5">
                        {destinationData.map((destino) => (
                            <div key={destino.title} className="flex-[0_0_32%] transition-transform duration-300 ease-in-out">
                                <DestinationCard {...destino} />
                            </div>
                        ))}
                    </div>
                </div>
                
                {canScrollPrev && (
                    <button onClick={scrollPrev} className="absolute top-1/2 -translate-y-1/2 -left-12 z-10 bg-white p-2 cursor-pointer rounded-full shadow hover:bg-gray-100" aria-label="Anterior">
                        <ChevronLeft size={24} />
                    </button>
                )}

                {canScrollNext && (
                    <button onClick={scrollNext} className="absolute top-1/2 -translate-y-1/2 -right-12 z-10 cursor-pointer bg-white p-2 rounded-full shadow hover:bg-gray-100" aria-label="Siguiente">
                        <ChevronRight size={24} />
                    </button>
                )}
            </div>
        </div>
    )
}