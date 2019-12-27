import React, { useState } from "react";
import styled from "@emotion/styled";
import { useStaticQuery, graphql } from "gatsby";
import Projects from "./Projects";

const SkillsSegment = styled.section({
  background: "rgb(255, 255, 255, .9)",
  borderBottom: "1px solid rgba(34, 36, 38, .15)",
  minHeight: "100vh"
});

const TechnologiesContainer = styled.div({
  overflowX: "auto"
});

const CardGroup = styled.div({
  display: "flex",
  justifyContent: "center",
  minWidth: 1250
});

const Card = styled.img(({ selected }) => ({
  width: "200px",
  height: "200px",
  objectFit: "cover",
  margin: "1rem",
  padding: "1rem",
  background: "rgb(255, 255, 255)",
  boxShadow: selected ? "0 0 6px rgba(0, 0, 0, 0.2)" : undefined
}));

const LogoButton = styled.button({
  minWidth: 250,
  border: "none",
  padding: 0,
  cursor: "pointer",
  background: "rgb(255, 255, 255, .9)",
  ":focus": {
    outline: "none"
  }
});

const Heading = styled.h1({
  textAlign: "center",
  fontSize: "3em",
  marginBottom: "3rem"
});

const Skills = props => {
  const [selectedLogo, setSelectedLogo] = useState(0);
  const technologies = useStaticQuery(graphql`
    query TechnologiesQuery {
      allImageSharp(filter: { original: { src: { regex: "/tech/" } } }) {
        edges {
          node {
            resize(width: 200, height: 200) {
              src
              originalName
            }
          }
        }
      }
    }
  `);
  const technologyLogos = technologies.allImageSharp.edges.map(edge => ({
    src: edge.node.resize.src,
    originalName: edge.node.resize.originalName
  }));
  return (
    <SkillsSegment>
      <Heading>My Projects</Heading>
      <TechnologiesContainer>
        <CardGroup>
          {technologyLogos.map((logo, i) => {
            const technologyShortName = logo.originalName
              .split(".")[0]
              .split("_")[1];
            return (
              <LogoButton
                aria-label={`show projects related to ${technologyShortName}`}
                aria-selected={i === selectedLogo}
                key={logo.src}
                onClick={() => setSelectedLogo(i)}
              >
                <Card
                  alt={`${technologyShortName}`}
                  src={logo.src}
                  selected={i === selectedLogo}
                />
              </LogoButton>
            );
          })}
        </CardGroup>
      </TechnologiesContainer>
      <Projects selectedTechnology={technologyLogos[selectedLogo]} />
    </SkillsSegment>
  );
};

export default Skills;
