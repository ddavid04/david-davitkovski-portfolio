"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 text-">
        After graduating from High School "Rade Jovcevski-Korcagin", I decided to pursue my
        passion for programming and mathematics. I enrolled in the <span
          className="font-medium">"Brainster" Fullstack Academy</span>{" "}
        where I studied <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Laravel, MySQL
        </span>
        . I am also familiar with the TypeScript and C++ programming languages and various development tools such as Postman, Bash. Furthermore, I have extensive experience in Linux based operating systems such as Ubuntu and Manjaro. As a student, I am always looking to
        learn new technologies.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy experimenting with physics and chemistry, watching movies, and cooking.
        Additionally, I am attempting
        to enrich my knowledge of <span className="font-medium">web development</span> by studying <span className="font-medium">Java and Spring Boot</span> as well as develop my understanding of <span className="font-medium">Data Science and Machine Learning</span> {" "}
        <span className="font-medium">Python</span>.
      </p>
    </motion.section>
  );
}
