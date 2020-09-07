import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Content, { HTMLContent } from "../components/Content";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

import titleBgImage from "../img/reform-radio-studio-equipment.jpg";
import contentBgImage from "../img/granadaskyline.jpg";

export const AboutPageTemplate = ({
  title,
  content,
  contentComponent,
  teamMembersTitle,
  teamMembers,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      <div
        className="title-container"
        style={{ backgroundImage: `url(${titleBgImage})` }}
      >
        <div className="title-container-overlay" />
        <div className="container">
          <h1 className="">{title}</h1>
        </div>
      </div>
      <section
        className="section about-page-content-section"
        style={{ backgroundImage: `url(${contentBgImage})` }}
      >
        <div className="container">
          <PageContent
            className="content has-text-centered about-page-content"
            content={content}
          />
        </div>
      </section>
      <section className="section">
        <div className="container has-text-centered">
          <h2>{teamMembersTitle}</h2>
          <ul className="columns is-centered is-multiline">
            {teamMembers.map(({ name, role, image }, index) => (
              <li
                key={`about-team-member-${index}`}
                className="column has-text-centered"
              >
                <div className="is-flex is-flex-column is-flex-align-center">
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: image,
                      alt: `${name}, ${role} at Reform Radio`,
                      style: {
                        borderRadius: "50%",
                        height: 128,
                        width: 128,
                      },
                    }}
                  />
                  {name}
                  <br />
                  {role}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  teamMembersTitle: PropTypes.string,
  teamMembers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      role: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    })
  ),
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <AboutPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
      teamMembersTitle={post.frontmatter.teamMembersTitle}
      teamMembers={post.frontmatter.teamMembers}
    />
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        teamMembersTitle
        teamMembers {
          name
          role
          image {
            childImageSharp {
              fluid(maxWidth: 128, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
