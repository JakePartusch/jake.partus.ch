import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faExternalLinkSquareAlt,
  faStar
} from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const projectsData = useStaticQuery(graphql`
    query ProjectsQuery {
      allMarkdownRemark(
        filter: { frontmatter: { type: { ne: "blog" } } }
        sort: { fields: frontmatter___rank }
      ) {
        edges {
          node {
            frontmatter {
              rank
              siteLink
              sourceLink
              stars
              title
              content
            }
          }
        }
      }
    }
  `);
  const matchingProjects = projectsData.allMarkdownRemark.edges.map(edge => ({
    ...edge.node.frontmatter
  }));
  return (
    <ul
      className="m-auto pt-16 px-4 md:px-20 lg:px-32"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fit, minmax(300px, 1fr))`,
        gridGap: "12px",
        alignItems: "stretch"
      }}
    >
      {matchingProjects.map((project, i) => {
        return (
          <li
            key={project.title}
            className="relative flex flex-col bg-white rounded-lg justify-between shadow-lg pb-8"
          >
            {project.stars && (
              <div className="absolute top-0 text text-red-900 right-0 rounded-tl-lg p-2">
                <span className="mr-2">{project.stars}</span>
                <FontAwesomeIcon icon={faStar} />
              </div>
            )}
            <div className="flex flex-col justify-center items-center text-center mb-2 mt-8">
              <h2 className="text-gray-700 text-2xl font-bold mb-4 mx-10">
                {project.title}
              </h2>
              <p className="text-gray-900 text-xl mx-6">{project.content}</p>
            </div>
            <div className="mt-8 mb-8 flex items-center justify-center">
              <a
                href={project.sourceLink}
                target="_"
                rel="noopener"
                className="rounded px-3 py-2 bg-white hover:bg-gray-200 text-gray-800 text-xl font-semibold leading-tight shadow-md mr-2"
              >
                Source
                <FontAwesomeIcon
                  icon={faGithub}
                  size="lg"
                  className="ml-2 text-gray-900"
                />
              </a>
              <a
                href={project.siteLink}
                target="_"
                rel="noopener"
                className="rounded px-3 py-2 bg-blue-600 hover:bg-blue-600 text-gray-100 text-xl font-semibold leading-tight shadow-md"
              >
                Website
                <FontAwesomeIcon
                  icon={faExternalLinkSquareAlt}
                  size="lg"
                  className="ml-2 text-gray-100"
                />
              </a>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Projects;
