"use client";

import React, { useRef } from "react";
import styles from "./styles.module.scss";
import { motion, useInView } from "framer-motion";

const HeadingText = ({ headingText }: { headingText: string }) => {
    return (
        <div className={styles.HeadingTextContainer}>
            <HeadingMarkingText text={headingText} />
        </div>
    );
};

export function HeadingMarkingText({ text }: { text: string }) {
    const body = useRef(null);
    const isInView = useInView(body, {
        once: true,
        margin: "-20%",
    });

    return (
        <div ref={body} className={styles.HeadingTextbody}>
            <div className={styles.HeadingLineMask}>
                <motion.p
                    initial={{ y: "100%" }}
                    animate={isInView ? { y: "0%" } : { y: "100%" }}
                    transition={{
                        duration: 0.75,
                        ease: [0.33, 1, 0.68, 1],
                        delay: 0.075,
                    }}
                >
                    {text}
                </motion.p>
            </div>
        </div>
    );
}

export default HeadingText;
