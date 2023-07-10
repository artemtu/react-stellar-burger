import React from 'react'
import styles from './modal.module.css'
import { createPortal } from 'react-dom'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const modalRoot = document.getElementById('react-modal')

function Modal() {
    return createPortal(
    (
    <div className={styles.modal}>
<div className={`${styles.details} mt-10 ml-10 mr-10`}>
        <h2 className='text text_type_main-large'>Детали ингридиента</h2>
        <CloseIcon type="primary"/>
        </div>
        <div className={styles.picture}>
        <img src="https://code.s3.yandex.net/react/code/meat-01-large.png" alt=" " />
        <p className='text text_type_main-medium mt-4'>Биокотлета из Марсианской магнолии</p> 
        </div>
        <div className={`${styles.rows} mb-15`}>
        <div className={styles.calories}>
            <p className='text text_type_main-small mt-8'>Калории ккал</p>
            <p className='text text_type_main-small'>244,4</p>
        </div>
        <div className={styles.calories}>
            <p className='text text_type_main-small mt-8'>Белки, г</p>
            <p className='text text_type_main-small'>244,4</p>
        </div>
        <div className={styles.calories}>
            <p className='text text_type_main-small mt-8'>Жиры, г</p>
            <p className='text text_type_main-small'>244,4</p>
        </div>
        <div className={styles.calories}>
            <p className='text text_type_main-small mt-8'>Углеводы, г</p>
            <p className='text text_type_main-small'>244,4</p>
        </div>
        </div>

    </div>
  ), modalRoot
  )
}

export default Modal