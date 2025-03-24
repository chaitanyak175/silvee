import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface AccordionProps {
    i: number;
    expanded: number | false;
    setExpanded: (index: number | false) => void;
    title: string;
    description: string;
}

const Accordion: React.FC<AccordionProps> = ({
    i,
    expanded,
    setExpanded,
    title,
    description,
}) => {
    const isOpen = i === expanded;
    return (
        <>
            <motion.div
                onClick={() => setExpanded(isOpen ? false : i)}
                style={{ cursor: "pointer", borderRadius: 25 }}
                animate={{
                    backgroundColor: isOpen ? "black" : "black",
                    paddingBottom: isOpen ? 0 : 10,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                <div className="p-6 items-center rounded-3xl bg-custom-white border-1 border-black shadow-2xl">
                    <h3 className="text-3xl text-black">{title}</h3>
                </div>
            </motion.div>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.section
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto", y: 0 },
                            collapsed: { opacity: 0, height: 0, y: -10 },
                        }}
                        transition={{
                            duration: 0.6,
                            ease: [0.25, 1, 0.5, 1],
                        }}
                    >
                        <div className="p-6 flex items-center rounded-3xl">
                            <p className="text-2xl text-black font-reckless">
                                {description}
                            </p>
                        </div>
                    </motion.section>
                )}
            </AnimatePresence>
        </>
    );
};

const FAQ = () => {
    const [expanded, setExpanded] = useState<number | false>(false);
    const faqData = [
        {
            title: "What is Silvee 925 Sterling Silver?",
            description:
                "Silvee is a premium B2B wholesale brand specializing in high-quality 925 sterling silver jewellery and corporate gifting solutions.",
        },
        {
            title: "What products do you offer?",
            description:
                "We manufacture and supply jewellery like rings, pendants, bracelets, earrings, and kada, as well as corporate gifts such as silver coins, trophies, and plaques.",
        },
        {
            title: "How can I place a bulk order?",
            description:
                "Contact us via Email: silvee925@gmail.com, Phone: +91 7020475443.",
        },
        {
            title: "Do you offer customized jewellery and gifts?",
            description:
                "Yes! We provide logo engraving, name engraving, and custom silver designs.",
        },
        {
            title: "How long does delivery take?",
            description:
                "7-15 days for standard orders, 20-30 days for customized orders.",
        },
        {
            title: "Is your silver jewellery hallmarked?",
            description:
                "Yes, all our products are 100% certified 925 sterling silver with hallmarking.",
        },
    ];

    return (
        <div className="px-25 bg-custom-white rounded-4xl pb-6">
            <h1 className="text-[130px] font-reckless text-black">FAQs</h1>
            {faqData.map((item, i) => (
                <Accordion
                    key={i}
                    i={i}
                    expanded={expanded}
                    setExpanded={setExpanded}
                    title={item.title}
                    description={item.description}
                />
            ))}
        </div>
    );
};
export default FAQ;
