import React, { useState } from 'react'
import * as c from 'classnames'

import fullLogo from '../img/reform-radio-logo-full.png'

export function IndexPage() {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false)

  return (
    <div className="homepage">
      <div className="homepage__heading">
        <h1>
          <img className="homepage__heading--logo" src={fullLogo} alt="Reform Radio" />
        </h1>
        <p>Broadcasting the best in music, arts and culture, from Manchester to the World</p>

        <div className="homepage__heading--overlay" />
      </div>
      <section className="homepage__content">
        <h2>Listen again</h2>
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
            title="Reform Radio Mixcloud"
            width="100%"
            height="300px"
            src="https://www.mixcloud.com/widget/iframe/?feed=%2Freformradio%2F"
            frameborder="0"
            onLoad={() => setIsIframeLoaded(true)}
          />
        </div>
      </section>
    </div>
  )
}

export default IndexPage
