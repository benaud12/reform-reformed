import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'

export const PlayIcon = (props) => <FontAwesomeIcon icon={faPlay} {...props} />

export const PauseIcon = (props) => <FontAwesomeIcon icon={faPause} {...props} />
