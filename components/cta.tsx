"use client"
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function CTA() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [-100, 0]);

    return (
        <section ref={container} className="w-full h-screen bg-[#2D2D2D] flex flex-col items-center justify-center relative overflow-hidden text-[#F0EFEB]">
            <motion.div style={{ y }} className="relative z-10 flex flex-col items-center gap-10">
                <div className="flex flex-col items-center gap-2 text-center mix-blend-difference">
                    <h2 className="text-[8vw] leading-[0.8] font-bold tracking-tighter uppercase">
                        Ready to
                    </h2>
                    <h2 className="text-[8vw] leading-[0.8] font-bold tracking-tighter uppercase italic opacity-80">
                        Disrupt?
                    </h2>
                </div>

                <p className="text-xl max-w-md text-center opacity-60 font-medium">
                    Let's build the digital future. One pixel, one polygon, one feeling at a time.
                </p>

                <div className="mt-10">
                    <button className="flex items-center justify-center p-4 text-xl tracking-tight border-px border-[#F0EFEB] bg-[#F0EFEB] rounded-2xl [box-shadow:0px_0px_0px_1px_rgba(230,230,230,0.4),0px_3px_4px_-1px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.25),inset_0px_1px_0px_#FFFFFF] hover:cursor-pointer text-[#2D2D2D]">Contact With Us</button>
                </div>
            </motion.div>

            <div className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-linear-to-r from-[#AEE2FF] to-[#E2A9B8] rounded-full blur-[80px]" />
            </div>
        </section>
    )
}
