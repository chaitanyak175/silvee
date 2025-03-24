import { useMotionValueEvent, motion, useScroll } from "framer-motion";
import { useRef, useState } from "react";

export const Nav = () => {
    const [isHidden, setIsHidden] = useState(false);
    const { scrollY } = useScroll();

    const lastRef = useRef(0);
    useMotionValueEvent(scrollY, "change", (y) => {
        const differece = y - lastRef.current;
        if (Math.abs(differece) > 50) {
            setIsHidden(differece > 0);
            lastRef.current = y;
        }
    });

    return (
        <motion.div
            transition={{ duration: 0.2 }}
            animate={isHidden ? "hidden" : "visible"}
            whileHover="visible"
            variants={{
                hidden: { y: "-90%" },
                visible: { y: "0%" },
            }}
            className="fixed top-0 pt-3 z-100 flex w-full justify-center"
        >
            <nav className="w-[30%] flex justify-center gap-5 rounded-3xl bg-custom-white p-3 *:rounded-xl *:border text-black ${playfair.className}">
                <a
                    href="#Home"
                    className="p-1 min-w-1/6 flex items-center justify-center hover:bg-black hover:text-white duration-100"
                >
                    Home
                </a>
                <a
                    href="#Clients"
                    className="p-1 min-w-1/6 flex items-center justify-center hover:bg-black hover:text-white duration-100"
                >
                    Clients
                </a>
                <a
                    href="#Gallery"
                    className="p-1 min-w-1/6 flex items-center justify-center hover:bg-black hover:text-white duration-100"
                >
                    Gallery
                </a>
                <a
                    href="#About"
                    className="p-1 min-w-1/6 flex items-center justify-center hover:bg-black hover:text-white duration-100"
                >
                    About
                </a>
                <a
                    href="#Cart"
                    className="p-1 min-w-1/6 flex items-center justify-center hover:bg-black hover:text-white duration-100"
                >
                    Cart
                </a>
            </nav>
        </motion.div>
    );
};
