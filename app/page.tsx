"use client";
import { motion } from "framer-motion";
import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";
import { SmoothScrollHero } from "./components/Hero";
import { RevealLinks } from "./components/HeroText";
import AuroraHero from "./components/AuroraHero";
import AuroraFooter from "./components/AuroraHero";
import ProductGallery from "./components/ProductGallery";
import MaskText from "./components/MaskText";
import WhyChooseUs from "./components/WhyChooseUs";
import HeadingText from "./components/HeadingText";
import FAQ from "./components/FAQ";
import { Morque } from "./components/Morque";
import { useEffect, useState } from "react";
import HeaderMenu from "./components/HeaderMenu";

export default function Home() {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(window.innerWidth);
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="w-full h-full bg-black">
            {width < 1125 ? <HeaderMenu /> : <Nav />}

            {/* Sections with matching IDs */}
            <section id="Home" className="pt-10">
                <SmoothScrollHero />
            </section>

            <section id="Clients">
                <Morque />
            </section>

            <section id="Gallery">
                <HeadingText headingText="Gallery" />
                <ProductGallery />
            </section>

            <section id="About">
                <WhyChooseUs />
            </section>

            <section id="FAQ" className="w-[100%] mx-1 md:mx-4 flex justify-center items-center">
                <FAQ />
            </section>

            <AuroraFooter />
        </div>
    );
}
