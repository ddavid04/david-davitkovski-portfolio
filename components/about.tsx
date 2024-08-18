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
        After graduating from High School "Rade Jovcevski-Korcagin" with a major in{" "}
        <span className="font-medium">Math</span>, I decided to pursue my
        passion for programming and math. I enrolled in a <span
          className="font-medium">Brainster Fullstack Academy</span>{" "}
        and learned <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Laravel, MySQL
        </span>
        . I am also familiar with TypeScript, C++, Java, Spring Boot, Postman, Bash. I am always looking to
        learn new technologies. My favourite Operating System would definitely be Linux ( Ubuntu ). I am currently looking for a{" "}
        <span className="font-medium">internship position</span> as a software developer. Hopefully <span className="font-medium">full-time position</span>.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy experimenting with physics and chemistry, watching movies, and cooking. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning{" "}
        <span className="font-medium">Java and Spring Boot and Python for Data Science and Machine Learning</span>. I'm also
        learning how to play the bass guitar.
      </p>
    </motion.section>
  );
}
