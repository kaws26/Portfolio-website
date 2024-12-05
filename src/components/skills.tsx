"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";  // Using the provided StickyScroll component
import Image from "next/image";  // Importing Next.js Image component

const skillsContent = [
  {
    title: "Web Development",
    description:
      "I specialize in building responsive and dynamic websites. Proficient in Next.js, Flask, and full-stack development, I create scalable and efficient web applications.",
    imageUrl:
      "https://res.cloudinary.com/dzffxmfsu/image/upload/v1733395616/download_fenty1.jpg", // Replace with a relevant image URL
  },
  {
    title: "Data Science",
    description:
      "Experienced in Data Science with expertise in libraries such as Pandas, NumPy, and TensorFlow for machine learning and data manipulation. I analyze and visualize data to extract actionable insights.",
    imageUrl:
      "https://res.cloudinary.com/dzffxmfsu/image/upload/v1733395680/download_evwacm.jpg", // Replace with a relevant image URL
  },
  {
    title: "LangChain",
    description:
      "Familiar with LangChain, a powerful framework for building applications using large language models. I use it to enhance web applications with AI-driven solutions.",
    imageUrl:
      "https://res.cloudinary.com/dzffxmfsu/image/upload/v1733395729/download_ftxmym.jpg", // Replace with a relevant image URL
  },
  {
    title: "Competitive Programming (DSA in C++)",
    description:
      "Skilled in Data Structures and Algorithms, with a strong background in competitive programming using C++. I enjoy solving complex algorithmic challenges.",
    imageUrl:
      "https://res.cloudinary.com/dzffxmfsu/image/upload/v1733395788/0_Rhu1FRkUGZFAeGIy_bwldln.png", // Replace with a relevant image URL
  },
];

function Skills() {
  const modifiedContent = skillsContent.map((skill) => ({
    ...skill,
    content: (
      <div className="flex items-center space-x-8 p-8">
        
          <Image
            src={skill.imageUrl}
            alt={skill.title}
            width={400}
            height={400}
            className="object-cover rounded-lg shadow-lg"
          />
        
      </div>
    ),
  }));

  return (
    <div className="w-full py-16 bg-gradient-to-r from-cyan-500 to-emerald-500">
      <h1 className="text-5xl font-bold text-center text-white mb-12">My Skills</h1>
      <StickyScroll content={modifiedContent} />
    </div>
  );
}

export default Skills;
