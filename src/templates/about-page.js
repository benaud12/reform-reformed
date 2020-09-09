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
        <h1>{title}</h1>
      </div>
      <section
        className="about-page-content-section"
        style={{ backgroundImage: `url(${contentBgImage})` }}
      >
        <PageContent
          className="flex flex-col items-center md:container text-center relative p-6"
          content={content}
        />
      </section>
      <section className="text-center p-8">
        <h2>{teamMembersTitle}</h2>
        <ul className="flex flex-wrap justify-center">
          {teamMembers.map(({ name, role, image }, index) => (
            <li key={`about-team-member-${index}`} className="text-center p-8">
              <div className="w-40 h-40 mb-4">
                <PreviewCompatibleImage
                  imageInfo={{
                    image: image,
                    alt: `${name}, ${role} at Reform Radio`,
                    style: {
                      borderRadius: "50%",
                      height: "100%",
                      width: "100%",
                    },
                  }}
                />
              </div>
              {name}
              <br />
              {role}
            </li>
          ))}
        </ul>
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
