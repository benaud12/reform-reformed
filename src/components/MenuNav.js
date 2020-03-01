import React, { useContext } from 'react'
import * as c from 'classnames'

import { AppStateContext } from '../contexts/AppState'
import { NavLinks } from './NavLinks'

export function MenuNav() {
  const { isMenuOpen, toggleMenu } = useContext(AppStateContext)

  return (
    <NavLinks
      className={c('menu-nav', { open: isMenuOpen })}
      ariaLabel="Main Navigation"
      onLinkClick={() => toggleMenu()}
    />
  )
}
