import Image from "next/image";
import React from "react";

// Skill data array
const skills = [
  { name: "HTML", src: "/assets/skills/html.png" },
  { name: "CSS", src: "/assets/skills/css.png" },
  { name: "JavaScript", src: "/assets/skills/javascript.png" },
  { name: "React JS", src: "/assets/skills/react.png" },
  { name: "Next JS", src: "/assets/skills/nextjs.png" },
  { name: "Tailwind", src: "/assets/skills/tailwind.png" },
  { name: "TypeScript", src: "/assets/skills/typescript_original_logo_icon_146317.png" },
  { name: "Node JS", src: "/assets/skills/node.png" },
  { name: "MongoDB", src: "/assets/skills/mongo.png" },
  { name: "GitHub", src: "/assets/skills/github1.png" },
  { name: "Git", src: "/assets/skills/git_original_logo_icon_146509.png" },
  { name: "Redux", src: "/assets/skills/redux_original_logo_icon_146365.png" },
  { name: "SASS", src: "/assets/skills/sass_original_logo_icon_146350.png" },
  { name: "Bootstrap", src: "/assets/skills/bootstrap_plain_logo_icon_146619.png" },
];

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={skill.src} width={64} height={64} alt={skill.name} />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>{skill.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
