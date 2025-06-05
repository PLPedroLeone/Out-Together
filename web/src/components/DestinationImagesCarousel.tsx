'use client'

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

interface DestinationImagesCarouselProps {
    images: { src: string; alt: string }[]
};

export function DestinationImagesCarousel({ images }: DestinationImagesCarouselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true}, [Autoplay()]);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
    const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi])

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi]);

    useEffect(() => {
        if(!emblaApi) return;
        onSelect()
        emblaApi.on('select', onSelect)
    }, [emblaApi, onSelect]);

    return (
        <div className="relative">
            <div className="overflow-hidden rounded-t-xl" ref={emblaRef}>
                <div className="flex">
                    {images.map((image, index) => (
                        <div className="flex-[0_0_100%] relative h-64" key={index}>
                            <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 700px" />
                        </div>
                    ))}
                </div>
            </div>

            <button onClick={scrollPrev} className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 rounded-full p-1 shadow hover:bg-white">
                    <ChevronLeft className="w-5 h-5 text-gray-800" />
            </button>

            <button onClick={scrollNext} className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 rounded-full p-1 shadow hover:bg-white">
                <ChevronRight className="w-5 h-5 text-gray-800" />
            </button>

            <div className="flex justify-center gap-2 mt-2">
                {images.map((_, idx) => (
                    <button key={idx} onClick={() => scrollTo(idx)} className={`h-2 w-2 rounded-full ${selectedIndex === idx ? 'bg-gray-800' : 'bg-gray-300'}`}/>
                ))}
            </div>
        </div>
    )
}