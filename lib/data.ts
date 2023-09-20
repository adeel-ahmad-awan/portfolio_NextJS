import React from "react";
import { LuCode } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  // {
  //   name: "Projects",
  //   hash: "#projects",
  // },
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
    title: "Frontend Developer",
    location: "Muslim Kids TV",
    description:
      "I have been a remote frontend developer at Muslim Kids TV for over a year, where I focus on enhancing development efficiency through the creation of reusable UI components in React, HTML, and CSS. I also facilitate collaboration with UX and back-end teams to ensure user-centric integration.",
    icon: React.createElement(LuCode),
    date: "2022 - Present",
  },
  {
    title: "Full-Stack Developer",
    location: "Coeus Solutions",
    description:
    "I have experience as a full-stack developer at Coeus Solutions, where I've been involved in multiple projects, including leading one, and I've also worked on e-commerce plugins.",
    icon: React.createElement(LuCode),
    date: "2018 - 2021",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Git",
  "PHP",
  "SQL",
  "ORM",
  "PostgreSQL",
  "Python",
  "Django",
  "WebDriverIO"
] as const;
