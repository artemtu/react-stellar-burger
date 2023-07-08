import React from 'react'
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import extraction from './extraction.css'

function Extraction() {
  return (
    <div className='extraction mr-4 mt-10'>
        <p className="text text_type_digits-medium pr-2">610</p>
        <CurrencyIcon/>
        <div className='ml-10'>
        <Button htmlType="button" type="primary" size="large" extraClass="ml-2">Оформить заказ</Button>
        </div>
        
    </div>
  )
}

export default Extraction