import React from 'react'
import text from './header.css'
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'

function Header() {
  return (
    <div className='header'>
        <p className='text text_type_main-default' > Конструктор</p>
        <p className='text text_type_main-default' > Лента заказов</p>
        <Logo/>
        <p className='text text_type_main-default' > Личный кабинет</p>
    </div>
   

  )
}

export default Header