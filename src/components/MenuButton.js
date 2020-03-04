import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import * as c from 'classnames'

import { AppStateContext } from '../contexts/AppState'

export function MenuButton({ id, navId }) {
  const { isMenuOpen, toggleMenu } = useContext(AppStateContext)

  return (
    <button
      id={id}
      className={c('menu-button', { open: isMenuOpen })}
      onClick={() => toggleMenu()}
      onKeyDown={(e) => {
        if (isMenuOpen && e.key === 'Escape') {
          toggleMenu()
        }
      }}
      aria-label={`${isMenuOpen ? 'Close' : 'Open'} Main Navigation Menu`}
      aria-haspopup="true"
      aria-controls={navId}
      {...(isMenuOpen ? { 'aria-expanded': 'true' } : {})}
    >
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
        <rect className="line line__top" x="15" y="25" width="70" height="10" rx="5" />
        <rect className="line line__middle" x="15" y="45" width="70" height="10" rx="5" />
        <rect className="line line__bottom" x="15" y="65" width="70" height="10" rx="5" />
      </svg>
    </button>
  )
}

MenuButton.propTypes = {
  id: PropTypes.string,
  navId: PropTypes.string,
}
