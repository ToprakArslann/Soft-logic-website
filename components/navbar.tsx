"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import Magnetic from "./magnetic";

export default function Navbar() {
    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Works", href: "#works" },
        { name: "Services", href: "#services" },
    ];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] max-w-[1200px]"
        >
            <div className="bg-[#2D2D2D]/20 backdrop-blur-sm border border-white/10 rounded-2xl px-6 md:px-10 h-20 flex items-center justify-between">
                <Link href="/" className="shrink-0">
                    <Image
                        src="/logo.svg"
                        alt="Soft Logic Logo"
                        width={150}
                        height={34}
                        priority
                        className="w-auto h-8"
                    />
                </Link>

                <div className="flex items-center gap-10">
                    <div className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-[13px] font-bold text-[#F0EFEB] hover:text-[#AEE2FF] transition-colors uppercase tracking-[0.2em]"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <Magnetic>
                        <button className="bg-[#F0EFEB] text-[#2D2D2D] px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-[#AEE2FF] transition-colors">
                            Let&apos;s Talk
                        </button>
                    </Magnetic>
                </div>
            </div>
        </motion.nav>
    );
}
