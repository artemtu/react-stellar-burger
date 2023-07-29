import React from 'react'
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './extraction.module.css'
import { useSelector } from 'react-redux'
import { useMemo } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Extraction({setOrderModal}) {
  const onClick = () => {
    setOrderModal(true);
  }
  const ingredientsForPrice = useSelector((state) => state.constructorBurger);
  const buns = ingredientsForPrice.bun || [];
  const ingredients = ingredientsForPrice.ingredients || [];

  const totalPrice = React.useMemo(() => {
    const bunPrice = buns.reduce((acc, item) => acc + (item.price * 2  || 0), 0);
    const ingredientsPrice = ingredients.reduce((acc, item) => acc + (item.price || 0), 0);
    return bunPrice + ingredientsPrice;
  }, [buns, ingredients]);

  const isButtonDisabled = ingredientsForPrice.bun.length === 0  && ingredientsForPrice.ingredients.length === 0;


  return (
    <div className={`${styles.extraction} mr-4 mt-10`}>
        <p className="text text_type_digits-medium pr-2">{totalPrice}</p>
        <CurrencyIcon/>
        <div className='ml-10'>
        <Button htmlType="button" type="primary" size="large" extraClass="ml-2" onClick={onClick} disabled={isButtonDisabled}>Оформить заказ</Button>
        </div>
        
    </div>
  )
}

export default Extraction