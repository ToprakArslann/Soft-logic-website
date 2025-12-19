import Image from "next/image"
export default function About() {
    return (
        <section className="flex flex-col items-center">
            <div className="text-[3.8vw] tracking-tighter font-black p-10">In a world of sharp edges and rigid grids, we choose the soft, the fluid, and the organic. We craft digital atmospheres where logic meets luxury.</div>
            <div className="flex w-full relative h-[600px]">
                <Image src="/cloud1.png" alt="about1" width={700} height={600} className="absolute left-0" />
                <Image src="/cloud22.png" alt="about2" width={700} height={600} className="absolute right-0 top-0 -translate-y-8" />
            </div>
        </section>
    )
}