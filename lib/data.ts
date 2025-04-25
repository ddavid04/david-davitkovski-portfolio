import React from "react";
import meetupsImg from "@/public/01_meetups.png";
import cloudStorageImg from "@/public/02_cloud-storage-app.png"
import qrImg from "@/public/03_qr-generator.png"
import memoryImg from "@/public/04_memory-game.png"
import drumImg from "@/public/05_drum-kit.png"
import jupyterImg from "@/public/06_ml-ds-projects.png"

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
    // Commenting About
    // {
    //     name: "About",
    //     hash: "#about",
    // },
    //
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
            "I took courses on Free Software and Machine Learning, gaining daily terminal skills with Linux and a foundation in Python, ML, and AI concepts.",
        icon: React.createElement(FcLinux),
        date: "March 2023",
    },
    {
        title: "Bachelor of Software Engineering",
        location: "FINKI, Skopje, MK",
        description: "Software Engineering student. Main focus AI, Machine Learning, Data Science, Data Engineering, Data Mining",
        // icon: React.createElement(FcConferenceCall),
        icon: React.createElement(FcGraduationCap),
        date: "2023 - Future 2027",
    },
    {
        title: "ReactJS & NextJS Udemy course",
        location: "Skopje, MK",
        description: "Completed frontend JavaScript libraries/frameworks",
        icon: React.createElement(FcRegisteredTrademark),
        date: "June 2024",
    },
    {
        title: "Spring Boot and Python for Data Science Udemy courses",
        location: "Skopje, MK",
        description: "Enhancing my Data Science and Web dev knowledge",
        icon: React.createElement(FcCommandLine),
        date: "2024 - present",
    },
] as const;

export const projectsData = [
    {
        title: "Olympic Games Machine Learning Project",
        description:
            "A simple machine learning project that predicts how many medals will a country achieve on the olympic games.",
        tags: ["Python", "Pandas", "Numpy", "Matplotlib", "Plotly", "Seaborn", "Scikit-learn"],
        imageUrl: jupyterImg,
        githubUrl: null,
        webUrl: null,
        notebookUrl: "https://github.com/ddavid04/Machine-Learning-Projects/blob/main/Olympic-Medals/Olympic_Medals_ML_Model.ipynb"
    },
    // {
    //     title: "Meetups app",
    //     description:
    //         "This is my first NextJS project and also the first time encountering with MongoDB.",
    //     tags: ["React", "Next.js", "MongoDB"],
    //     imageUrl: meetupsImg,
    //     githubUrl: "https://github.com/ddavid04/nextjs-mongodb-webpage",
    //     webUrl: "https://nextjs-mongodb-webpage.vercel.app/",
    //     notebookUrl: null,
    // },
    {
        title: "Image and Video Cloud Storage",
        description:
            "This is my fully functional cloud storage for images and videos with implemented AI",
        tags: ["React", "Next.js", "Cloudinary"],
        imageUrl: cloudStorageImg,
        githubUrl: "https://github.com/ddavid04/Cloud-Storage",
        webUrl: "https://davids-image-cloud-storage.vercel.app/",
        notebookUrl: null,
    },
    // {
    //     title: "Text to QR image generator",
    //     description:
    //         "This is a simple QR code generator from text. Perfect for URLs",
    //     tags: ["HTML", "CSS", "Javascript"],
    //     imageUrl: qrImg,
    //     githubUrl: "https://github.com/ddavid04/qr-generator",
    //     webUrl: "https://ddavid04.github.io/qr-generator/",
    //     notebookUrl: null,
    // },
    // {
    //     title: "Simple Memory Game",
    //     description:
    //         "JavaScript memory game to test your intelligence",
    //     tags: ["HTML", "CSS", "Javascript"],
    //     imageUrl: memoryImg,
    //     githubUrl: "https://github.com/ddavid04/Memory-Game",
    //     webUrl: "https://ddavid04.github.io/Memory-Game/",
    //     notebookUrl: null,
    // },
    // {
    //     title: "Interactive drum-kit app",
    //     description:
    //         "Just a drum-kit you could access on the go",
    //     tags: ["HTML", "CSS", "Javascript"],
    //     imageUrl: drumImg,
    //     githubUrl: "https://github.com/ddavid04/Drum-Kit",
    //     webUrl: "https://ddavid04.github.io/Drum-Kit/",
    //     notebookUrl: null,
    // },

] as const;


export const skillsData = [
    "Python",
    "Pandas",
    "Numpy",
    "Matplotlib",
    "Plotly",
    "Seaborn",
    "Scikit-learn",
    "Keras",
    "Tensorflow",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Git",
    "Tailwind",
    "MySQL",
    "PostgreSQL"
] as const;
