"use client";
import { useScroll, useMotionValueEvent, useSpring } from "motion/react";
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

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 50,
        damping: 20,
    });
    useMotionValueEvent(smoothProgress, "change", (latest) => {
        if (videoRef.current && videoRef.current.duration) {
            requestAnimationFrame(() => {
                if (videoRef.current) {
                    videoRef.current.currentTime = latest * videoRef.current.duration;
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
        if (videoRef.current) {
            videoRef.current.currentTime = 0.001;
        }
    }, []);
    return (
        <section ref={containerRef} className="h-[500vh]">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                <video
                    ref={videoRef}
                    src={videoSrc}
                    muted
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

                </div>
            </div>
        </section>
    );
}