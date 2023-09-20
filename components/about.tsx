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
      <p className="mb-3">

        Upon completing my Bachelor{"'"}s degree in {" "}
        <span className="font-medium">Computer Science</span>{" "}, I embarked on my journey into
        the world of web development with a position at{" "}
        <span className="font-medium">Coeus Solutions.</span>{" "}
        The aspect of programming that truly captivates me is the art of problem-solving.
        There{"'"}s an indescribable satisfaction that comes with uncovering solutions to intricate challenges.
      </p>
      <p>
        My core skill set encompasses {" "}
        <span className="font-medium">PHP, JavaScript, React, Next.js, Node.js, and SQL</span>, {" "}
        with an additional familiarity in the realm of{" "}
        <span className="font-medium">Machine Learning</span>.{" "}
        I possess an insatiable curiosity for emerging technologies and am committed to continuous learning.
        Currently, I am <span className="font-medium">actively seeking a</span>{" "}
        <span className="font-bold">full-time opportunity as a software developer</span>{" "},
        eager to contribute my skills and passion to a dynamic team.

      </p>

      <p>
        <span className="italic">When I{"'"}m not coding</span>, I enjoy playing
        video games, watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>.
      </p>
    </motion.section>
  );
}
