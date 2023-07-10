import React from 'react'
import styles from './overlay.module.css'
import ReactDOM from 'react-dom'

const modalRoot = document.getElementById('react-modal')

function Overlay({setIsModalOpen}) {
  const onClick = () =>{
    setIsModalOpen(false)

  }
  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={onClick}></div>,
    modalRoot
  )
}

export default Overlay
