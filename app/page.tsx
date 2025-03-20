"use client";
import { motion } from "framer-motion";
import { Footer } from "./components/Footer";
import { SmoothScrollHero } from "./components/Hero";
import { RevealLinks } from "./components/HeroText";
import AuroraHero from "./components/AuroraHero";
import AuroraFooter from "./components/AuroraHero";
import ProductGallery from "./components/ProductGallery";
import MaskText from "./components/MaskText";
import WhyChooseUs from "./components/WhyChooseUs";
import HeadingText from "./components/HeadingText";
import FAQ from "./components/FAQ";

export default function Home() {
    return (
        <div className="w-full h-full bg-black">
            <div className="pt-10">
                <SmoothScrollHero />
            </div>

            {/* <div>
                <RevealLinks />
            </div>

            <div>
                <Footer />
            </div> */}

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
