"use client";

import Image from "next/image";
import React from "react";
import {motion} from "framer-motion";
import Link from "next/link";
import {BsArrowDown, BsArrowRight, BsLinkedin} from "react-icons/bs";
import {HiDownload} from "react-icons/hi";
import {FaGithubSquare} from "react-icons/fa";
import {useSectionInView} from "@/lib/hooks";
import {useActiveSectionContext} from "@/context/active-section-context";
import profileImg from '@/public/profile.jpg'

export default function Intro() {
    const {ref} = useSectionInView("Home", 0.7);
    const {setActiveSection, setTimeOfLastClick} = useActiveSectionContext();

    return (
        <section
            ref={ref}
            id="home"
            className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
        >
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        initial={{opacity: 0, scale: 0}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{
                            type: "tween",
                            duration: 0.2,
                        }}
                    >
                        <Image
                            src={profileImg}
                            alt="David portrait"
                            width="192"
                            height="192"
                            quality="95"
                            priority={true}
                            className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                        />
                    </motion.div>

                    <motion.span
                        className="absolute bottom-0 right-0 text-4xl"
                        initial={{opacity: 0, scale: 0}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{
                            type: "spring",
                            delay: 0.1,
                            duration: 0.3,
                            stiffness: 125
                        }}

                    >
                        {/*👋*/}
                    </motion.span>
                </div>
            </div>

            <motion.h1
                className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                initial={{opacity: 0, y: 100}}
                animate={{opacity: 1, y: 0}}
            >
                <span className="font-bold">Hi, I'm David.</span> Currently pursuing a major in{" "}
                <span className="font-bold">Software Engineering</span>. I enjoy
                building <span className="italic">apps</span> using <motion.span
                className="underline font-bold bg-gradient-to-r from-blue-400 via-rose-600 to-lime-500 text-transparent bg-clip-text"
                initial={{scale: 0, opacity: 0}}
                animate={{scale: 1.2, opacity: 1}}
                transition={{
                    duration: 2,
                    type: "tween"
                }}
            >React NextJS.</motion.span>
                {" "}My focus for the future is{" "}
                <motion.span
                    className="underline font-bold bg-gradient-to-t from-yellow-500 via-amber-500 to-rose-600 text-transparent bg-clip-text"
                    initial={{scale: 0, opacity: 0}}
                    animate={{scale: 1.2, opacity: 1}}
                    transition={{
                        duration: 2,
                        type: "tween"
                    }}
                >AI and Machine Learning
                </motion.span>
                .
            </motion.h1>

            <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
                initial={{opacity: 0, y: 100}}
                animate={{opacity: 1, y: 0}}
                transition={{
                    delay: 0.1,
                }}
            >
                <Link
                    href="#contact"
                    className="border-2 border-blue-200 hover:dark:border-blue-400 group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition hover:bg-gradient-to-t hover:from-green-500 hover:via-cyan-400 hover:to-indigo-400 hover:text-transparent hover:bg-clip-text"
                    onClick={() => {
                        setActiveSection("Contact");
                        setTimeOfLastClick(Date.now());
                    }}
                >
                    <span
                        className={""}>Contact me here{" "}</span>
                    <BsArrowDown className="opacity-70 group-hover:translate-x-1 transition text-white group-hover:scale-150" />
                </Link>

                <a
                    className="group hover:bg-blue-100 bg-gray-100 border-2 border-blue-200 hover:dark:border-blue-400 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer dark:bg-white/10 hover:bg-gradient-to-t hover:from-yellow-500 hover:via-amber-500 hover:to-rose-600 hover:text-transparent hover:bg-clip-text"
                    href="/CV_David_Davitkovski.pdf"
                    download
                >
                    <span
                        className={""}>Download My CV{" "}</span>
                    <HiDownload className="opacity-60 transition text-white group-hover:scale-150"/>
                </a>

                {/*<a*/}
                {/*    className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"*/}
                {/*    href="https://linkedin.com"*/}
                {/*    target="_blank"*/}
                {/*>*/}
                {/*  <BsLinkedin/>*/}
                {/*</a>*/}

                <a
                    className="hover:bg-blue-100 bg-gray-100 border-2 border-blue-200 hover:dark:border-blue-400 p-4 text-gray-700 flex items-center gap-2 text-[1.4rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer dark:bg-white/10 dark:text-white"
                    href="https://github.com/ddavid04"
                    target="_blank"
                >
                    <FaGithubSquare className="group-hover:translate-y-1 transition group-hover:scale-150"/>
                </a>
            </motion.div>
        </section>
    );
}