import React from "react";
import meetupsImg from "@/public/meetups.png";
import sharecipeImg from "@/public/sharecipe.png";
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
            "Filled with a lot of math and hard work, I graduated after 4 years of studying. That's when i fell in love with coding.",
        icon: React.createElement(FcGraduationCap),
        date: "2019 - 2023",
    },
    {
        title: "Brainster Fullstack Academy",
        location: "Brainster, Skopje, MK",
        description:
            "I've gained a lot of knowledge and experience from this academy in the field of fullstack development. Learned technologies such as HTML, CSS, Bootstrap, Git, SQL, PHP, JavaScript and Laravel.",
        icon: React.createElement(FcReading),
        date: "2021 - 2022",
    },
    {
        title: "Java Beginners Bootcamp @ Netcetera",
        location: "Netcetera, Skopje, MK",
        description: "First encountering with Java and learning the basics of Java. Four saturdays of solving problems and developing games.",
        icon: React.createElement(GiCoffeeCup),
        date: "February 2023",
    },
    {
        title: "FEEIT FabLab free courses",
        location: "FEEIT, Skopje, MK",
        description:
            `I've attended 2 courses at the same time. The first course was about "Free Software". There I was introduced to Linux and Kernel based operating systems and the power of the terminal (which i use EVERY DAY). The second course was "Intro in Machine Learning" where i was introduced to Python and the Math and logic behind the ML and AI models.`,
        icon: React.createElement(FcLinux),
        date: "March 2023",
    },
    {
        title: "Bachelor of Software Engineering",
        location: "FINKI, Skopje, MK",
        description: `My current ongoing education is at the Faculty of Computer Science and Engineering, and im majoring in Software Engineering. I am passionate about deepening my knowledge in ML and Data Science. My goal is to explore and develop in those fields.`,
        icon: React.createElement(FcConferenceCall),
        date: "2023 - Future 2027",
    },
    {
        title: "ReactJS & NextJS Udemy course",
        location: "Skopje, MK",
        description: `I pursued additional learning outside my formal education, completing a ReactJS & NextJS course for enhancing my web-development skills.`,
        icon: React.createElement(FcRegisteredTrademark),
        date: "June 2024",
    },
    {
        title: "Spring Boot and Python for Data Science Udemy courses",
        location: "Skopje, MK",
        description: `Currently studying Spring Boot so i can land some IT jobs, and learning Python for Data Science because it's my passion. Hopefully i'll finish them by the end of the year.`,
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
    },
    {
        title: "Share Recipes app",
        description:
            "This is my fullstack apps for sharing recipes and storing the data in MongoDB and the images in Amazon S3",
        tags: ["React", "Next.js", "MongoDB", "Amazon S3"],
        imageUrl: sharecipeImg,
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
    "Java",
    "C++",
    "Bash",
    "Python",
    "AWS S3"
] as const;
