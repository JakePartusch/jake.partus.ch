import React, { useState } from "react";
import styled from "@emotion/styled";
import { useStaticQuery, graphql } from "gatsby";
import Projects from "./Projects";

const SkillsSegment = styled.div({
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
      <TechnologiesContainer>
        <CardGroup>
          {technologyLogos.map((logo, i) => (
            <LogoButton onClick={() => setSelectedLogo(i)}>
              <Card key={logo} src={logo.src} selected={i === selectedLogo} />
            </LogoButton>
          ))}
        </CardGroup>
      </TechnologiesContainer>
      <Projects selectedTechnology={technologyLogos[selectedLogo]} />
    </SkillsSegment>
  );
};

export default Skills;
