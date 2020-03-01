import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faSoundcloud,
  faMixcloud,
} from '@fortawesome/free-brands-svg-icons'

export const PlayIcon = (props) => <FontAwesomeIcon icon={faPlay} {...props} />

export const PauseIcon = (props) => <FontAwesomeIcon icon={faPause} {...props} />

export const FacebookIcon = (props) => <FontAwesomeIcon icon={faFacebookF} {...props} />

export const TwitterIcon = (props) => <FontAwesomeIcon icon={faTwitter} {...props} />

export const InstagramIcon = (props) => <FontAwesomeIcon icon={faInstagram} {...props} />

export const SoundcloudIcon = (props) => <FontAwesomeIcon icon={faSoundcloud} {...props} />

export const MixcloudIcon = (props) => <FontAwesomeIcon icon={faMixcloud} {...props} />
