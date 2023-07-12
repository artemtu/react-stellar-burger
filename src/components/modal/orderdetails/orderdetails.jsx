import React from 'react'
import styles from './orderdetails.module.css'
import orderImg from '../../../images/doneorder-done.png'



const modalRoot = document.getElementById('react-modal')

export function Orderdetails() {
  return (
    <div className={styles.figures}>
      <span className= 'text text_type_digits-large mt-30'>1904191</span>
      <p className='text text_type_main-default mt-8'>идентификатор заказа</p>
      <img src={orderImg} alt="заказ готов" className='mt-15'/>
      <p className='mt-15 text text_type_main-small'>Ваш заказ начали готовить</p>
      <p className='mt-2 text text_type_main-default text_color_inactive pb-30'>Дождитесь готовности на орбитальной станции</p>
    </div>


  )

}

export default Orderdetails