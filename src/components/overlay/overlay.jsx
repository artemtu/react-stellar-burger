import React from 'react'
import styles from './overlay.module.css'
import ReactDOM from 'react-dom'

const modalRoot = document.getElementById('react-modal')

function Overlay({children}) {
  return ReactDOM.createPortal(
    <div className={styles.overlay}>{children}</div>,
    modalRoot
  )
}

export default Overlay
