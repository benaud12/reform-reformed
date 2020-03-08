import React, { useState } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import * as c from 'classnames'

import fullLogo from '../img/reform-radio-logo-full.png'

export function IndexPageTemplate({
  description,
  image,
  mixcloud,
}) {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false)

  return (
    <div className="homepage">
      <div
        className="homepage__heading"
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
        }}
      >
        <h1>
          <img className="homepage__heading--logo" src={fullLogo} alt="Reform Radio" />
        </h1>
        <p>{description}</p>

        <div className="homepage__heading--overlay" />
      </div>
      <section className="homepage__content">
        <h2>{mixcloud.heading}</h2>
        <div className="homepage__mixcloud-wrapper">
          <div
            className={c(
              'homepage__mixcloud-loader',
              { 'iframe-loaded': isIframeLoaded },
            )}
          >
            <div className="homepage__mixcloud-loader--header animate">
              <div className="homepage__mixcloud-loader--header-top" />
              <div className="homepage__mixcloud-loader--header-bottom" />
            </div>
            <div className="homepage__mixcloud-loader--button animate">
              <div className="homepage__mixcloud-loader--button-play" />
            </div>
          </div>
          <iframe
            title={mixcloud.title}
            width="100%"
            height="300px"
            src={mixcloud.url}
            frameborder="0"
            onLoad={() => setIsIframeLoaded(true)}
          />
        </div>
      </section>
    </div>
  )
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  description: PropTypes.string,
  mixcloud: PropTypes.shape({
    heading: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <IndexPageTemplate
      image={frontmatter.image}
      description={frontmatter.description}
      mixcloud={frontmatter.mixcloud}
    />
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        description
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mixcloud {
          heading
          title
          url
        }
      }
    }
  }
`