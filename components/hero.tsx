"use client";
import { useScroll, useMotionValueEvent, useSpring, useTransform, motion } from "motion/react";
import { useRef, useEffect, useState } from "react";

export default function SmoothHero() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [videoSrc, setVideoSrc] = useState("/output_high_quality.mp4");


    useEffect(() => {
        fetch(videoSrc)
            .then((response) => response.blob())
            .then((blob) => {
                const blobURL = URL.createObjectURL(blob);
                setVideoSrc(blobURL);
            });
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const roundedProgress = useTransform(scrollYProgress, [0.95, 1], ["0", "24px"]);
    const widthProgress = useTransform(scrollYProgress, [0.95, 1], ["100%", "98%"]);

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 50,
        damping: 20,
    });
    useMotionValueEvent(smoothProgress, "change", (latest) => {
        if (videoRef.current && videoRef.current.duration) {
            requestAnimationFrame(() => {
                if (videoRef.current) {
                    videoRef.current.currentTime = (1 - latest) * videoRef.current.duration;
                }
            });
        }
    });

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const prepareVideo = async () => {
            try {
                await video.play();
                video.pause();
            } catch (err) {
                const unlock = () => {
                    video.play().then(() => {
                        video.pause();
                        window.removeEventListener("touchstart", unlock);
                    });
                };
                window.addEventListener("touchstart", unlock);
            }
        };

        prepareVideo();
    }, []);
    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            const setInitialTime = () => {
                if (video.duration) video.currentTime = video.duration;
            };
            if (video.readyState >= 1) {
                setInitialTime();
            } else {
                video.onloadedmetadata = setInitialTime;
            }
        }
    }, []);
    return (
        <section ref={containerRef} className="h-[500vh] flex justify-center">
            <motion.div style={{ width: widthProgress, borderRadius: roundedProgress }} className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                <video
                    ref={videoRef}
                    src={videoSrc}
                    muted
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-between">
                    <div className="flex flex-col items-center justify-center text-center h-full">
                        <h2 className="text-4xl font-semibold tracking-tight">Where imagination feels real.</h2>
                        <p className="text-xl tracking-tight">A creative laboratory for 3D design, interactive <br /> experiences, and digital products.</p>
                    </div>
                    <div className="flex items-center justify-center h-full">
                        <button className="flex items-center justify-center p-4 text-xl tracking-tight border-px border-[#F0EFEB] bg-[#F0EFEB] rounded-2xl [box-shadow:0px_0px_0px_1px_rgba(230,230,230,0.4),0px_3px_4px_-1px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.25),inset_0px_1px_0px_#FFFFFF] hover:cursor-pointer">Dive Into Journey</button>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}