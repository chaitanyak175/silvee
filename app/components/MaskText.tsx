"use client";

import { useRef } from "react";
import styles from "./styles.module.scss";
import { motion, useInView } from "framer-motion";

const phrases = [
    "It is a long established fact.",
    "that a reader will be distracted",
    "by the readable content of a page",
    "when looking at its layout",
];

export default function MaskText() {
    return (
        <div className={styles.textContainer}>
            <MarkingText />
            <MarkingText />
            <MarkingText />
            <MarkingText />
            <MarkingText />
        </div>
    );
}

export function MarkingText() {
    const body = useRef(null);
    const isInView = useInView(body, {
        once: true,
        margin: "-20%",
    });

    return (
        <div ref={body} className={styles.textbody}>
            {phrases.map((phrase, index) => {
                return (
                    <div key={index} className={styles.lineMask}>
                        <motion.p
                            initial={{ y: "100%" }}
                            animate={isInView ? { y: "0%" } : { y: "100%" }}
                            transition={{
                                duration: 0.75,
                                ease: [0.33, 1, 0.68, 1],
                                delay: 0.075 * index,
                            }}
                        >
                            {phrase}
                        </motion.p>
                    </div>
                );
            })}
        </div>
    );
}
