import React from 'react'
import Home from '../components/Home'

export default class Index extends React.Component {
  render() {
    const frontendLogos = this.props.data.frontendLogos.edges.map(image => image.node.resize.src);
    const backendLogos = this.props.data.backendLogos.edges.map(image => image.node.resize.src);
    const avatar = this.props.data.avatar.edges.map(image => image.node.resize.src)[0];
    const projects = this.props.data.projects.edges.map(project => ({ ...project.node.frontmatter }))
    return (
      <div>
        <Home
          avatar={avatar} 
          frontendLogos={frontendLogos}
          backendLogos={backendLogos}
          projects={projects}
        />
      </div>
    )
  }
}
export const pageQuery = graphql`
query IndexQuery {
  projects: allMarkdownRemark(
    filter: { id: { regex: "/work/" } }
  ) {
    edges {
      node {
        ... on MarkdownRemark {
          frontmatter {
            title
            content
            siteLink
            sourceLink
          }
        }
      }
    }
  }
  avatar: allImageSharp(filter: { id: { regex: "/avatar.jpg/" } }) { 
    edges {
      node {
        ... on ImageSharp {
          resize(width: 300, height: 300) {
            src
          }
        }
      }
    }
  }
  backendLogos: allImageSharp(filter: { id: { regex: "/backend/" } }) { 
    edges {
      node {
        ... on ImageSharp {
          resize(width: 200, height: 200) {
            src
          }
        }
      }
    }
  }
  frontendLogos: allImageSharp(filter: { id: { regex: "/frontend/" } }) { 
    edges {
      node {
        ... on ImageSharp {
          resize(width: 200, height: 200) {
            src
          }
        }
      }
    }
  }
}`
