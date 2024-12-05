import { SparklesCore } from "@/components/ui/sparkles";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { FlipWords } from "@/components/ui/flip-words";

import Image from 'next/image';

const words1 = ["BTech-IT Student","Software Engineer","AI/ML Engineer","Web Developer",];

const words = [
  {
    text: "I'm ",
    className: "text-gray-300 text-6xl", 
  },
  {
    text: "Kawaljeet ",
    className: "text-blue-500 text-6xl", 
  },
  {
    text: " Singh",
    className: "text-blue-500 text-6xl", 
  },
  
];

export function HeroSection() {
  return (
    <div className="bg-[#050619] h-auto md:h-[45rem] w-full rounded-md flex flex-col md:flex-row items-center justify-between relative overflow-hidden mx-auto py-10 px-6 md:px-16">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      
      {/* Left Section: Text */}
      <div className="relative z-10 w-full md:w-1/2 flex flex-col items-start">
     <h1 className="m-1 text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight">
        <TypewriterEffect words={words}  />
      </h1>
      <br />
      <div className="text-7xl font-semibold ">
      <FlipWords words={words1} className="text-gray-100"/> <br />
      </div>
      
      </div>
       {/* Right Section: Image */}
       <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center items-center mt-10 md:mt-0">
        <Image
          src="https://res.cloudinary.com/dzffxmfsu/image/upload/t_Profile/v1733383158/WhatsApp_Image_2024-12-05_at_12.10.06_8df4027a_iwdosi.jpg"
          alt="Profile pic"
          width={250}
          height={250}
          className="rounded-lg shadow-lg object-cover max-w-full h-auto"
        />
        </div>
    </div>
  );
}