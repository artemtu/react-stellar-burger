import React from 'react'
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './extraction.module.css'

function Extraction({setOrderModal}) {
  const onClick = () => {
    setOrderModal(true);
  }
  return (
    <div className={`${styles.extraction} mr-4 mt-10`}>
        <p className="text text_type_digits-medium pr-2">610</p>
        <CurrencyIcon/>
        <div className='ml-10'>
        <Button htmlType="button" type="primary" size="large" extraClass="ml-2" onClick={onClick}>Оформить заказ</Button>
        </div>
        
    </div>
  )
}

export default Extraction