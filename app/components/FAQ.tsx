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
            title: "Is Deadpool awesome?",
            description: "Absolutely! He's the merc with a mouth!",
        },
        {
            title: "Can Spider-Man really stick to walls?",
            description: "You bet! It's his super sticky superpower!",
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
