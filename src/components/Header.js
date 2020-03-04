import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import * as c from 'classnames'

import { AppStateContext } from '../contexts/AppState'
import { AudioPlayer } from './AudioPlayer'
import { MenuButton } from './MenuButton'
import { NavLinks } from './NavLinks'

import logo from '../img/reform-radio-logo.png'
import { useCallback } from 'react'

export function Header({ location }) {
  const { isMenuOpen, toggleMenu } = useContext(AppStateContext)
  const [scrollPosition, setScrollPosition] = useState(0)
  const isHomePage = location && location.pathname === '/'

  const handleScroll = useCallback((e) => {
    try {
      setScrollPosition(e.target.scrollingElement.scrollTop)
    } catch {
      return;
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return function () {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll])

  return (
    <header
      className={c(
        'header',
        { 'with-bg': scrollPosition > 150 },
        { 'menu-open': isMenuOpen },
      )}
    >
      <div className="header__menu-bar" >
        <div
          className={c(
            'header__menu-bar--logo',
            { homepage: isHomePage },
          )}
        >
          <Link to="/" title="Logo">
            <img src={logo} alt="Reform Radio Logo" />
          </Link>
        </div>

        <AudioPlayer />

        <div className="header__menu-bar--menu-button">
          <MenuButton id="header-nav-menu-button" navId="header-nav-menu" />
        </div>
      </div>
      <NavLinks
        navProps={{
          className: c('header__nav-links', { 'menu-open': isMenuOpen }),
          id: "header-nav-menu",
          'aria-label': 'Main Navigation',
          'aria-labelledby': 'header-nav-menu-button',
        }}
        onLinkClick={() => toggleMenu()}
      />
    </header>
  )
}

Header.propTypes = {
  location: PropTypes.object.isRequired,
}
