"use client"
import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const services = [
    {
        id: "01",
        title: "Ethereal Environments",
        description: "We don't just build 3D models; we architect digital atmospheres. Spaces that feel lived-in, lighting that evokes emotion, and textures you can almost touch.",
        image: "/service1.png",
        tags: ["3D Architecture", "Unreal Engine 5", "Environmental Design"]
    },
    {
        id: "02",
        title: "Tactile Interaction",
        description: "Bridging the gap between the glass screen and the human fingertip. Our interfaces respond with weight, physics, and organic fluidity, making digital interaction feel physical.",
        image: "/service2.png",
        tags: ["React Three Fiber", "WebGl", "Creative Coding"]
    },
    {
        id: "03",
        title: "Emotional Motion",
        description: "Movement is the heartbeat of digital design. We craft animations that breathe, flow, and tell a story without saying a word. From micro-interactions to cinematic sequences.",
        image: "/service3.png",
        tags: ["Motion Design", "Cinema 4D", "Storytelling"]
    },
]

export default function Services() {
    const [activeService, setActiveService] = useState(0);

    return (
        <section className="w-full relative bg-[#F0EFEB] text-[#2D2D2D]">
            <div className="flex w-full max-w-[1600px] mx-auto">

                <div className="w-1/2 flex flex-col relative z-10">
                    <div className="h-[50vh]"></div>
                    {services.map((service, index) => (
                        <ServiceText
                            key={index}
                            data={service}
                            index={index}
                            setActiveService={setActiveService}
                        />
                    ))}
                    <div className="h-[50vh]"></div>
                </div>

                <div className="w-1/2 h-screen sticky top-0 flex items-center justify-center p-20">
                    <div className="relative w-full h-full rounded-4xl overflow-hidden shadow-2xl bg-[#D9D9D9]">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="absolute inset-0 w-full h-full"
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{
                                    opacity: activeService === index ? 1 : 0,
                                    scale: activeService === index ? 1 : 1.1
                                }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-black/20" />
                            </motion.div>
                        ))}
                        <div className="absolute bottom-10 right-10 text-[#F0EFEB] text-8xl font-bold tracking-tighter opacity-80 mix-blend-overlay">
                            {services[activeService].id}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

function ServiceText({ data, index, setActiveService }: { data: any, index: number, setActiveService: (i: number) => void }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

    useEffect(() => {
        if (isInView) {
            setActiveService(index);
        }
    }, [isInView, setActiveService, index]);

    return (
        <div ref={ref} className="h-screen flex flex-col justify-center px-20 relative">
            <span className="text-sm font-bold tracking-widest uppercase text-[#2D2D2D]/40 mb-4 ml-1">
                {data.id} — Service
            </span>
            <h2 className="text-6xl font-bold tracking-tighter leading-[1.1] mb-8">
                {data.title}
            </h2>
            <p className="text-xl leading-relaxed text-[#2D2D2D]/80 mb-10 max-w-md">
                {data.description}
            </p>
            <div className="flex flex-wrap gap-3">
                {data.tags.map((tag: string, i: number) => (
                    <span key={i} className="px-4 py-2 rounded-full border border-[#2D2D2D]/20 text-sm font-medium hover:bg-[#2D2D2D] hover:text-[#F0EFEB] transition-colors duration-300 cursor-default">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    )
}