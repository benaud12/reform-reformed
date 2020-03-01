import React from 'react'
import { Link } from 'gatsby'

import notFoundImage from '../img/off-air.png'

function NotFoundPage() {
  return (
    <div className="not-found-page">
      <h1>Sorry, we couldn't find that page!</h1>
      <p>
        Why not go <Link to="/" >home</Link>?
      </p>
      <img src={notFoundImage} alt="Page not found" />
    </div>
  )
}

export default NotFoundPage
