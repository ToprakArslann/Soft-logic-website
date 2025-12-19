import Hero from "@/components/hero";
import About from "@/components/about";
import Works from "@/components/works";
import Services from "@/components/services";
import CTA from "@/components/cta";
import ReactLenis from "lenis/react";
import { geistSans } from "./layout";

export default function Home() {
  return <main className={`flex flex-col ${geistSans.variable}`}>
    <ReactLenis root />
    <Hero />
    <About />
    <Works />
    <Services />
    <CTA />
  </main>;
}