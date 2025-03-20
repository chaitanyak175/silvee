"use client";

import React, { useRef } from "react";
import Picture1 from "../../public/images/1.png";
import Picture2 from "../../public/images/2.jpg";
import Picture3 from "../../public/images/3.png";
import Picture4 from "../../public/images/4.jpg";
import Picture5 from "../../public/images/5.jpg";
import Picture6 from "../../public/images/6.jpg";
import Picture7 from "../../public/images/7.jpg";
import styles from "./styles.module.scss";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const ProductGallery = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const pictures = [
        {
            src: Picture1,
            scale: scale4,
        },
        {
            src: Picture2,
            scale: scale5,
        },
        {
            src: Picture3,
            scale: scale6,
        },
        {
            src: Picture4,
            scale: scale6,
        },
        {
            src: Picture5,
            scale: scale8,
        },
        {
            src: Picture6,
            scale: scale9,
        },
        {
            src: Picture7,
            scale: scale9,
        },
    ];

    return (
        <div ref={container} className={styles.container}>
            <div className={styles.sticky}>
                {pictures.map(({ src, scale }, index) => {
                    return (
                        <motion.div
                            style={{ scale: scale }}
                            initial={{ height: 0 }}
                            animate={{ height: "100%" }}
                            key={index}
                            className={styles.el}
                        >
                            <div className={styles.imageContainer}>
                                <Image
                                    src={src}
                                    fill
                                    alt="Picture 1"
                                    placeholder="blur"
                                    className="grayscale"
                                />
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProductGallery;
