import React from "react";
import styled from "@emotion/styled";
import { useStaticQuery, graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = styled.li({
  maxWidth: 600,
  background: "rgb(255, 255, 255)",
  boxShadow: "0 0 6px rgba(0, 0, 0, 0.2)",
  padding: "1rem",
  margin: "1rem auto",
  listStyle: "none"
});

const ProjectCardHeading = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "0.5rem"
});

const ProjectCardTitle = styled.h2({
  marginBottom: 0,
  fontWeight: 100,
  fontSize: "1.3rem"
});

const Tags = styled.div({
  display: "flex"
});

const Tag = styled.p({
  fontWeight: 100,
  border: "solid 1px rgb(0,0,0,0.9)",
  padding: "0 4px",
  borderRadius: "4px",
  margin: "0 4px"
});

const Link = styled.a({
  margin: "0.25rem"
});

const GitHubLink = ({ url }) => {
  return (
    <Link aria-label="Link to GitHub" href={url} target="_" noopener noreferrer>
      <FontAwesomeIcon icon={faGithub} size="lg" color="rgb(0,0,0,0.75)" />
    </Link>
  );
};

const WebsiteLink = ({ url }) => {
  return (
    <Link
      aria-label="Link to website"
      href={url}
      target="_"
      noopener
      noreferrer
    >
      <FontAwesomeIcon
        icon={faExternalLinkSquareAlt}
        size="lg"
        color="rgb(0,0,0,0.75)"
      />
    </Link>
  );
};

const Actions = styled.div({
  minWidth: 65
});

const Projects = ({ selectedTechnology }) => {
  const projectsData = useStaticQuery(graphql`
    query ProjectsQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              content
              siteLink
              sourceLink
              tags
            }
          }
        }
      }
    }
  `);
  const matchingProjects = projectsData.allMarkdownRemark.edges
    .map(edge => ({
      ...edge.node.frontmatter
    }))
    .filter(
      project =>
        selectedTechnology &&
        project.tags.some(tag => selectedTechnology.originalName.includes(tag))
    );
  return (
    <ul>
      {matchingProjects.map((project, i) => {
        return (
          <ProjectCard>
            <ProjectCardHeading>
              <ProjectCardTitle>{project.title}</ProjectCardTitle>
              <Actions>
                <GitHubLink url={project.sourceLink} />
                <WebsiteLink url={project.siteLink} />
              </Actions>
            </ProjectCardHeading>
            <p>{project.content}</p>
            <Tags>
              {project.tags.map(tag => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </Tags>
          </ProjectCard>
        );
      })}
    </ul>
  );
};

export default Projects;
