import React from "react";
import Projects from "./Projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faAws,
  faNodeJs,
  faDev,
  faGithub,
  faNpm,
  faJsSquare
} from "@fortawesome/free-brands-svg-icons";
import useMedia from "use-media";

const Skills = () => {
  const isWide = useMedia({ minWidth: "1000px" });
  const isSmall = useMedia({ maxWidth: "600px" });
  let iconSize = "3x";
  if (isWide) {
    iconSize = "4x";
  }
  if (isSmall) {
    iconSize = "2x";
  }
  return (
    <section className="bg-gray-100 pb-12">
        <div className="flex justify-between mx-5 md:mx-20">
          <FontAwesomeIcon
            icon={faJsSquare}
            style={{ transform: "translateY(-15vh)" }}
            className="text-red-900"
            size={iconSize}
          />
          <FontAwesomeIcon
            icon={faAws}
            style={{ transform: "translateY(-12.5vh)" }}
            className="text-red-900"
            size={iconSize}
          />
          <FontAwesomeIcon
            icon={faNodeJs}
            style={{ transform: "translateY(-10vh)" }}
            className="text-red-900"
            size={iconSize}
          />
          <FontAwesomeIcon
            icon={faDev}
            style={{ transform: "translateY(-7.5vh)" }}
            className="text-red-900"
            size={iconSize}
          />
          <FontAwesomeIcon
            icon={faGithub}
            style={{ transform: "translateY(-5vh)" }}
            className="text-red-900"
            size={iconSize}
          />
          <FontAwesomeIcon
            icon={faNpm}
            style={{ transform: "translateY(-2.5vh)" }}
            className="text-red-900"
            size={iconSize}
          />
          <FontAwesomeIcon
            icon={faReact}
            className="text-red-900"
            size={iconSize}
          />
        </div>
      <Projects />
    </section>
  );
};

export default Skills;
