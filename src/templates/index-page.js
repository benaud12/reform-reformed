import React from 'react'

import fullLogo from '../img/reform-radio-logo-full.png'

export function IndexPage() {
  return (
    <div className="homepage">
      <div className="homepage__heading">
        <h1>
          <img class="homepage__heading--logo" src={fullLogo} alt="Reform Radio" />
        </h1>
        <p>Broadcasting the best in music, arts and culture, from Manchester to the World</p>

        <div className="homepage__heading--overlay" />
      </div>
    </div>
  )
}

export default IndexPage
