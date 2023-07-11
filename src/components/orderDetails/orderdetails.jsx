import React from 'react'
import styles from './module.order.css'
import { createPortal } from 'react-dom'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const modalRoot = document.getElementById('react-modal')

function Orderdetails() {
    return createPortal(
    (
    <div className={styles.module}>
<div className={`${styles.details} mt-10 ml-10 mr-10`}>
        <h2 className='text text_type_main-large'>Второй попап</h2>
        <CloseIcon type="primary"/>
        </div>
        <p className='text text_type_main-medium mt-4'>Второй попап</p> 
    </div>
  ), modalRoot
  )
}

export default Orderdetails