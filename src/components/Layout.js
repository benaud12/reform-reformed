import React from 'react'
import { Helmet } from 'react-helmet'
import { AppStateProvider } from '../contexts/AppState'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'

import './all.scss'

const TemplateWrapper = ({ children, location }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon.ico`}
          sizes="16x16 32x32 62x62"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16.png`}
          sizes="16x16"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-48.png`}
          sizes="48x48"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-62.png`}
          sizes="62x62"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-192.png`}
          sizes="192x192"
        />

        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      <AppStateProvider>
        <Header location={location} />
        <main>
          {children}
        </main>
        <Footer />
      </AppStateProvider>
    </div>
  )
}

export default TemplateWrapper
