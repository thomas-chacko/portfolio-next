import blog from "../public/assets/projects/blog.png";
import ecommerse from "../public/assets/projects/ecommerse.png";
import netflix from "../public/assets/projects/netfix.png";
import travel from "../public/assets/projects/travel.png";
import weather from "../public/assets/projects/weather.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Blog App"
            backgroundImg={blog}
            tech="React JS Node JS Express Js MongoDB Tailwind CSS"
          />
          <ProjectItem
            title="Snap Shop"
            backgroundImg={ecommerse}
            tech="React JS Node JS Express Js MongoDB Tailwind CSS"
          />
          <ProjectItem
            title="Netflix"
            backgroundImg={netflix}
            tech="React JS"
          />
          <ProjectItem
            title="Travel App"
            backgroundImg={travel}
            tech="Html Css Javascript"
          />
          <ProjectItem
            title="Weather App"
            backgroundImg={weather}
            tech="Html SCSS Javascript"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
