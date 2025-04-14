import React from "react";
import meetupsImg from "@/public/01_meetups.png";
import cloudStorageImg from "@/public/02_cloud-storage-app.png"
import qrImg from "@/public/03_qr-generator.png"
import memoryImg from "@/public/04_memory-game.png"
import drumImg from "@/public/05_drum-kit.png"

import {
    FcCommandLine,
    FcConferenceCall,
    FcGraduationCap,
    FcLinux,
    FcReading, FcRegisteredTrademark
} from "react-icons/fc";
import {GiCoffeeCup} from "react-icons/gi";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: `Graduated from High School "Korcagin"`,
        location: `SUGS "Rade Jovcevski-Korcagin", Skopje, MK`,
        description:
            "After four years of rigorous study, filled with challenging math and relentless hard work, I graduated—and that's when I discovered my passion for coding.",
        icon: React.createElement(FcGraduationCap),
        date: "2019 - 2023",
    },
    {
        title: "Brainster Fullstack Academy",
        location: "Brainster, Skopje, MK",
        description:
            "I gained extensive knowledge and experience in full-stack development at this academy, mastering technologies like HTML, CSS, Bootstrap, Git, SQL, PHP, JavaScript, and Laravel.",
        icon: React.createElement(FcReading),
        date: "2021 - 2022",
    },
    {
        title: "Java Beginners Bootcamp @ Netcetera",
        location: "Netcetera, Skopje, MK",
        description: "My first encounter with Java involved learning its basics over four Saturdays, during which I solved problems and developed games.",
        icon: React.createElement(GiCoffeeCup),
        date: "February 2023",
    },
    {
        title: "FEEIT FabLab free courses",
        location: "FEEIT, Skopje, MK",
        description:
            "I attended two courses simultaneously. The first, titled 'Free Software,' introduced me to Linux, kernel-based operating systems, and the power of the terminal (which I use daily). The second course, 'Introduction to Machine Learning,' provided an introduction to Python as well as the mathematics and logic behind ML and AI models.",
        icon: React.createElement(FcLinux),
        date: "March 2023",
    },
    {
        title: "Bachelor of Software Engineering",
        location: "FINKI, Skopje, MK",
        description: "I am currently pursuing a degree in Software Engineering at the Faculty of Computer Science and Engineering. I'm passionate about deepening my knowledge in Artificial Intelligence, Machine Learning and Data Science, with a goal of exploring and advancing in these fields.",
        icon: React.createElement(FcConferenceCall),
        date: "2023 - Future 2027",
    },
    {
        title: "ReactJS & NextJS Udemy course",
        location: "Skopje, MK",
        description: "I extended my learning beyond formal education by completing a ReactJS and Next.js course to enhance my web development skills.",
        icon: React.createElement(FcRegisteredTrademark),
        date: "June 2024",
    },
    {
        title: "Spring Boot and Python for Data Science Udemy courses",
        location: "Skopje, MK",
        description: "I'm currently studying Spring Boot to prepare for IT job opportunities and learning Python for Data Science, which is my passion. My goal is to complete both by the end of the year.",
        icon: React.createElement(FcCommandLine),
        date: "2024 - present",
    },
] as const;

export const projectsData = [
    {
        title: "Meetups app",
        description:
            "This is my first NextJS project and also the first time encountering with MongoDB",
        tags: ["React", "Next.js", "MongoDB"],
        imageUrl: meetupsImg,
        githubUrl: "https://github.com/ddavid04/nextjs-mongodb-webpage",
        webUrl: "https://nextjs-mongodb-webpage.vercel.app/"
    },
    {
        title: "Image and Video Cloud Storage",
        description:
            "This is my fully functional cloud storage for images and videos with implemented AI",
        tags: ["React", "Next.js", "Cloudinary"],
        imageUrl: cloudStorageImg,
        githubUrl: "https://github.com/ddavid04/Cloud-Storage",
        webUrl: "https://davids-image-cloud-storage.vercel.app/"
    },
    {
        title: "Text to QR image generator",
        description:
            "This is a simple QR code generator from text. Perfect for URLs",
        tags: ["HTML", "CSS", "Javascript"],
        imageUrl: qrImg,
        githubUrl: "https://github.com/ddavid04/qr-generator",
        webUrl: "https://ddavid04.github.io/qr-generator/"
    },
    {
        title: "Simple Memory Game",
        description:
            "JavaScript memory game to test your intelligence",
        tags: ["HTML", "CSS", "Javascript"],
        imageUrl: memoryImg,
        githubUrl: "https://github.com/ddavid04/Memory-Game",
        webUrl: "https://ddavid04.github.io/Memory-Game/"
    },
    {
        title: "Interactive drum-kit app",
        description:
            "Just a drum-kit you could access on the go",
        tags: ["HTML", "CSS", "Javascript"],
        imageUrl: drumImg,
        githubUrl: "https://github.com/ddavid04/Drum-Kit",
        webUrl: "https://ddavid04.github.io/Drum-Kit/"
    },

] as const;


export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Git",
    "Tailwind",
    "MongoDB",
    "Redux",
    "Laravel",
    "Spring Boot",
    "MySQL",
    "PostgreSQL",
    "Java",
    "C++",
    "Bash",
    "Python",
    "AWS S3",
    "Pandas",
    "Numpy",
    "Matplotlib",
    "Plotly",
    "Seaborn",
    "Scikit-learn",
    "Keras",
    "Tensorflow",
    "R",
    "Anaconda"
] as const;
