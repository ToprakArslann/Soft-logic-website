"use client"
import Image from "next/image"
import { useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";

export default function About() {
    const text = "In a world of sharp edges and rigid grids, we choose the soft, the fluid, and the organic. We craft digital atmospheres where logic meets luxury.";
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start 0.8", "start 0.25"]
    })

    const words = text.split(" ");

    return (
        <section className="flex flex-col items-center">
            <div ref={container} className="text-[3.8vw] tracking-tighter font-black p-10 flex flex-wrap justify-center text-center gap-x-[0.25em] leading-tight max-w-[90%]">
                {words.map((word, i) => {
                    const start = i / words.length;
                    const end = start + (1 / words.length);
                    return <Word key={i} range={[start, end]} progress={scrollYProgress}>{word}</Word>
                })}
            </div>
            <div className="flex w-full relative h-[600px]">
                <Image src="/cloud1.png" alt="about1" width={700} height={600} className="absolute left-0" />
                <Image src="/cloud22.png" alt="about2" width={700} height={600} className="absolute right-0 top-0 -translate-y-8" />
            </div>
        </section>
    )
}

const Word = ({ children, range, progress }: { children: string, range: [number, number], progress: any }) => {
    const opacity = useTransform(progress, range, [0, 1]);
    return (
        <span className="relative">
            <span className="absolute opacity-10">{children}</span>
            <motion.span style={{ opacity }}>{children}</motion.span>
        </span>
    )
}