import React from 'react'
import { Link } from 'gatsby'

import { AudioPlayer } from './AudioPlayer'
import { MenuButton } from './MenuButton'
import { MenuNav } from './MenuNav'

import logo from '../img/reform-radio-logo.png'

export function Header() {
  return (
    <header>
      <Link to="/" className="header-logo" title="Logo">
        <img src={logo} alt="Reform Radio" />
      </Link>
      <AudioPlayer />
      <MenuButton />
      <MenuNav />
    </header>
  )
}
