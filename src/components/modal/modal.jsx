import React, { Children } from 'react'
import styles from './modal.module.css'
import { createPortal } from 'react-dom'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientDetails from '../Ingredientdetails/ingredientDetails'
import Ingredients from '../burgerconstructor/Ingredients/Ingredients'


const modalRoot = document.getElementById('react-modal')

function Modal() {

    return createPortal(
    (
    <div className={styles.modal}>
<div className={`${styles.details} mt-10 ml-10 mr-10`}>
        <h2 className='text text_type_main-large'>Детали ингридиента</h2>
        <CloseIcon type="primary"/>
        </div>
        <IngredientDetails/>
    </div>
  ), modalRoot
  )
}

export default Modal