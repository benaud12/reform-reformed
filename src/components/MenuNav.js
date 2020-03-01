import React, { useContext } from 'react'
import * as c from 'classnames'

import { AppStateContext } from '../contexts/AppState'
import { Link } from 'gatsby'

export function MenuNav() {
  const { isMenuOpen, toggleMenu } = useContext(AppStateContext)

  return (
    <nav
      className={c('menu-nav', { open: isMenuOpen })}
      aria-label="Main Navigation"
    >
      <Link className="menu-nav__link" to="/" onClick={() => toggleMenu()}>
        Home
      </Link>
      <Link className="menu-nav__link" to="/about" onClick={() => toggleMenu()}>
        About
      </Link>
      <Link className="menu-nav__link" to="/blog" onClick={() => toggleMenu()}>
        Blog
      </Link>
    </nav>
  )
}
