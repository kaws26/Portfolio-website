import React from "react";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";  // Adjust this path to the correct component path

export function ExperienceTimeline() {
  const experienceData = [
    {
      title: "2024 - Present",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            AI/ML Team Member at Google Developer Student Clubs, University School of Information, Communication and Technology
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Focused on AI/ML research and development
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Collaborating with the tech community on AI projects
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://res.cloudinary.com/dzffxmfsu/image/upload/v1733397524/images_inalex.png"  // Replace with a relevant image
              alt="AI/ML project"
              width={500}
              height={300}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Oct 2024 - Present",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Web Team Member at GGSIPU USS ACM Student Chapter
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Working on various web development projects
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Collaborating with a team to build and maintain the chapter’s website
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://res.cloudinary.com/dzffxmfsu/image/upload/v1733397584/acm-Icon_uj0igj.png"  // Replace with a relevant image
              alt="Web development"
              width={500}
              height={300}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Nov 2023 - Present",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Volunteer at National Service Scheme
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Actively contributing to social service initiatives
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Organizing community outreach and awareness campaigns
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://res.cloudinary.com/dzffxmfsu/image/upload/v1733397618/download_gqk7md.jpg"  // Replace with a relevant image
              alt="Community service"
              width={500}
              height={300}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Sep 2024 - Oct 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Web Development Intern at Maya and Maya Enterprises
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Worked on building and deploying websites using HTML, CSS, and PHP
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Collaborated with the team to enhance user interfaces
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://res.cloudinary.com/dzffxmfsu/image/upload/v1733397704/c63c46_5656a73c8e5844b6b519b5eaada3ec72_mv2_f0enie.avif"  // Replace with a relevant image
              alt="Web Development"
              width={500}
              height={300}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <h1 className="text-5xl font-bold text-center py-4 text-gray-100 mb-12">My Experience</h1>
      <Timeline data={experienceData} />
    </div>
  );
}

export default ExperienceTimeline;
