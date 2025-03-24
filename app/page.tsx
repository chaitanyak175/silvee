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
        // Set the initial width after component mounts (client-side only)
        setWidth(window.innerWidth);

        // Create handler function
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []); // Empty dependency array ensures this runs once on mount



    return (
        <div className="w-full h-full bg-black">
            {width<1125?<HeaderMenu/>:<Nav/>}
            <div id="Home" className="pt-10">
                <SmoothScrollHero />
            </div>

            {/* <div>
                <RevealLinks />
            </div>

            <div>
                <Footer />
            </div> */}
            <div id="Clients">
                <Morque />
            </div>
            <div>
                <HeadingText headingText="Gallery" />
                <ProductGallery />
            </div>

            <WhyChooseUs />

            <div className="mx-35">
                <FAQ />
            </div>

            <AuroraFooter />

            {/* <Footer /> */}
        </div>
    );
}
