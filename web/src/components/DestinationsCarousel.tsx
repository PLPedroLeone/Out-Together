'use client'

import { destinationData } from "@/data/destinationData";
import useEmblaCarousel from "embla-carousel-react"
import React, { useCallback, useEffect, useState } from "react"
import { DestinationCard } from "./DestinationCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function DestinationsCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: 'start',
        loop: false,
        containScroll: 'trimSnaps',
    });
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const scrollPrev = () => emblaApi?.scrollPrev();
    const scrollNext = () => emblaApi?.scrollNext();

    const scrollTo = useCallback((index: number) => {
        emblaApi?.scrollTo(index);
    }, [emblaApi]);

    useEffect(() => {
        if(!emblaApi) return;

        const onSelect = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
            setCanScrollPrev(emblaApi.canScrollPrev());
            setCanScrollNext(emblaApi.canScrollNext());
        };

        setScrollSnaps(emblaApi.scrollSnapList())
        emblaApi.on('select', onSelect);
        onSelect();
    }, [emblaApi]);

    return (
        <div className="relative w-full bg-[#F5E9E3] py-10">
            <div className="relative max-w-[1200px] mx-auto">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex gap-5">
                        {destinationData.map((destino) => (
                            <div key={destino.title} className="shrink-0 flex-[0_0_85%] sm:basis-[calc((100%_-_1.25rem)/2)] lg:basis-[calc((100%_-_2.5rem)/3)] transition-transform duration-300 ease-in-out">
                                <DestinationCard {...destino} />
                            </div>
                        ))}
                    </div>
                </div>
                
                {canScrollPrev && (
                    <button onClick={scrollPrev} className="hidden sm:flex absolute top-1/2 -translate-y-1/2 -left-12 z-10 bg-white p-2 cursor-pointer rounded-full shadow hover:bg-gray-100" aria-label="Anterior">
                        <ChevronLeft size={24} />
                    </button>
                )}

                {canScrollNext && (
                    <button onClick={scrollNext} className="hidden sm:flex absolute top-1/2 -translate-y-1/2 -right-12 z-10 cursor-pointer bg-white p-2 rounded-full shadow hover:bg-gray-100" aria-label="Siguiente">
                        <ChevronRight size={24} />
                    </button>
                )}

                <div className="flex justify-center gap-2 mt-4">
                    {scrollSnaps.map((_, idx) => (
                        <button key={idx} onClick={() => scrollTo(idx)} className={`h-3 w-3 rounded-full transition-colors duration-300 ${selectedIndex === idx ? 'bg-gray-800' : 'bg-gray-300'}`} aria-label={`Ir a la tarjeta ${idx + 1}`}/>
                    ))}
                </div>
            </div>
        </div>
    )
}