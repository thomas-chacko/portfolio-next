import ProjectItem from "./ProjectItem";

// Importing project images
import ecommerse from "../public/assets/projects/ecommerse.png";
import netflix from "../public/assets/projects/netfix.png";
import travel from "../public/assets/projects/travel.png";
import weather from "../public/assets/projects/weather.png";
import starbucks from "../public/assets/projects/scrnli_12_19_2023_9-47-18 AM.png";

// Project data array
const projectData = [
  {
    title: "Snap Shop",
    backgroundImg: ecommerse,
    tech: "React JS, Node JS, Express JS, MongoDB, Tailwind CSS, JWT",
  },
  {
    title: "Netflix Clone",
    backgroundImg: netflix,
    tech: "React JS",
  },
  {
    title: "Travel App",
    backgroundImg: travel,
    tech: "HTML, CSS, JavaScript",
  },
  {
    title: "Weather App",
    backgroundImg: weather,
    tech: "HTML, SCSS, JavaScript",
  },
  {
    title: "Starbucks Clone",
    backgroundImg: starbucks,
    tech: "React JS, Tailwind CSS",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectData.map((project, index) => (
            <ProjectItem
              key={index}
              title={project.title}
              backgroundImg={project.backgroundImg}
              tech={project.tech}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
