import React from 'react'
import PropTypes from 'prop-types'

import { NavLinks } from './NavLinks'
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  SoundcloudIcon,
  MixcloudIcon,
} from './Icons'

import logo from '../img/reform-radio-logo-full.png'
import fundingGmca from '../img/reform-funding-gmca.png'
import fundingEu from '../img/reform-funding-eu.png'
import fundingEsfa from '../img/reform-funding-esfa.png'
import fundingMcc from '../img/reform-funding-mcc.png'

export function Footer({ footerProps }) {
  return (
    <footer className="footer" {...footerProps}>
      <div className="dark-bg">
        <NavLinks
          navProps={{
            className: 'footer__nav',
            'aria-label': 'Footer Site Navigation',
          }}
        />

        <img className="footer__logo" src={logo} alt="Reform Radio Logo" style={{ width: '10rem' }} />

        <p>Join us on</p>
        <ul className="footer__social-links-list">
          <li>
            <a
              href="https://www.facebook.com/reformradio"
              target="_blank"
              rel="noopener noreferrer"
              title="Link to Reform Radio's Facebook page (opens in new window)"
            >
              <FacebookIcon />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/ReformRadioMCR"
              target="_blank"
              rel="noopener noreferrer"
              title="Link to Reform Radio's Twitter page (opens in new window)"
            >
              <TwitterIcon />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/reformradio"
              target="_blank"
              rel="noopener noreferrer"
              title="Link to Reform Radio's Instagram page (opens in new window)"
            >
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a
              href="https://soundcloud.com/reformradiomanchester"
              target="_blank"
              rel="noopener noreferrer"
              title="Link to Reform Radio's Soundcloud page (opens in new window)"
            >
              <SoundcloudIcon />
            </a>
          </li>
          <li>
            <a
              href="https://www.mixcloud.com/reformradio/"
              target="_blank"
              rel="noopener noreferrer"
              title="Link to Reform Radio's Mixcloud page (opens in new window)"
            >
              <MixcloudIcon />
            </a>
          </li>
        </ul>

        <p className="footer__copyright">
          &copy; 2017 Reform Radio
        </p>
      </div>

      <div className="white-bg">
        <div className="footer__funding">
          <img src={fundingGmca} alt="Reform Radio Funding Greater Manchester Combined Authority" style={{ width: '8rem' }} />
          <img src={fundingEu} alt="Reform Radio Funding EU European Social Fund" style={{ width: '8rem' }} />
          <img src={fundingEsfa} alt="Reform Radio Funding Education & Skills Funding Agency" style={{ width: '8rem' }} />
          <img src={fundingMcc} alt="Reform Radio Funding Manchester City Council" style={{ width: '8rem' }} />
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  footerProps: PropTypes.object,
}