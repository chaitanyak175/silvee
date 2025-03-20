"use client";

import { useRef } from "react";
import styles from "./styles.module.scss";
import { motion, useInView } from "framer-motion";

const phrases = [
    { text: "Why Choose Silvee.in?", className: styles.title },
    {
        text: "• 100% Certified 925 Sterling Silver – Pure, hallmarked silver with premium finishing.",
        className: styles.point,
    },
    {
        text: "• Fully Customizable Designs – Logos, initials, special engravings – we make it happen!",
        className: styles.point,
    },
    {
        text: "• Exclusive B2B Bulk Orders – Special pricing & MOQ flexibility for corporate clients.",
        className: styles.point,
    },
    {
        text: "• Fast Turnaround Time – Efficient execution from design to doorstep.",
        className: styles.point,
    },
    {
        text: "• Prestigious Clientele – Samsung, Johnson & Johnson, Global Pharma & more!",
        className: styles.point,
    },
    {
        text: "• Luxury Packaging – Each gift is elegantly wrapped for maximum impact.",
        className: styles.point,
    },
    {
        text: "• Made for Corporate Gifting – Designed for events, employee rewards, VIP clients & celebrations.",
        className: styles.point,
    },
];

export default function WhyChooseUs() {
    return (
        <div className={styles.textContainer}>
            <WhyChooseUsText />
            <WhyChooseUsText />
            <WhyChooseUsText />
            <WhyChooseUsText />
            <WhyChooseUsText />
        </div>
    );
}

export function WhyChooseUsText() {
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
                            className={phrase.className}
                            initial={{ y: "100%" }}
                            animate={isInView ? { y: "0%" } : { y: "100%" }}
                            transition={{
                                duration: 0.75,
                                ease: [0.33, 1, 0.68, 1],
                                delay: 0.075 * index,
                            }}
                        >
                            {phrase.text}
                        </motion.p>
                    </div>
                );
            })}
        </div>
    );
}
