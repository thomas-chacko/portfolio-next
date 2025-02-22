import React from "react";
import Image from "next/image";
import AboutImg from "../public/assets/thomas.png";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Hello, I'm Thomas Chacko, a passionate Front-End Developer with a strong foundation in computer science and a Bachelor's degree in Computer Applications (BCA). I thrive on turning ideas into engaging digital experiences and enjoy crafting seamless, user-friendly interfaces.
          </p>
          <p className="py-2 text-gray-600">
          In my professional journey, I have successfully contributed to various projects, specializing in React, Next.js, Tailwind CSS, HTML, CSS, JavaScript, and TypeScript to build responsive, high-performance web applications. My focus is on delivering smooth user experiences, optimized performance, and clean, maintainable code.
          </p>
        </div>
        <div className="w-full h-auto m-auto flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
  <Image src={AboutImg} className="rounded-xl drop-shadow-2xl" alt="noimage" />
</div>

      </div>
    </div>
  );
};

export default About;
