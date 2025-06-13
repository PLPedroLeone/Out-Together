/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

interface HeroCarouselProps {
    images: { src: string; alt: string }[]
};

export function HeroCarousel({ images }: HeroCarouselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true}, [Autoplay()]);
    const [selectedIndex, setSelectedIndex] = useState(0);

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
        <div className="absolute inset-0 z-0">
            <div className="overflow-hidden w-full h-full" ref={emblaRef}>
                <div className="flex h-full">
                    {images.map((image, index) => (
                        <div className="flex-[0_0_100%] relative h-full w-full" key={index}>
                            <Image src={image.src} alt={image.alt} fill className="object-cover brightness-[0.7]" sizes="100vw" priority={index === 0} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}