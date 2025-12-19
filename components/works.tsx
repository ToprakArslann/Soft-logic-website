
"use client"
import Image from "next/image";
import { motion, useMotionTemplate, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Magnetic from "./magnetic";

export default function Works() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start 0.6", "end end"],
    });
    const line = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const blurValue = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
    const blurFilter = useMotionTemplate`blur(${blurValue}rem)`;

    const works = [
        {
            image: "/work1.png",
            title: "work1",
            date: "2025",
        },
        {
            image: "/work2.png",
            title: "work2",
            date: "2025",
        },
        {
            image: "/work3.png",
            title: "work3",
            date: "2025",
        },
        {
            image: "/work4.png",
            title: "work4",
            date: "2025",
        },
        {
            image: "/work5.png",
            title: "work5",
            date: "2025",
        },
        {
            image: "/work6.png",
            title: "work6",
            date: "2025",
        },
    ]
    return (
        <section ref={container} className="w-full h-[180vh] flex justify-center items-center relative overflow-hidden">
            {/* <Image src="/line.svg" alt="line" fill className="absolute inset-0 items-center justify-center object-cover" /> */}
            <svg className="absolute items-center justify-center object-cover -z-1" width="3665" height="1511" viewBox="0 0 3665 1511" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path style={{ pathLength: line }} d="M3577.5 246.154C3577.5 246.154 3122.54 80.7595 2641 86.6539C2159.46 92.5483 1988.5 121.654 1778 300.154C1567.5 478.654 1494.5 851.154 1590 1106.15C1685.5 1361.15 2023.5 1402.15 2179.5 1348.15C2335.5 1294.15 2432.11 1204.11 2424.5 1052.15C2416.9 900.194 2250.47 777.556 2004 873.654C1757.54 969.752 1739.5 1243.15 1351 1348.15C962.501 1453.15 86.5015 1418.15 86.5015 1418.15" stroke="url(#paint0_linear_513_5)" stroke-opacity="0.6" stroke-width="173" stroke-linecap="round" />
                <defs>
                    <linearGradient id="paint0_linear_513_5" x1="2237.24" y1="108.809" x2="2237.24" y2="1846.4" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#E9CE77" />
                        <stop offset="0.471154" stop-color="#E2A9B8" />
                        <stop offset="1" stop-color="#AEE2FF" />
                    </linearGradient>
                </defs>
            </svg>
            <div className="w-full flex flex-col items-center justify-center p-4 gap-2">
                <div className="w-full flex flex-row items-center justify-center gap-2">
                    {works.map((work, index) => (
                        <Magnetic key={index}>
                            <motion.div style={{ filter: blurFilter }} className="max-w-[300px] w-full flex flex-col items-center justify-center">
                                <Image src={work.image} alt={work.title} width={Math.random() * 200 + 200} height={Math.random() * 200 + 200} />
                                <div className="w-full flex flex-row items-center justify-between gap-2 text-2xl">
                                </div>
                            </motion.div>
                        </Magnetic>
                    ))}
                </div>
                <div className="w-full flex flex-row items-center justify-between gap-2 text-2xl">
                    <div className="w-fit whitespace-nowrap">The Creations</div>
                    <div className="w-full h-[2px] bg-[#2D2D2D] rounded-full"></div>
                    <div className="w-fit">2025</div>
                </div>

            </div>


        </section>
    )
}