import Hero from "@/components/hero";
import About from "@/components/about";
import ReactLenis from "lenis/react";

export default function Home() {
  return <main className="flex flex-col">
    <ReactLenis root />
    <Hero />
    <About />
  </main>;
}