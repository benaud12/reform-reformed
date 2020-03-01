import React, { createContext, useState, useCallback } from 'react'
import PropTypes from 'prop-types'

export const AppStateContext = createContext({
  isMenuOpen: false,
  toggleMenu: () => null,
})

export function AppStateProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen)
  }, [isMenuOpen])

  return (
    <AppStateContext.Provider value={{ isMenuOpen, toggleMenu }} >
      {children}
    </AppStateContext.Provider>
  )
}

AppStateProvider.propTypes = {
  children: PropTypes.node,
}
