import React from 'react'
import Header from '../../components/app-header/app-header'
import { Link } from "react-router-dom";
import styles from './orders.module.css'
import {useLocation} from "react-router-dom";

function ProfileOrders() {
    const location = useLocation();
  return (
    <>
    <h1>Страница в разработке</h1>
    <div className={styles.LeftMenu}>
        <Link className={`text text_type_main-medium ${location.pathname === '/orders' ? '' : 'text_color_inactive'}`} to='/profile' style={{ textDecoration: 'none' }} >Профиль</Link>
        <Link className={`text text_type_main-medium `}  style={{ textDecoration: 'none' }} to='/profile/orders'>История заказов</Link>
        <Link className={`text text_type_main-medium ${location.pathname === '/orders' ? '' : 'text_color_inactive'}`} style={{ textDecoration: 'none' }} to='/logout'>Выход</Link>
        <p className='text text_type_main-small'>В этом разделе вы можете изменить свои персональные данные</p>
      </div>
    </>
  )
}

export default ProfileOrders


// ${location.pathname === '/' ? '' : 'text_color_inactive'}