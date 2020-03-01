import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

export function NavLinks({ className, ariaLabel, onLinkClick }) {
  return (
    <nav
      className={className}
      aria-label={ariaLabel}
    >
      <Link to="/" className="nav-link" onClick={onLinkClick} >
        Home
      </Link>
      <Link to="/schedule" className="nav-link" onClick={onLinkClick}>
        Show Schedule
      </Link>
      <Link to="/residents" className="nav-link" onClick={onLinkClick}>
        Reform Residents
      </Link>
      <Link to="/blog" className="nav-link" onClick={onLinkClick}>
        Blog
      </Link>
      <Link to="/about" className="nav-link" onClick={onLinkClick}>
        About Us
      </Link>
      <Link to="/projects" className="nav-link" onClick={onLinkClick}>
        Projects
      </Link>
      <Link to="/events" className="nav-link" onClick={onLinkClick}>
        Events
      </Link>
    </nav>
  )
}

NavLinks.propTypes = {
  className: PropTypes.string,
  onLinkClick: PropTypes.func,
  ariaLabel: PropTypes.string.isRequired,
}