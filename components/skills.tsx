// "use client";
//
// import React from "react";
// import SectionHeading from "./section-heading";
// import {skillsData} from "@/lib/data";
// import {useSectionInView} from "@/lib/hooks";
// import {motion} from "framer-motion";
//
// const fadeInAnimationVariants = {
//     initial: {
//         opacity: 0,
//         y: 100,
//     },
//     animate: (index: number) => ({
//         opacity: 1,
//         y: 0,
//         transition: {
//             delay: 0.05 * index,
//         },
//     }),
// };
//
// export default function Skills() {
//     const {ref} = useSectionInView("Skills");
//
//     return (
//         <section
//             id="skills"
//             ref={ref}
//             className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
//         >
//             <SectionHeading>My skills</SectionHeading>
//             <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
//                 {skillsData.map((skill, index) => (
//                     <motion.li
//                         className={"bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"}
//                         key={index}
//                         variants={fadeInAnimationVariants}
//                         initial="initial"
//                         whileInView="animate"
//                         viewport={{
//                             once: true,
//                         }}
//                         custom={index}
//                     >
//                         {skill}
//                     </motion.li>
//                 ))}
//             </ul>
//         </section>
//     );
// }
//


"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};

export default function Skills() {
    const { ref } = useSectionInView("Skills");

    return (
        <section
            id="skills"
            ref={ref}
            className="mb-28 max-w-[57rem] scroll-mt-28 text-center sm:mb-40"
        >
            <SectionHeading>My skills</SectionHeading>
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                {skillsData.map((skill, index) => (
                    <SkillItem
                        key={index}
                        skill={skill}
                        index={index}
                    />
                ))}
            </ul>
        </section>
    );
}

function SkillItem({ skill, index }: { skill: string; index: number }) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 relative overflow-hidden"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
                once: true,
            }}
            custom={index}
            onMouseLeave={() => setHoveredIndex(null)}

        >
            <div className="flex">
                {skill.split('').map((char, charIndex) => {
                    // Calculate distance from the hovered character
                    const distance = hoveredIndex !== null ? Math.abs(charIndex - hoveredIndex) : null;

                    // Calculate font weight based on distance
                    let fontWeight = 400; // default weight
                    let letterSpacing = "normal"; // default spacing
                    let fontSize = 18

                    if (distance === 0) {
                        fontWeight = 800; // bold for hovered character
                        letterSpacing = "0.1em"; // increased spacing for hovered character
                        fontSize = 21;
                    } else if (distance === 1) {
                        fontWeight = 700; // slightly less bold for adjacent characters
                        letterSpacing = "0.07em"; // slightly increased spacing
                        fontSize = 20;
                    } else if (distance === 2) {
                        fontWeight = 600; // even less bold for characters further away
                        letterSpacing = "0.05em"; // minimal increased spacing
                        fontSize = 19;
                    } else if (distance === 3) {
                        fontWeight = 500; // even less bold for characters further away
                        letterSpacing = "0.05em"; // minimal increased spacing
                        fontSize = 18;
                    }

                    return (
                        <motion.span
                            key={charIndex}
                            style={{
                                fontWeight: hoveredIndex !== null ? fontWeight : 400,
                                letterSpacing: hoveredIndex !== null ? letterSpacing : "normal",
                                fontSize: hoveredIndex !== null ? fontSize : 18,
                            }}
                            onMouseEnter={() => setHoveredIndex(charIndex)}
                            className="cursor-default transition-all duration-300 ease-in-out"
                        >
                            {char}
                        </motion.span>
                    );
                })}
            </div>
        </motion.li>
    );
}