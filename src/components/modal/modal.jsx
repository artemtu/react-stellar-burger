import React, { Children } from 'react'
import styles from './modal.module.css'
import { createPortal } from 'react-dom'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientDetails from './Ingredientdetails/ingredientDetails'
import Ingredients from '../main/burgerconstructor/Ingredients/Ingredients'
import Orderdetails from './orderdetails/orderdetails'


const modalRoot = document.getElementById('react-modal')

function Modal({setIsModalOpen}) {
  const OnClick = () => {
    setIsModalOpen(false)
  }

    return createPortal(
    (
    <div className={styles.modal}>
       <div className={`${styles.close}`}>
        <button className={`${styles.close__button}`}  onClick={OnClick} > 
        <CloseIcon type="primary"/>
        </button>
       </div>
        <IngredientDetails/>
    </div>
  ), modalRoot
  )
}

export default Modal