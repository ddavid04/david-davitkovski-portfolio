"use client";

import React, {useRef} from "react";
import {projectsData} from "@/lib/data";
import Image from "next/image";
import {motion, useScroll, useTransform} from "framer-motion";
import Link from "next/link";
import {FaGithubSquare} from "react-icons/fa";
import {CgWebsite} from "react-icons/cg";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
                                    title,
                                    description,
                                    tags,
                                    imageUrl,
                                    githubUrl,
                                    webUrl
                                }: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgess,
                opacity: opacityProgess,
            }}
            className="group mb-3 sm:mb-8 last:mb-0"
        >
            <section
                // className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20.5rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
                className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:px-8 relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">

                <div
                    className="pt-4 pb-7 px-5 sm:pl-1 sm:pr-1 sm:pt-10 sm:max-w-[65%] flex flex-col h-full sm:group-even:ml-[16rem]">
                    <h3 className="text-2xl font-semibold">{title}</h3>
                    <p className="mt-2 mb-2 leading-relaxed text-gray-700 dark:text-white/70 w-[90%]">
                        {description}
                    </p>
                    <div className={'flex flex-wrap items-center gap-2 my-4'}>
                        {githubUrl ? (
                            <span className={'dark:bg-black/[0.7] hover:bg-blue-100 bg-gray-100 border-2 border-blue-200 hover:dark:border-blue-400 rounded-full px-4 py-2 flex items-center gap-2'}><Link
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                // className="bg-black/[0.7] px-4 py-2 text-[0.8rem] uppercase  text-white rounded-full dark:text-white/70 "
                                className={"whitespace-nowrap tracking-wider bg-gradient-to-r from-blue-400 via-rose-600 to-lime-500 text-transparent bg-clip-text font-bold"}
                            >
                                Code
                            </Link>  <FaGithubSquare/> </span>
                        ) : null}
                        {webUrl ? (
                            <span className={'dark:bg-black/[0.7] hover:bg-blue-100 bg-gray-100 border-2 border-blue-200 hover:dark:border-blue-400 rounded-full px-4 py-2 flex items-center gap-2'}><Link
                                href={webUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={"whitespace-nowrap tracking-wider bg-gradient-to-r from-yellow-500 via-amber-500 to-rose-600 text-transparent bg-clip-text font-bold"}
                            >
                                Hosted website
                            </Link> <CgWebsite /></span>
                        ) : null}
                    </div>
                    <ul className="flex flex-wrap mt-4 gap-2 my-4">
                        {tags.map((tag, index) => (
                            <li
                                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70 hover:bg-blue-700"
                                key={index}
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>

                <Image
                    src={imageUrl}
                    alt="Project I worked on"
                    quality={90}
                    className="absolute hidden sm:block top-12 -right-40 w-[26rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
                />
            </section>
        </motion.div>
    );
}
