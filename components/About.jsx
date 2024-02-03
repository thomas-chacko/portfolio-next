import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/thomas.jpg";

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
            Hello, I'm Thomas Chacko, a passionate Full Stack Developer with a
            strong foundation in computer science and a Bachelor's degree in
            Computer Applications (BCA). I thrive on turning ideas into digital
            solutions and enjoy the process of creating seamless, user-friendly
            experiences.
          </p>
          <p className="py-2 text-gray-600">
            In my professional journey, I have successfully contributed to
            various projects, utilizing my expertise in the MERN stack. From
            designing responsive user interfaces with React to building robust
            back-end services with Node.js and Express, my goal is to create
            seamless and enjoyable user experiences
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="noimage" />
        </div>
      </div>
    </div>
  );
};

export default About;
