import { ReactLenis } from "lenis/react";
import {
    motion,
    useMotionTemplate,
    useScroll,
    useTransform,
} from "framer-motion";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { useRef } from "react";
import Image from "next/image";

const DURATION = 0.25;
const STAGGER = 0.025;
const ENTRANCE_STAGGER = 0.05; // Stagger effect for initial entrance

const FlipLink = ({ children, href }: { children: string; href: string }) => {
    return (
        <motion.a
            initial="initial"
            whileHover="hovered"
            href={href}
            className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl text-white font-reckless"
            style={{
                lineHeight: 0.75,
                willChange: "transform", // Add hardware acceleration
            }}
        >
            <div>
                {children.split("").map((l, i) => (
                    <motion.span
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 0.5,
                            delay: ENTRANCE_STAGGER * i,
                        }}
                        variants={{
                            initial: { y: 0 },
                            hovered: { y: "-100%" },
                        }}
                        className="inline-block"
                        key={i}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
            <div className="absolute inset-0">
                {children.split("").map((l, i) => (
                    <motion.span
                        initial={{ y: 200, opacity: 0 }}
                        animate={{ y: "100%", opacity: 1 }}
                        transition={{
                            duration: 0.5,
                            delay: ENTRANCE_STAGGER * i,
                        }}
                        variants={{
                            initial: { y: "100%" },
                            hovered: { y: 0 },
                        }}
                        className="inline-block"
                        key={i}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
        </motion.a>
    );
};

export const SmoothScrollHero = () => {
    return (
        <div className="bg-black">
            <ReactLenis
                root
                options={{
                    lerp: 0.15, // Increased from 0.05 for smoother scrolling
                    wheelMultiplier: 1.2, // Faster scrolling
                    smoothWheel: true,
                    // smoothTouch: false, // Disable smooth scrolling on touch devices for better performance
                }}
            >
                <Nav />
                <Hero />
                {/* <Schedule /> */}
            </ReactLenis>
        </div>
    );
};

const Nav = () => {
    return (
        <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-end px-6 py-3 text-white">
            <button
                onClick={() => {
                    document.getElementById("launch-schedule")?.scrollIntoView({
                        behavior: "smooth",
                    });
                }}
                className="flex items-center gap-1 text-xs text-zinc-400"
            >
                Our Clients <FiArrowRight />
            </button>
        </nav>
    );
};

const SECTION_HEIGHT = 1500;

const Hero = () => {
    return (
        <div
            style={{ height: `${SECTION_HEIGHT}px + 100vh` }}
            className="relative w-full"
        >
            <CenterImage />
            <ParallaxImages />
            <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-black/0 to-black" />
        </div>
    );
};

const CenterImage = () => {
    const { scrollY } = useScroll();

    // Reduced number of transformations
    const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
    const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);
    const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

    const backgroundSize = useTransform(
        scrollY,
        [0, SECTION_HEIGHT + 500],
        ["170%", "100%"]
    );
    const opacity = useTransform(
        scrollY,
        [SECTION_HEIGHT, SECTION_HEIGHT + 500],
        [1, 0]
    );

    return (
        <div className="sticky top-0 h-screen w-full flex items-center justify-center">
            <motion.div
                style={{
                    clipPath,
                    backgroundSize,
                    opacity,
                    willChange: "clip-path, opacity",
                }}
                // initial={{ opacity: 0 }}
                // animate={{ opacity: 1 }}
                // transition={{ duration: 0.005 }}
                className="absolute inset-0 h-full w-full"
            >
                <Image
                    src="/images/silver.jpg"
                    alt="Background"
                    className="object-cover"
                    priority
                    // quality={100}
                    height={4000}
                    width={4000}
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
                <FlipLink href="#">Silvee</FlipLink>
            </motion.div>
        </div>
    );
};

// Optimized ParallaxImages component
const ParallaxImages = () => {
    return (
        <div className="mx-auto max-w-5xl px-4 pt-[200px]">
            <ParallaxImg
                src="/images/3.png"
                alt="And example of a space launch"
                start={-100} // Reduced range
                end={100} // Reduced range
                className="w-1/3"
            />
            {/* <ParallaxImg
                src="/images/10.jpg"
                alt="An example of a space launch"
                start={100} // Reduced range
                end={-100} // Reduced range
                className="mx-auto w-100 rounded-xl"
            /> */}
            <ParallaxImg
                src="/images/15.jpg"
                alt="Orbiting satellite"
                start={-100} // Reduced range
                end={100} // Reduced range
                className="ml-auto w-1/3"
            />
            <ParallaxImg
                src="/images/6.jpg"
                alt="Orbiting satellite"
                start={0}
                end={-200} // Reduced range
                className="ml-24 w-5/12"
            />
        </div>
    );
};

const ParallaxImg = ({
    className,
    alt,
    src,
    start,
    end,
}: {
    className?: string;
    alt: string;
    src: string;
    start: number;
    end: number;
}) => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [`${start}px end`, `end ${end * -1}px`],
    });

    const y = useTransform(scrollYProgress, [0, 1], [start, end]);
    const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
    const scale = useTransform(scrollYProgress, [0.8, 1], [1, 0.9]);
    const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

    return (
        <motion.div
            ref={ref}
            style={{
                transform,
                opacity,
                willChange: "transform, opacity",
            }}
            className={className}
        >
            <Image
                src={src}
                alt={alt}
                layout="responsive"
                width={1600} // Adjust based on your actual image size
                height={900}
                priority={false} // Lazy loads images by default
                className="w-full h-auto"
            />
        </motion.div>
    );
};

const Schedule = () => {
    return (
        <section
            id="launch-schedule"
            className="mx-auto max-w-5xl px-4 py-48 text-white"
        >
            <motion.h1
                initial={{ y: 48, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                viewport={{ once: true }} // Only animate once
                className="mb-20 text-4xl font-black uppercase text-zinc-50"
            >
                Launch Schedule
            </motion.h1>
            <ScheduleItem title="NG-21" date="Dec 9th" location="Florida" />
            <ScheduleItem title="Starlink" date="Dec 20th" location="Texas" />
            <ScheduleItem title="Starlink" date="Jan 13th" location="Florida" />
            <ScheduleItem
                title="Turksat 6A"
                date="Feb 22nd"
                location="Florida"
            />
            <ScheduleItem
                title="NROL-186"
                date="Mar 1st"
                location="California"
            />
            <ScheduleItem title="GOES-U" date="Mar 8th" location="California" />
            <ScheduleItem title="ASTRA 1P" date="Apr 8th" location="Texas" />
        </section>
    );
};

const ScheduleItem = ({
    title,
    date,
    location,
}: {
    title: string;
    date: string;
    location: string;
}) => {
    return (
        <motion.div
            initial={{ y: 48, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            viewport={{ once: true, margin: "-100px" }} // Only animate once and earlier
            className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
        >
            <div>
                <p className="mb-1.5 text-xl text-zinc-50">{title}</p>
                <p className="text-sm uppercase text-zinc-500">{date}</p>
            </div>
            <div className="flex items-center gap-1.5 text-end text-sm uppercase text-zinc-500">
                <p>{location}</p>
                <FiMapPin />
            </div>
        </motion.div>
    );
};
