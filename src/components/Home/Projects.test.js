import React from "react";
import { render } from "@testing-library/react";
import Projects from "./Projects";
import { useStaticQuery } from "gatsby";

describe("Projects", () => {
  it("should render all of the projects", () => {
    const projectsData = {
      allMarkdownRemark: {
        edges: [
          {
            node: {
              frontmatter: {
                tags: ["aws"],
                sourceLink: "https://github.com/thing1",
                title: "AWS Thing 1"
              }
            }
          },
          {
            node: {
              frontmatter: {
                tags: ["aws"],
                sourceLink: "https://github.com/thing2",
                title: "AWS Thing 2"
              }
            }
          }
        ]
      }
    };
    const selectedTechnology = {
      originalName: "aws"
    };
    useStaticQuery.mockReturnValueOnce(projectsData);
    const { getByText } = render(
      <Projects selectedTechnology={selectedTechnology} />
    );
    expect(getByText("AWS Thing 1")).not.toBeNull();
    expect(getByText("AWS Thing 2")).not.toBeNull();
  });
});
